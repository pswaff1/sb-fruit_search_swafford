import fruits from "./fruits.js";

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const search = (str) =>
  fruits.filter((fruit) => fruit.toLowerCase().includes(str.toLowerCase()));

const showSuggestions = (results) => {
  input.value === "" ? document.querySelector(".suggestions").style.display = "none" : document.querySelector(".suggestions").style.display = "block";

  // Empty the suggestions list
  suggestions.innerHTML = "";

  // Add results to suggestion list
  results.forEach((result) => {
    const newLi = document.createElement("li");
    newLi.innerText = result;

    suggestions.append(newLi);
  });
};

// searchHandler
input.addEventListener("keyup", (e) => showSuggestions(search(input.value)));

// useSuggestion
suggestions.addEventListener("click", (e) => {
  input.value = e.target.innerText;
  showSuggestions(search(input.value));
  document.querySelector(".suggestions").style.display = "none";
});
