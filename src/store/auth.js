// Import the 'create' function from the 'zustand' library.
import { create } from 'zustand';

// Import the 'mountStoreDevtool' function from the 'simple-zustand-devtools' library.
import { mountStoreDevtool } from 'simple-zustand-devtools';

// Create the Zustand store
const useAuthStore = create((set, get) => ({
    // State variables
    allUserData: null, // Will store full user info
    loading: false,    // Tracks login status (optional but useful)

    // Derived user object
    user: () => ({
        user_id: get().allUserData?.user_id || null,
        username: get().allUserData?.username || null,
    }),

    // Actions
    setUser: (user) => set({
        allUserData: user,
        loading: true, // Automatically mark as "logged in"
    }),

    setLoading: (loading) => set({ loading }),

    isLoggedIn: () => get().allUserData !== null,
}));

// Devtools support (only in dev mode)
if (import.meta.env.DEV) {
    mountStoreDevtool('AuthStore', useAuthStore);
}

// Export the hook
export { useAuthStore };
