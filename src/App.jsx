import { useState } from "react";
import Header from "./components/Header";
import WordSearchBar from "./components/WordSearchBar";
import WordDetails from "./components/WordDetails";
import { getWordDetails } from "./services/dictionaryApi";
import LanguageSelect from "./components/LanguageSelect";
import SearchButton from "./components/SearchButton";

//Add option to black theme
function App() {
  const [wordDefinition, setWordDefinition] = useState(null);
  const [wordInput, setWordInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  async function getWordDefinition(languageCode, word) {
    if (!word) return;
    const wordDefinition = await getWordDetails(languageCode, word);
    setWordDefinition(wordDefinition);
  }

  return (
    <div className=" flex flex-col  text-slate-900 bg-slate-50 rounded-md h-dvh">
      <Header />
      <div className="flex flex-col items-center gap-5">
        <div className="flex w-80 md:w-7xl justify-center items-center  gap-4  mt-30 ">
          <LanguageSelect setSelectedLanguage={setSelectedLanguage} />
          <WordSearchBar
            selectedLanguage={selectedLanguage}
            getWordDefinition={getWordDefinition}
            wordInput={wordInput}
            setWordInput={setWordInput}
          />
          <SearchButton
            getWordDefinition={getWordDefinition}
            selectedLanguage={selectedLanguage}
            wordInput={wordInput}
          />
        </div>

        {wordDefinition && <WordDetails wordDefinition={wordDefinition} />}
      </div>
    </div>
  );
}

export default App;
