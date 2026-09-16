import { useEffect, useState } from "react";
import Header from "./components/Header";
import WordSearchBar from "./components/WordSearchBar";
import WordDetails from "./components/WordDetails";
import { getWordDetails } from "./services/dictionaryApi";
import LanguageSelect from "./components/LanguageSelect";
import SearchButton from "./components/SearchButton";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

//Add option to black theme
function App() {
  const [wordDefinition, setWordDefinition] = useState(null);
  const [wordInput, setWordInput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  async function getWordDefinition(languageCode, word) {
    if (!word) return;
    const wordDefinition = await getWordDetails(languageCode, word);
    setWordDefinition(wordDefinition);
  }

  return (
    <div className=" flex flex-col text-slate-900 bg-slate-50 dark:text-slate-50 dark:bg-slate-900 rounded-md min-h-dvh w-full relative">
      <Header />
      <button
        className="absolute top-4 right-40"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <MdOutlineLightMode className="text-3xl cursor-pointer" />
        ) : (
          <MdDarkMode className="text-3xl cursor-pointer" />
        )}
      </button>

      <div className="flex flex-col items-center mt-30 gap-15">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Dictionary App
        </h1>
        <div className="flex w-80 md:w-7xl justify-center items-center  gap-4  ">
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
