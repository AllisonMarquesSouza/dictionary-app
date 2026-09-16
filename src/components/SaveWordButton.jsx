function SaveWordButton({ handleSaveWord, args, children }) {
  return (
    <button
      onClick={() => handleSaveWord(args)}
      className=" flex flex-col items-center cursor-pointer "
    >
      {children}
    </button>
  );
}

export default SaveWordButton;
