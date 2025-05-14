import React, { useState } from "react";
import moment from "moment";
import apiInstance
 from "../../utils/axios";
const CommentSection = ({ post, fetchPost }) => {
  const [createComment, setCreateComment] = useState({
    full_name: "",
    email: "",
    comment: "",
  });

  const [error, setError] = useState("");
  const [localReplies, setLocalReplies] = useState([]);
  const [replyTo, setReplyTo] = useState(null);

  const handleInputChange = (e) => {
    setCreateComment({ ...createComment, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { full_name, email, comment } = createComment;

    if (!full_name || !email || !comment) {
      setError("Please fill in all fields");
      return;
    }

    const jsonData = {
      post_id: post?.id,
      name: full_name,
      email,
      comment,
      ...(replyTo && { parent: replyTo }),
    };

    try {
      const response = await apiInstance.post(`post/comment-post/`, jsonData);
      console.log(response);
      // Toast("success", "Comment Posted.", "");
      setCreateComment({ full_name: "", email: "", comment: "" });
      fetchPost(); // Refresh backend comments
    } catch (error) {
      // Toast("error", "Failed to post comment", "");
      console.error(error);
    }

    if (replyTo) {
      const newReply = {
        id: Date.now(),
        name: full_name,
        email,
        comment,
        date: new Date().toISOString(),
        parentId: replyTo,
      };
      setLocalReplies([newReply, ...localReplies]);
      setReplyTo(null);
    }
  };

  const handleReply = (parentId) => {
    setReplyTo(parentId);
  };

  const cancelReply = () => {
    setReplyTo(null);
  };

  const renderComments = (parentId = null, level = 0) => {
    const allComments = [...(post.comments || []), ...localReplies];
      return allComments
      .filter((c) => c.parent === parentId)
      .map((comment) => (
        <div
          key={comment.id}
          className={`mt-6 ${level > 0 ? "ml-6 border-l pl-4 border-gray-200" : ""}`}
        >
          <div className="bg-white p-4 rounded-md shadow-sm flex gap-4">
            {/* Avatar */}
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
              alt="avatar"
            />
  
            {/* Comment Content */}
            <div className="flex-1">
              {/* Name and Date */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm">{comment.name}</p>
                  <p className="text-xs text-gray-500">
                    {moment(comment.date).format("DD MMM, YYYY")}
                  </p>
                </div>
              </div>
  
              {/* Comment Text */}
              <p className="mt-2 text-gray-800 whitespace-pre-line">
                {comment.comment}
              </p>
  
              {/* Reply Button */}
              <div className="mt-3">
                <button
                  onClick={() => handleReply(comment.id)}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Reply
                </button>
              </div>
  
              {/* Optional reply content */}
              {comment.reply && (
                <div className="mt-3 text-sm text-gray-600 border-l-4 border-blue-100 pl-3 italic">
                  <strong className="text-gray-700">Reply:</strong> {comment.reply}
                </div>
              )}
            </div>
          </div>
  
          {/* Render Replies */}
          <div className="mt-4">
            {renderComments(comment.id, level + 1)}
          </div>
        </div>
      ));
    };
    

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h3 className="text-lg font-semibold mb-2">
        {post.comments?.length || 0} Comments
      </h3>
      {renderComments()}

      <h2 className="text-2xl font-bold mt-6 mb-4">
        {replyTo ? "Leave a Reply" : "Leave a Comment"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-md shadow space-y-3 mb-6"
      >
        {replyTo && (
          <div className="text-sm text-gray-500 flex justify-between items-center">
            <span>Replying to a comment</span>
            <button
              type="button"
              onClick={cancelReply}
              className="text-red-500 hover:underline text-xs"
            >
              Cancel
            </button>
          </div>
        )}

        <input
          type="text"
          name="full_name"
          placeholder="Your name"
          value={createComment.full_name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={createComment.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <textarea
          name="comment"
          placeholder="Your comment"
          value={createComment.comment}
          onChange={handleInputChange}
          className="w-full p-2 border rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
          rows={4}
        ></textarea>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {replyTo ? "Post Reply" : "Post Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
