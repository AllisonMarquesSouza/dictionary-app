import { useState } from "react";
import { FaBookmark, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSavedWords } from "../components/SavedWordsContext";

function SavedWords() {
  const { savedWords, setSavedWords } = useSavedWords();
  const [expandedWord, setExpandedWord] = useState(null);

  function handleUnsaveWord(word) {
    setSavedWords((savedWords) =>
      savedWords.filter((savedWord) => savedWord.word !== word),
    );
    console.log("unsaved");
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl text-center font-semibold tracking-tight text-slate-900">
          Saved words
        </h1>
        <p className="mt-1 text-sm text-center text-slate-500">
          Review the words you have saved.
        </p>
      </div>

      {savedWords.length === 0 && (
        <div className="w-full max-w-3xl rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          You have not saved any words yet.
        </div>
      )}

      {savedWords.map((word) => (
        <div
          className="w-full max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          key={word.word}
        >
          <div className="flex items-start justify-between border-b border-slate-200 pb-5">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                {word.word}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{word.language}</p>
            </div>

            {/* [] */}
            <FaBookmark
              onClick={() => handleUnsaveWord(word.word)}
              className="mt-1 text-xl text-slate-700 cursor-pointer"
            />
          </div>

          <button
            type="button"
            className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 cursor-pointer"
            onClick={() =>
              setExpandedWord(expandedWord === word.word ? null : word.word)
            }
          >
            {expandedWord === word.word ? "See less" : "See more"}
            {expandedWord === word.word ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {expandedWord === word.word && (
            <div className="mt-2">
              {word.entries?.map((entry, entryIndex) => (
                <section
                  className="border-b border-slate-200 py-6 last:border-b-0"
                  key={`${entry.partOfSpeech}-${entryIndex}`}
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold italic text-slate-900">
                      {entry.partOfSpeech}
                    </h3>

                    <p className="text-slate-600">
                      {entry.pronunciations?.map(
                        (pronunciation, pronunciationIndex) => (
                          <span className="mr-3" key={pronunciationIndex}>
                            {pronunciation.text}
                          </span>
                        ),
                      )}
                    </p>
                  </div>

                  <ol className="mt-5 list-decimal space-y-5 pl-5 marker:font-medium marker:text-slate-500">
                    {entry.senses?.map((sense, senseIndex) => (
                      <li className="pl-2" key={senseIndex}>
                        <p className="leading-7 text-slate-800">
                          {sense.definition}
                        </p>

                        {sense.examples?.length > 0 && (
                          <ul className="mt-2 space-y-1 border-l-2 border-slate-200 pl-4 text-sm text-slate-500">
                            {sense.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex}>
                                <em>{example}</em>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SavedWords;
