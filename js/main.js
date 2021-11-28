let searchBtn = document.getElementById("search-btn");
let inputField = document.getElementById("country");
let contentOfBody = document.getElementById("content");
let caseDiv = document.getElementById("case");
let deathDiv = document.getElementById("death");
let recoveredDiv = document.getElementById("recovered");
let jokeBtn = document.getElementById("joke-btn");

async function fetchData() {
  let inputValue = inputField.value;

  let response = await fetch(
    `https://covid-19.dataflowkit.com/v1/${inputValue}`
  );

  let data = await response.json();

  console.log(data["Total Cases_text"]);

  console.log(data["Total Deaths_text"]);

  console.log(data["Total Recovered_text"]);

  let cases = data["Total Cases_text"];
  let deaths = data["Total Deaths_text"];
  let recovered = data["Total Recovered_text"];

  caseDiv.innerHTML = `<h5>Cases</h5> <p>${cases}</p>`;
  deathDiv.innerHTML = `<h5>Deaths</h5><p>${deaths}</p>`;
  recoveredDiv.innerHTML = `<h5>Recovered</h5><p>${recovered}</p>`;
}

searchBtn.addEventListener("click", function () {
  fetchData();
});
