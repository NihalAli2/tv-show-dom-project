let allEpisodes;
let allShowes;

function setup() {
  allShowes = getAllShows();
  fetch("https://api.tvmaze.com/shows/82/episodes")
  
  .then(res => {
    return res.json();
  })
  .then(data => {
    allEpisodes = data;
  // const allEpisodes = getAllEpisodes();
  console.log(allEpisodes);
  makePageForEpisodes(allEpisodes);
  getSelectEpisode();
  })
  getSelectShowes();
  }

  // const allEpisodes = getAllEpisodes();
  
  function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  for (let i = 0; i < episodeList.length; i++) {
  //Main div
  let episodDivEl = document.createElement("div");
  //creat all episode head+image+summury
  let episodHeadEl = document.createElement("h3");
  
  //image
  let imageEl = document.createElement("img");
  //summury
  let sumEpisoedEl = document.createElement("p");
  
  episodHeadEl.textContent = episodeList[i].name + episodeList[i].season + episodeList[i].number;
  episodDivEl.appendChild(episodHeadEl);
  imageEl.src = episodeList[i].image.medium;
  episodDivEl.appendChild(imageEl);
  sumEpisoedEl.innerHTML = episodeList[i].summary;
  episodDivEl.appendChild(sumEpisoedEl)
  let origSorce = document.createElement("a");
  origSorce.href = "https://tvmaze.com/";
  origSorce.textContent = "This data is copy rigths, click here for more informathion";
  episodDivEl.appendChild(origSorce)
  
  rootElem.appendChild(episodDivEl);
  }
  }
  let serchforEpi = document.getElementById("input");
  serchforEpi.addEventListener("keyup", function(event) {
  input(event.target.value.toLowerCase())
  })
  function input(searchForEpis) {
  let arrayForAllEpsi = allEpisodes.filter(episode => {
  return episode.name.toLowerCase().includes(searchForEpis) || episode.summary.toLowerCase().includes(searchForEpis)
  })
  
  
  makePageForEpisodes(arrayForAllEpsi);
  }
  
  //Drop down search box
  
  function getSelectEpisode() {
  for (let i = 0; i < allEpisodes.length; i++) {
  let selectEpisode = document.getElementById("list");
  let option = document.createElement("option");
  option.value = i
  option.textContent = `S${allEpisodes[i].season} - E${allEpisodes[i].number} - ${allEpisodes[i].name}`;
  selectEpisode.appendChild(option)
  }
  }
  //Show selector
  function getSelectShowes() {
    for (let i = 0; i < allShowes.length; i++) {
    let selectShows = document.getElementById("list1");
    let option = document.createElement("option");
    option.value = i
    option.textContent = `${allShowes[i].name}`;
    selectShows.appendChild(option)
    }
    }
  
  window.onload = setup;