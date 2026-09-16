import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useSavedWords } from "./SavedWordsContext";
import SaveWordButton from "./SaveWordButton";
import WordDefinitionExamples from "./WordDefinitionExamples";
import WordTitle from "./WordTitle";
import WordPartOfSpeechPronunciation from "./WordPartOfSpeechPronunciation";

function WordDetails({ wordDefinition }) {
  const entries = wordDefinition?.entries ?? [];
  const { savedWords, setSavedWords } = useSavedWords();

  function isSaved(word) {
    return savedWords.some((savedWord) => savedWord.word === word);
  }

  function handleSaveWord(word) {
    if (isSaved(word.word)) {
      setSavedWords((savedWords) =>
        savedWords.filter((savedWord) => savedWord.word !== word.word),
      );
      return;
    }
    setSavedWords([...savedWords, word]);
  }
  //get entries if exists .? , otherwise return undefined
  //?? -> if is null or undefined, use [] instead like entries value.

  return (
    <div className=" max-w-3xl p-6 rounded-md border border-slate-200 bg-white shadow-md">
      <div className="flex justify-between pb-5 border-b border-slate-200 ">
        <WordTitle wordDefinition={wordDefinition} />
        <SaveWordButton
          handleSaveWord={handleSaveWord}
          args={{
            word: wordDefinition?.word,
            language: entries[0]?.language?.name,
            entries: entries.map((entry) => ({
              partOfSpeech: entry.partOfSpeech,
              pronunciations:
                entry.pronunciations?.map((pronunciation) => pronunciation) ??
                [],
              senses:
                entry.senses?.map((sense) => ({
                  definition: sense.definition,
                  examples: sense.examples?.map((example) => example) ?? [],
                })) ?? [],
            })),
          }}
        >
          {isSaved(wordDefinition?.word) ? (
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
        </SaveWordButton>
      </div>

      <div>
        {entries.map((entry, entryIndex) => (
          <article
            key={`${entry.partOfSpeech}-${entryIndex}`}
            className="flex flex-col gap-4 border-b border-slate-200 py-6 last:border-b-0"
          >
            <WordPartOfSpeechPronunciation entry={entry} />

            <WordDefinitionExamples entry={entry} />
          </article>
        ))}
      </div>
    </div>
  );
}

export default WordDetails;
