function WordPartOfSpeechPronunciation({ entry }) {
  return (
    <div className="flex flex-col min-w-0  items-baseline gap-1">
      <h3 className="text-xl font-semibold italic text-slate-900 dark:text-slate-100">
        {entry.partOfSpeech}
      </h3>
      <p className="grid grid-cols-5 gap-2  md:flex text-slate-600 dark:text-slate-100 ">
        {entry.pronunciations?.map((pronunciation, pronunciationIndex) => (
          <span key={pronunciationIndex}>{pronunciation.text}</span>
        ))}
      </p>
    </div>
  );
}

export default WordPartOfSpeechPronunciation;
