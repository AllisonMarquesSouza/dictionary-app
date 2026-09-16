import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function WordDetailsToggleButton({ setExpandedWord, expandedWord, word }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer"
      onClick={() =>
        setExpandedWord(expandedWord === word.word ? null : word.word)
      }
    >
      {expandedWord === word.word ? (
        <span>See less</span>
      ) : (
        <span>See more</span>
      )}
      {expandedWord === word.word ? <FaChevronUp /> : <FaChevronDown />}
    </button>
  );
}

export default WordDetailsToggleButton;
