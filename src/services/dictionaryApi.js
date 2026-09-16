export async function getAllLanguages() {
  const languages = await fetch(
    "https://freedictionaryapi.com/api/v1/languages",
  ).then((response) => response.json());
  return languages;
}
export async function getWordDetails(languageCode, word) {
  const wordLowerCase = word.toLowerCase();
  const languages = await fetch(
    `https://freedictionaryapi.com/api/v1/entries/${languageCode}/${wordLowerCase}`,
  ).then((response) => response.json());
  return languages;
}
