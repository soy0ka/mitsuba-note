// import NoteTitle from './NoteTitle';

// export default async function NotesPage() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/1`, { cache: 'no-store' });
//   const note = await response.json();

//   return (
//     <div className="p-6 bg-black text-white">
//       <h1 className="text-2xl font-bold">노트 관리</h1>
//       <NoteTitle initialTitle={note.title} />
//     </div>
//   );
// }
import NoteSection from '@/components/notes/NoteSection';
import Sidebar from '@/components/notes/Sidebar';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <NoteSection />
    </div>
  );
}