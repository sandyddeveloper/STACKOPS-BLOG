import axios from "./axios";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useAuthStore } from "../store/auth";

// === Toast Notification Setup ===
const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
});

// === Helper: Check if access token is expired ===
export const isAccessTokenExpired = (accessToken) => {
    try {
        const decodedToken = jwtDecode(accessToken);
        return decodedToken.exp < Date.now() / 1000;
    } catch (err) {
        return true;
    }
};

// === Helper: Refresh token ===
export const getRefreshToken = async () => {
    const refresh_token = Cookies.get("refresh_token");
    const response = await axios.post("user/token/refresh/", {
        refresh: refresh_token,
    });
    return response.data;
};

// === Helper: Set tokens in cookies & user in store ===
export const setAuthUser = (access_token, refresh_token) => {
    Cookies.set("access_token", access_token, {
        expires: 1,
        secure: true,
    });
    Cookies.set("refresh_token", refresh_token, {
        expires: 7,
        secure: true,
    });

    const user = jwtDecode(access_token) ?? null;
    if (user) {
        useAuthStore.getState().setUser(user);
    }
    useAuthStore.getState().setLoading(false);
};

// === Set user on page load ===
export const setUser = async () => {
    try {
        const accessToken = Cookies.get("access_token");
        const refreshToken = Cookies.get("refresh_token");

        if (!accessToken || !refreshToken) return;

        let validAccess = accessToken;
        let validRefresh = refreshToken;

        if (isAccessTokenExpired(accessToken)) {
            const response = await getRefreshToken(refreshToken);
            validAccess = response.access;
            validRefresh = response.refresh;
            Cookies.set("access_token", validAccess);
            Cookies.set("refresh_token", validRefresh);
        }

        const user = jwtDecode(validAccess);
        useAuthStore.getState().setUser(user);
        useAuthStore.getState().setLoading(false);
    } catch (error) {
        console.error("Failed to set user:", error);
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        useAuthStore.getState().setUser(null);
    }
};

// === Login ===
export const login = async (email, password) => {
    try {
        const { data, status } = await axios.post("user/token/", {
            email,
            password,
        });

        if (status === 200) {
            setAuthUser(data.access, data.refresh);
            Toast.fire({ icon: "success", title: "Signed in successfully" });
        }

        return { data, error: null };
    } catch (error) {
        return {
            data: null,
            error: error.response?.data?.detail || "Something went wrong",
        };
    }
};

// === Register ===
export const register = async (full_name, email, password, password2) => {
    try {
        const { data } = await axios.post("user/register/", {
            full_name,
            email,
            password,
            password2,
        });

        await login(email, password);

        Toast.fire({ icon: "success", title: "Signed Up Successfully" });

        return { data, error: null };
    } catch (error) {
        return {
            data: null,
            error: error.response?.data || "Something went wrong",
        };
    }
};

// === Logout ===
export const logout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    useAuthStore.getState().setUser(null);

    Toast.fire({ icon: "success", title: "You have been logged out." });
};
