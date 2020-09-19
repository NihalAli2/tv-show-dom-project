
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
const allEpisodes = getAllEpisodes();
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

console.log(allEpisodes);
function getselectEpisode(episodeSilector) {
  
  
  for (let i = 0; i < allEpisodes.length; i++) {
    let selectEpisode = document.getElementById("list");
    let option = document.createElement("option");
    option.value = i
    option.textContent = allEpisodes[i].name;
    selectEpisode.appendChild(option)
   
  }
  

getselectEpisode(selecEpis)
}
window.onload = setup;