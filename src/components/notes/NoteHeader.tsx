import NoteTitle from "./NoteTitle";

export default async function NoteHeader() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes/1`, { cache: 'no-store' })
  const note = await response.json()

  return (
    <header className="space-y-2">
      <h1 className="text-xl font-semibold text-gray-500">노트 정보를 입력해 주세요</h1>
      {/* <h2 className="text-2xl font-bold text-gray-500">{note.title}</h2> */}
      <NoteTitle initialTitle={note.title}/>
    </header>
  );
}
