import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    text: '',
    parentId: null,
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, text } = form;
    if (!name || !email || !text) {
      setError('Please fill in all fields');
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      email,
      text,
      date: new Date().toLocaleString(),
      parentId: form.parentId,
    };

    setComments([newComment, ...comments]);
    setForm({ name: '', email: '', text: '', parentId: null });
  };

  const handleReply = (parentId) => {
    setForm({ ...form, parentId });
  };

  const cancelReply = () => {
    setForm({ ...form, parentId: null });
  };

  const renderComments = (parentId = null, level = 0) => {
    return comments
      .filter((c) => c.parentId === parentId)
      .map((comment) => (
        <div key={comment.id} className={`ml-${level * 4} mt-4`}>
          <div className="bg-white border shadow-sm p-4 rounded-md">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {comment.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{comment.name}</p>
                    <p className="text-xs text-gray-400">{comment.date}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-800">{comment.text}</p>
                <button
                  onClick={() => handleReply(comment.id)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  Reply
                </button>
              </div>
            </div>
          </div>
          <div className="ml-6">
            {renderComments(comment.id, level + 1)}
          </div>
        </div>
      ));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow space-y-3 mb-6">
        {form.parentId && (
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
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <textarea
          name="text"
          placeholder="Your comment"
          value={form.text}
          onChange={handleInputChange}
          className="w-full p-2 border rounded resize-none focus:outline-none focus:ring focus:border-blue-300"
          rows={4}
        ></textarea>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {form.parentId ? 'Post Reply' : 'Post Comment'}
        </button>
      </form>

      <div>
        <h3 className="text-lg font-semibold mb-2">All Comments</h3>
        {comments.length > 0 ? (
          renderComments()
        ) : (
          <p className="text-gray-500">No comments yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
