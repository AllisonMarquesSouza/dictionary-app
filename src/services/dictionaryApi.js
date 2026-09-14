export async function getAllLanguages() {
  const languages = await fetch(
    "https://freedictionaryapi.com/api/v1/languages",
  ).then((response) => response.json());
  return languages;
}
export async function getWordDetails(languageCode, word) {
  const languages = await fetch(
    `https://freedictionaryapi.com/api/v1/entries/${languageCode}/${word}`,
  ).then((response) => response.json());
  return languages;
}
