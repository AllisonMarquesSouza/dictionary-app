import { createContext, useContext, useEffect, useState } from "react";

const SavedWordsContex = createContext(null);

export function SavedWordsProvider({ children }) {
  const [savedWords, setSavedWords] = useState(() => {
    const storedWords = localStorage.getItem("savedWords");
    return storedWords ? JSON.parse(storedWords) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedWords", JSON.stringify(savedWords));
  }, [savedWords]);

  return (
    // “Todos os componentes dentro de children poderão acessar este valor savedWords e setSavedWords.”
    <SavedWordsContex value={{ savedWords, setSavedWords }}>
      {children}
    </SavedWordsContex>
  );
}

// useSavedWords é uma função auxiliar que usa useContext para ler o valor do SavedWordsContext.
export function useSavedWords() {
  return useContext(SavedWordsContex);
}
