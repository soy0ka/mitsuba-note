import MemoSection from './MemoSection';
import NoteHeader from './NoteHeader';
import UploadSection from './UploadSection';

export default function NoteSection() {
  return (
    <main className="flex-1 p-10 space-y-6">
      <NoteHeader />
      <UploadSection />
      <MemoSection />
    </main>
  );
}