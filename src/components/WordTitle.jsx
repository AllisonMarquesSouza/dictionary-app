function WordTitle({ wordDefinition }) {
  const entries = wordDefinition?.entries ?? [];

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        {wordDefinition?.word}
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        {entries[0]?.language?.name}
      </p>
    </div>
  );
}

export default WordTitle;
