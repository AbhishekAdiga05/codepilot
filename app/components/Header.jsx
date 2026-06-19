import { BotMessageSquare } from "lucide-react";

export default function Header() {
  return (
    <div className="p-4 border-b border-slate-800">
      <div className="flex gap-6 items-center justify-center">
        <BotMessageSquare size={35} color="#00ff00" />
        <h1 className="text-2xl font-bold">
          Codeify
        </h1>
      </div>
    </div>
  );
}