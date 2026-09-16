function WordTitle({ wordDefinition }) {
  const entries = wordDefinition?.entries ?? [];

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {wordDefinition?.word}
      </h1>
      <p className="text-sm text-slate-500">{entries[0]?.language?.name}</p>
    </div>
  );
}

export default WordTitle;
