import { filter, search, newsList } from "../../main.js";

document.addEventListener("DOMContentLoaded", function () {
  reloadDOM(newsList);

  document.getElementById("search-btn").addEventListener("click", () => {
    var result = search();

    reloadDOM(result);
  });

  document.getElementById("filter-btn-1").addEventListener("click", () => {
    var result = filter("ascending");

    reloadDOM(result);
  });

  document.getElementById("filter-btn-2").addEventListener("click", () => {
    var result = filter("descending");

    reloadDOM(result);
  });
});

function reloadDOM(newArray) {
  let constructedDOM = "";
  newArray.forEach(
    (value) => (constructedDOM += `<div class="news-list-item">${value}</div>`)
  );

  document.getElementById("news-list-container").innerHTML = constructedDOM;
}
