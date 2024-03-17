export default function Loading() {
  return (
    <div
      className="flex h-screen w-screen justify-center items-center"
      aria-label="読み込み中"
    >
      <div className="animate-spin h-10 w-10 border-4 border-red-500 rounded-full border-t-transparent"></div>
    </div>
  );
}