const textarea = document.querySelector("#chars");
const charCountElem = document.querySelector("#charcount");
const wordCountElem = document.querySelector("#wordcount");

textarea?.addEventListener("input", (event) => {
  const textInput = ((event as InputEvent).target as HTMLTextAreaElement).value;

  const wordCount = textInput.trim().split(" ").length.toString();
  const charcount = textInput.length.toString();

  if (wordCountElem && charCountElem) {
    wordCountElem.innerHTML = wordCount;
    charCountElem.innerHTML = charcount;
  }
});
