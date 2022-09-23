export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "‘Nightmare’ TV show ‘Euphoria’ — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
  const inputValue = document.getElementById("search-input").value;

  return newsList.filter(
    (element) => element.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  );
}

export function sort(type) {
  if (type == "ascending") {
    return newsList.sort((a, b) => (a < b ? -1 : 1));
  } else {
    return newsList.sort((a, b) => (a > b ? -1 : 1));
  }
}
