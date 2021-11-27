let searchBtn = document.getElementById("search-btn");
let inputField = document.getElementById("country");
let contentOfBody = document.getElementById("content");

let stat = document.getElementById("cases");

searchBtn.addEventListener("click", function () {
  async function fetchData() {
    let inputValue = inputField.value;
    let statValue = stat.value;

    let response = await fetch(
      `https://covid-19.dataflowkit.com/v1/${inputValue}`
    );

    let data = await response.json();
    console.log(data["Total Cases_text"]);
    console.log(data["Total Deaths_text"]);
    console.log(data["Total Recovered_text"]);
  }

  fetchData();
});
