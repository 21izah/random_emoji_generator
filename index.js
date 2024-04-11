const btnEl = document.getElementById("btn");
const emojiDetailsEL = document.getElementById("emojiDetails");

// e4aa127a7269c47b7fc99e9b72f25a342ddeac50 api-key
const url = "https://emoji-api.com/emojis";
const queryParameters = {
  access_key: "e4aa127a7269c47b7fc99e9b72f25a342ddeac50",
};
const queryString = new URLSearchParams(queryParameters).toString();
const requestUrl = `${url}?${queryString}`;
const emoji = [];
async function getEmoji() {
  try {
    // quoteEl.innerText = "Loading....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";

    const response = await fetch(requestUrl, {
      method: "GET",
      // headers: headers,
    });
    if (!response) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    for (index = 0; index < 1500; index++) {
      emoji.push({
        Emojiname: data[index]["character"],
        EmojiCode: data[index]["unicodeName"],
      });
    }
    btnEl.disabled = false;
    btnEl.innerText = "GET A QUOTE";
    console.log(emoji);
    // quoteEl.innerText = quote.content;
    // authorEl.innerText = quote.author;
  } catch (error) {
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.error("Error", error);
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  console.log(randomNum);

  btnEl.innerHTML = emoji[randomNum].Emojiname;
  emojiDetailsEL.innerText = emoji[randomNum].EmojiCode;
});
