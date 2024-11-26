"use client";
import { useState } from 'react';

export default function MemoSection() {
  const [memo, setMemo] = useState('');

  return (
    <section className="p-6 bg-neutral-800 rounded-lg">
      <h3 className="text-gray-300 text-sm">메모</h3>
      <textarea
        className="text-sm w-full h-25 mt-2 p-4 bg-neutral-900 text-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="메모를 작성해 보세요."
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      ></textarea>
    </section>
  );
}