export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>[Profile]</h1>
      <h1 className="text-4xl">
        {" "}
        profile page
        <span className="p-2 ml-2 rounded bg-purple-500">{params.id}</span>
      </h1>
    </div>
  );
}
