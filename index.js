async function coronaData() {
  try {
    let apiData = await fetch("https://data.covid19india.org/data.json");
    let dataJson = await apiData.json();

    let stateWise = dataJson.statewise;

    let tableBody = document.querySelector(".table tbody");

    // tableBody.innerHTML = "";

    stateWise.forEach((element) => {
      let tr = document.createElement("tr");
      let tdActive = document.createElement("td");
      tdActive.innerText = element.active;
      tdActive.style.cssText =
        "text-align:center; border:3px solid black; border-radius: 10px; color:black; font-size:21px;";
      tr.append(tdActive);

      let tdConfirmed = document.createElement("td");
      tdConfirmed.innerText = element.confirmed;
      tdConfirmed.style.cssText =
        "text-align:center; border:3px solid black; border-radius: 10px; color:black; font-size:21px;";
      tr.append(tdConfirmed);

      let tdDeaths = document.createElement("td");
      tdDeaths.innerText = element.deaths;
      tdDeaths.style.cssText =
        "text-align:center; border:3px solid black; border-radius: 10px; color:black; font-size:21px;font-size:21px;";
      tr.append(tdDeaths);

      let tdDeltaConfirmed = document.createElement("td");
      tdDeltaConfirmed.innerText = element.deltaconfirmed;
      tdDeltaConfirmed.style.cssText =
        "text-align:center; border:3px solid black; border-radius: 10px; color:black; font-size:21px;";
      tr.append(tdDeltaConfirmed);

      let tdDeltaDeaths = document.createElement("td");
      tdDeltaDeaths.innerText = element.deltadeaths;
      tdDeltaDeaths.style.cssText =
        "text-align:center; border:3px solid black; border-radius: 10px; color:black; font-size:21px;";
      tr.appendChild(tdDeltaDeaths);

      tableBody.appendChild(tr);
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

coronaData();
