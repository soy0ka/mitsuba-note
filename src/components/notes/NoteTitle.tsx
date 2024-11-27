'use client';

import { useEffect, useRef, useState } from 'react';

export default function NoteTitle({ initialTitle }: { initialTitle: string }) {
  const [title, setTitle] = useState(initialTitle);
  const [prevTitle, setPrevTitle] = useState(initialTitle);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const updateInputWidth = () => {
    if (spanRef.current && inputRef.current) {
      const spanWidth = spanRef.current.offsetWidth;
      inputRef.current.style.width = `${spanWidth + 20}px`; // 10px은 여유 공간
    }
  };

  const handleSave = async () => {
    if (!isEditing) return;
    if (!title) {
      setIsEditing(false);
      return setTitle(prevTitle);
    }

    try {
      const response = await fetch('/api/notes/1', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });
      if (!response.ok) {
        throw new Error('Failed to update the title');
      }
      setPrevTitle(title);
    } catch (error) {
      console.error(error);
      alert('제목 업데이트에 실패했습니다.');
      setTitle(prevTitle);
    } finally {
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    handleSave();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  useEffect(() => {
    if (isEditing) {
      updateInputWidth(); // 에디팅 시작 시 즉시 너비 업데이트
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isEditing]);

  useEffect(() => {
    updateInputWidth(); // 제목 변경 시 너비 업데이트
  }, [title]);

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            ref={inputRef}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="p-2 bg-black text-gray-300 rounded border-0 focus:ring-0"
          />
          {/* 숨겨진 span 요소 */}
          <span
            ref={spanRef}
            className="invisible absolute whitespace-pre"
            style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'pre' }}
          >
            {title || ' '}
          </span>
        </div>
      ) : (
        <h2
          onClick={() => setIsEditing(true)}
          className="text-xl font-semibold cursor-pointer"
        >
          {title}
        </h2>
      )}
    </div>
  );
}