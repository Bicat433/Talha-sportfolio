import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CommandBar from "./CommandBar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pb-16 lg:pb-14">
        <Outlet />
      </main>
      <CommandBar />
    </div>
  );
}