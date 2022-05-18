import { Trash, ChatText } from 'phosphor-react';

export function TableRow() {
  return (
    <div className="grid grid-cols-4 ">
      <div className="text-start p-1">1</div>
      <div className="text-start p-1">1</div>
      <div className="text-start p-1">1</div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center border-x-2 border-slate-300 hover:bg-zinc-400 text-zinc-400 hover:text-white hover:cursor-pointer">
          <Trash size={24} />
        </div>
        <div className="flex justify-center items-center hover:bg-zinc-400 text-zinc-400 hover:text-white hover:cursor-pointer">
          <ChatText size={24} />
        </div>
      </div>
    </div>
  );
}
