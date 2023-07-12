const birthYear = prompt("Введіть свій рік народження:");
const city = prompt("Введіть місто, в якому ви живете:");
const favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

function getCountry(city) {
  switch (city) {
    case "Київ":
      return "України";
    case "Вашингтон":
      return "США";
    case "Лондон":
      return "Великої Британії";
    default:
      return "";
  }
}

function getChampion(sport) {
  switch (sport) {
    case "футбол":
      return "Ліонель Мессі";
    case "баскетбол":
      return "Леброн Джеймс";
    case "теніс":
      return "Рафаель Надаль";
    default:
      return "";
  }
}

if (birthYear && city && favoriteSport) {
  let age = new Date().getFullYear() - birthYear;
  let message = "Вам " + age + " років.";

  if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
    message += "Ти живеш у столиці " + getCountry(city) + "!";
  } else {
    message += "Ти живеш у місті " + city + "!";
  }

  if (
    favoriteSport === "футбол" ||
    favoriteSport === "баскетбол" ||
    favoriteSport === "теніс"
  ) {
    let champion = getChampion(favoriteSport);
    message += "Круто! Хочеш стати " + champion + "?";
  }

  alert(message);
} else {
  let missingInfo = "";

  if (!birthYear) {
    missingInfo += "рік народження";
  }
  if (!city) {
    if (missingInfo) {
      missingInfo += ", ";
    }
    missingInfo += "місто";
  }
  if (!favoriteSport) {
    if (missingInfo) {
      missingInfo += " та ";
    }
    missingInfo += "вид спорту";
  }

  alert("Шкода, що ви не захотіли ввести свій(ю) " + missingInfo + ".");
}




