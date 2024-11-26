'use client';

import { useState } from 'react';

export default function NoteTitle({ initialTitle }: { initialTitle: string }) {
  const [title, setTitle] = useState(initialTitle);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/notes/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });
      if (!response.ok) {
        throw new Error('Failed to update the title');
      }
    } catch (error) {
      console.error(error);
      alert('제목 업데이트에 실패했습니다.');
    } finally {
      setLoading(false);
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 bg-neutral-700 text-gray-300 rounded focus:outline-none"
          />
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500"
            disabled={loading}
          >
            저장
          </button>
        </div>
      ) : (
        <h2
          onClick={() => setIsEditing(true)}
          className="text-xl font-semibold cursor-pointer hover:underline"
        >
          {title}
        </h2>
      )}
    </div>
  );
}