import { FaSearch } from "react-icons/fa";

function SearchButton({ getWordDefinition, selectedLanguage, wordInput }) {
  return (
    <button
      onClick={() => getWordDefinition(selectedLanguage, wordInput)}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md p-2 transition hover:cursor-pointer hover:bg-slate-300 md:h-12 md:w-12 md:p-3"
    >
      <FaSearch className="text-xl md:text-2xl" />
    </button>
  );
}

export default SearchButton;
