import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useSavedWords } from "./SavedWordsContext";

function WordDetails({ wordDefinition }) {
  const { savedWords, setSavedWords } = useSavedWords();

  function handleSaveWord(word) {
    const isSaved = savedWords.some(
      (savedWord) => savedWord.word === word.word,
    );

    if (isSaved) {
      setSavedWords((currentWords) =>
        currentWords.filter((savedWord) => savedWord.word !== word.word),
      );
      return;
    }

    setSavedWords((currentWords) => [...currentWords, word]);
  }
  const entries = wordDefinition?.entries ?? [];
  //get entries if exists .? , otherwise return undefined
  //?? -> if is null or undefined, use [] instead like entries value.

  return (
    <div className="w-full max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="border-b border-slate-200 pb-5">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold tracking-tight">
            {wordDefinition?.word}
          </h1>
          <button
            onClick={() =>
              handleSaveWord({
                word: wordDefinition?.word,
                language: entries[0]?.language?.name,
                entries: entries.map((entry) => ({
                  partOfSpeech: entry.partOfSpeech,
                  pronunciations:
                    entry.pronunciations?.map(
                      (pronunciation) => pronunciation,
                    ) ?? [],
                  senses:
                    entry.senses?.map((sense) => ({
                      definition: sense.definition,
                      examples: sense.examples?.map((example) => example) ?? [],
                    })) ?? [],
                })),
              })
            }
            className=" flex flex-col items-center cursor-pointer "
          >
            {savedWords.some(
              (savedWord) => savedWord.word === wordDefinition?.word,
            ) ? (
              <>
                <FaBookmark className="text-2xl transition hover:opacity-70" />
                <span>Unsave word</span>
              </>
            ) : (
              <>
                <FaRegBookmark className="text-2xl transition hover:opacity-70" />
                <span>Save word</span>
              </>
            )}
          </button>
        </div>
        <p className="mt-1 text-sm text-slate-500">
          {entries[0]?.language?.name}
        </p>
      </div>

      <div>
        {entries.map((entry, entryIndex) => (
          <article
            key={`${entry.partOfSpeech}-${entryIndex}`}
            className="border-b border-slate-200 py-6 last:border-b-0"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h2 className="text-xl font-semibold italic">
                {entry.partOfSpeech}
              </h2>

              <p className="text-slate-600">
                {entry.pronunciations
                  ?.slice(0, 2)
                  .map((pronunciation, index) => (
                    <span key={index} className="mr-3">
                      {pronunciation.text}
                    </span>
                  ))}
              </p>
            </div>

            <ol className="mt-5 list-decimal space-y-5 pl-5 marker:font-medium marker:text-slate-500">
              {entry.senses?.map((sense, senseIndex) => (
                <li key={senseIndex} className="pl-2">
                  <p className="leading-7 text-slate-800">{sense.definition}</p>

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
          </article>
        ))}
      </div>
    </div>
  );
}

export default WordDetails;
