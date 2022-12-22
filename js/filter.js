// Skriv en funktion som tar bort räliga matvaror från
// en given array och returnerar en ny array med acceptabel mat.
// Använd dig av .filter()

const nastyFoods = ["Pannkakor", "Lingonsylt", "Fläsksvålar"];

function noNastyFood(arrayOfFood, nastyFoods) {
  const niceFood = arrayOfFood.filter((item) => {
    if (
      item !== "Pannkakor" &&
      item !== "Lingonsylt" &&
      item !== "Fläsksvålar"
    ) {
      return item;
    } else return;
  });
  return niceFood;
}

const result = noNastyFood([
  "Korv",
  "Sylta",
  "Pannkakor",
  "Chips",
  "Lingonsylt",
]);
console.log(result); // ["Korv", "Sylta", "Chips"]

module.exports = noNastyFood;
