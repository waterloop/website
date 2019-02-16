const teamStructure = require("./teamStructureW19.js");

for (var teamName in teamStructure) {
  console.log(teamName);
  for (var subteamOrLead in teamStructure[teamName]) {
    if (typeof teamStructure[teamName][subteamOrLead] == "string") {
      console.log(subteamOrLead, ",", teamStructure[teamName][subteamOrLead]);
    } else {
      console.log(subteamOrLead);
      for (var teamMember in teamStructure[teamName][subteamOrLead]) {
        console.log(teamMember, ",", teamStructure[teamName][subteamOrLead][teamMember]);
      }
    }
  }
}
