export function TableHead() {
  return (
    <div className="bg-blue-400 grid grid-cols-4 rounded-t-md">
      <div className="text-start text-white font-bold p-1 border-r-2 border-slate-300">
        Balanço
      </div>
      <div className="text-start text-white font-bold p-1 border-r-2 border-slate-300">
        Mês
      </div>
      <div className="text-start text-white font-bold p-1 border-r-2 border-slate-300">
        Ano
      </div>
      <div className="text-start text-white font-bold p-1">Ações</div>
    </div>
  );
}
