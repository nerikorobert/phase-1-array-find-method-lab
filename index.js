function superbowlWin(record) {
    

}
function superbowlWin(array) {
    const winningTeam = array.find((team) => team.result === "W");
    return winningTeam ? winningTeam.year : undefined;
  }
