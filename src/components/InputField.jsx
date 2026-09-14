import { useEffect, useState } from "react";
import { getAllLanguages } from "../services/dictionaryApi";
import { FaSearch } from "react-icons/fa";

function InputField({ getWordDefinition }) {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [word, setWord] = useState("");

  function saveWordInput(event) {
    setWord(event.target.value);
  }

  useEffect(() => {
    async function loadLanguages() {
      try {
        const languages = await getAllLanguages();
        setLanguages(languages);
      } catch (error) {
        console.log(error);
      }
    }
    loadLanguages();
  }, []);

  return (
    <div className="flex gap-4">
      <select
        onChange={(event) => setSelectedLanguage(event.target.value)} //value inside the option being selected.
        className="outline-2 rounded-md "
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
      <input
        className="w-5xl p-4 rounded-md outline-2  placeholder:text-slate-900 transition hover:shadow-xl focus:opacity-100 hover:opacity-100"
        type="text"
        placeholder="Type a word"
        value={word}
        onChange={saveWordInput}
      />
      <button
        onClick={() => getWordDefinition(selectedLanguage, word)}
        className="flex gap-1 items-center hover:cursor-pointer   hover:bg-slate-300 p-4 rounded-md"
      >
        <FaSearch className="text-2xl" />
      </button>
    </div>
  );
}

export default InputField;
