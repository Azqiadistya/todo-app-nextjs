"use client";
import Image from "next/image";
import TodoList from "../../components/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <h1 className="text-5xl font-extrabold">Things to do:</h1>
        <h3 className="text-base ml-1">By.Azqiadistya</h3>
        {/* Todo list start */}
        <TodoList />
        {/* Todo list end */}
      </div>
    </main>
  );
}
