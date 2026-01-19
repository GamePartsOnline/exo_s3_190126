const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Question 1 : Filtre les entrepreneurs nés dans les années 70
console.log("=== Entrepreneurs nés dans les années 70 ===");
const entrepreneursAnnees70 = entrepreneurs.filter(e => e.year >= 1970 && e.year < 1980);
console.log(entrepreneursAnnees70);

// Question 2 : Array contenant le prénom et le nom
console.log("\n=== Prénoms et noms des entrepreneurs ===");
const nomsComplets = entrepreneurs.map(e => `${e.first} ${e.last}`);
console.log(nomsComplets);

// Question 3 : Âge de chaque entrepreneur aujourd'hui
console.log("\n=== Âge des entrepreneurs aujourd'hui ===");
const anneeCourante = 2026;
const agesEntrepreneurs = entrepreneurs.map(e => {
  const age = anneeCourante - e.year;
  return `${e.first} ${e.last} aurait ${age} ans`;
});
agesEntrepreneurs.forEach(age => console.log(age));

// Question 4 : Trie par ordre alphabétique du nom de famille
console.log("\n=== Entrepreneurs triés par nom de famille ===");
const entrepreneursTries = [...entrepreneurs].sort((a, b) => {
  if (a.last < b.last) return -1;
  if (a.last > b.last) return 1;
  return 0;
});
console.log(entrepreneursTries);