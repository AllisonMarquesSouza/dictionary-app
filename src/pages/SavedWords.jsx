import { useState } from "react";
import { FaBookmark, FaHome } from "react-icons/fa";
import { Link } from "react-router";
import { useSavedWords } from "../components/SavedWordsContext";
import SavedWordsTitle from "../components/SavedWordsTitle";
import SaveWordButton from "../components/SaveWordButton";
import WordDefinitionExamples from "../components/WordDefinitionExamples";
import WordDetailsToggleButton from "../components/WordDetailsToggleButton";
import WordPartOfSpeechPronunciation from "../components/WordPartOfSpeechPronunciation";
import WordTitle from "../components/WordTitle";

function SavedWords() {
  const { savedWords, setSavedWords } = useSavedWords();
  const [expandedWord, setExpandedWord] = useState(null);

  function handleSaveWord(word) {
    setSavedWords((savedWords) =>
      savedWords.filter((savedWord) => savedWord.word !== word),
    );
  }

  return (
    <div className="flex flex-col items-center min-h-dvh w-full gap-4 relative dark:bg-slate-900 ">
      <Link
        to="/"
        aria-label="Back beginning"
        className="absolute left-2 top-2 rounded p-2 transition hover:opacity-70 focus:outline-none focus:ring-2"
      >
        <FaHome className="text-3xl dark:text-slate-100" arial-hidden="True" />
      </Link>

      <SavedWordsTitle />
      {savedWords.length === 0 && (
        <div className="w-full max-w-3xl rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
          You have not saved any words yet.
        </div>
      )}

      {savedWords.map((word) => (
        <div
          className="flex flex-col gap-4 w-full max-w-3xl p-6 rounded-lg border border-slate-200 bg-white dark:bg-slate-900  shadow-sm"
          key={word.word}
        >
          <div className="flex justify-between pb-5 border-b border-slate-200 ">
            <WordTitle wordDefinition={word} />
            <SaveWordButton handleSaveWord={handleSaveWord} args={word.word}>
              <FaBookmark className="text-2xl text-slate-700 cursor-pointer " />
            </SaveWordButton>
          </div>
          <WordDetailsToggleButton
            setExpandedWord={setExpandedWord}
            expandedWord={expandedWord}
            word={word}
          />

          {expandedWord === word.word && (
            <div className="flex flex-col gap-5">
              {word.entries?.map((entry, entryIndex) => (
                <section
                  className="flex flex-col gap-6 p-4 border-b border-slate-200  last:border-b-0"
                  key={`${entry.partOfSpeech}-${entryIndex}`}
                >
                  <WordPartOfSpeechPronunciation entry={entry} />
                  <WordDefinitionExamples entry={entry} />
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
