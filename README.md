# Dictionary App

A small React dictionary application powered by [FreeDictionaryAPI](https://freedictionaryapi.com/). Search for a word in the selected language, review its definitions and pronunciations, and save words for later.

## Features

- Search dictionary entries by word and language
- Submit searches with the search button or the `Enter` key
- Display parts of speech, pronunciations, definitions, and examples
- Save and remove words from a personal saved-words list
- Toggle between light and dark themes
- Persist the selected theme in `localStorage`
- Responsive layout for desktop and mobile screens

## Tech stack

- React
- React Router
- Vite
- Tailwind CSS
- React Icons
- FreeDictionaryAPI

## Getting started

### Prerequisites

- Node.js and npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal.

### Production build

```bash
npm run build
```

### Other scripts

```bash
npm run lint       # Run ESLint
npm run preview    # Preview the production build locally
```

## API integration

This project uses the public [FreeDictionaryAPI](https://freedictionaryapi.com/) v1 API. The API is used directly from the browser and does not require an API key.

### Base URL

```text
https://freedictionaryapi.com/api/v1
```

### Endpoints used by the app

#### List available languages

```http
GET /languages
```

Full URL:

```text
https://freedictionaryapi.com/api/v1/languages
```

The response is used to populate the language selector. Each language provides a code and a display name, for example:

```json
{
  "code": "en",
  "name": "English"
}
```

#### Retrieve a word entry

```http
GET /entries/{language}/{word}
```

Example:

```text
https://freedictionaryapi.com/api/v1/entries/en/example
```

Path parameters:

| Parameter | Description |
| --- | --- |
| `language` | An ISO 639-1 or ISO 639-3 language code, such as `en`. |
| `word` | The word to look up. |

The application lowercases the word before building the request URL.

### Response shape used by the UI

The API returns a word and one or more dictionary entries. The app reads the following fields:

```json
{
  "word": "example",
  "entries": [
    {
      "language": {
        "code": "en",
        "name": "English"
      },
      "partOfSpeech": "noun",
      "pronunciations": [
        {
          "type": "ipa",
          "text": "/ɪɡˈzæmpəl/"
        }
      ],
      "senses": [
        {
          "definition": "A representative instance of something.",
          "examples": [
            "This is an example sentence."
          ]
        }
      ]
    }
  ]
}
```

The response can contain additional fields, including forms, synonyms, antonyms, quotes, and translations. The current UI focuses on the fields shown above.

### API wrapper

API requests are centralized in [`src/services/dictionaryApi.js`](src/services/dictionaryApi.js):

```js
getAllLanguages()
getWordDetails(languageCode, word)
```

Keeping requests in this service makes it easier to update the API integration without coupling endpoint URLs to UI components.

### Request flow

1. The language selector requests `/languages` when it mounts.
2. The user selects a language and enters a word.
3. The search button or `Enter` key calls `getWordDetails(languageCode, word)`.
4. The returned entries are passed to the word-details components.
5. Selected entries can be stored locally as saved words.

### API limits and attribution

According to the official API documentation:

- No API key is required.
- Requests are limited to 1,000 per hour per IP address.
- Exceeding the limit returns HTTP `429 Too Many Requests` until the limit resets.
- Data is sourced from Wiktionary under the [CC BY-SA 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/).
- Projects using the API should link to the original Wiktionary page supplied in the response and provide visible attribution to [FreeDictionaryAPI.com](https://freedictionaryapi.com/).

See the [official API reference](https://freedictionaryapi.com/api/v1) for the complete schema and available parameters.

## Project structure

```text
src/
├── components/       # Reusable UI components
├── pages/            # Route-level pages
├── services/         # External API integration
├── App.jsx           # Main dictionary page
├── index.css         # Global styles and Tailwind configuration
└── main.jsx          # Router and application entry point
```

## Notes

- The app stores the selected theme in `localStorage`.
- Saved words are managed through `SavedWordsContext`.
- The API wrapper currently relies on the browser `fetch` API and returns the parsed JSON response to the calling components.
