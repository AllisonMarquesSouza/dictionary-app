import { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import WordDetails from "./components/WordDetails";
import { getWordDetails } from "./services/dictionaryApi";

function App() {
  const [wordDefinition, setWordDefinition] = useState(null);

  async function getWordDefinition(languageCode, word) {
    if (!word) return;
    const wordDefinition = await getWordDetails(languageCode, word);
    setWordDefinition(wordDefinition);
  }

  return (
    <div className=" flex flex-col  text-slate-900 bg-slate-50 rounded-md h-dvh">
      <Header />
      <div className="flex flex-col items-center gap-8 mt-30 ">
        <h1 className=" text-3xl">Online Dictionary</h1>
        <InputField getWordDefinition={getWordDefinition} />
        {wordDefinition && <WordDetails wordDefinition={wordDefinition} />}
      </div>
    </div>
  );
}

export default App;
