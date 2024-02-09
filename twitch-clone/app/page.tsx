import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <main className="flex flex-col ">
      Dashboard
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
