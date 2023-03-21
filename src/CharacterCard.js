function CharacterCard({ showDetails, id, name }) {
  return (
    <>
      <div>
        <button
          className="characterCard cursor-pointer shadow-[0px_5px_5px_-5px_rgba(0,0,0,0.7)] transition-all duration-[250ms]  ease-out bg-slate-200 mb-2 h-20 w-40 flex justify-center items-center rounded-md
    hover:bg-slate-300 hover:shadow-[0px_8px_5px_-5px_rgba(0,0,0,0.7)] hover:scale-[1.05] hover:border-slate-400 hover:border "
          onClick={() => {
            showDetails(id);
          }}
        >
          <h3>{name}</h3>
        </button>
      </div>
    </>
  );
}
export default CharacterCard;
