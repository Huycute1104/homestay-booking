export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        <span className="text-blue-500 font-semibold text-lg"></span>
      </div>
    </div>
  );
}
