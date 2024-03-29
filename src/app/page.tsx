import prisma from "@/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className="h-screen w-full">
      {users.map((user) => (
        <div key={user.id}>{user.userName}</div>
      ))}
    </div>
  );
}
