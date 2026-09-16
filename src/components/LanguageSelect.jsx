import { useEffect, useState } from "react";
import { getAllLanguages } from "../services/dictionaryApi";

function LanguageSelect({ setSelectedLanguage }) {
  const [languages, setLanguages] = useState([]);
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
    <select
      onChange={(event) => setSelectedLanguage(event.target.value)} //value inside the option being selected.
      className="w-20 px-1 py-2 outline-1 rounded-md md:w-40 md:px-2"
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelect;
