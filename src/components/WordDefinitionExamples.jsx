function WordDefinitionExamples({ entry }) {
  return (
    <ol className="flex flex-col gap-5 list-decimal  pl-5 marker:font-medium marker:text-slate-500 ">
      {entry.senses?.map((sense, senseIndex) => (
        <li key={senseIndex} className="pl-2">
          <div className="flex flex-col gap-2">
            <p className=" text-slate-800 dark:text-slate-100">
              {sense.definition}
            </p>
            {sense.examples?.length > 0 && (
              <ul className="pl-4 border-l-2 border-slate-200  text-sm text-slate-500 dark:text-slate-300">
                {sense.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex}>
                    <em>{example}</em>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default WordDefinitionExamples;
