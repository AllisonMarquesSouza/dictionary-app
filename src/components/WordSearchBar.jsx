function WordSearchBar({
  wordInput,
  setWordInput,
  getWordDefinition,
  selectedLanguage,
}) {
  return (
    <input
      className="w-40 min-w-0 rounded-md px-2 py-2 outline-1 placeholder:text-slate-900 transition hover:opacity-100 hover:shadow-xl focus:opacity-100 md:w-96 md:px-3 md:py-3 lg:w-3xl"
      type="text"
      placeholder="Type a word"
      value={wordInput}
      onChange={(event) => setWordInput(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          getWordDefinition(selectedLanguage, wordInput);
        }
      }}
    />
  );
}

export default WordSearchBar;
