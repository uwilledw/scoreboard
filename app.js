// function yo() {
//     console.log('yo');
// }

// yo()

let homeScore = 0
let awayScore = 0

function addHome() {
    homeScore += 1
    console.log(homeScore);
    drawHome()
}

function subHome() {
    homeScore -= 1
    console.log(homeScore);
    drawHome()
}

function addAway() {
    awayScore += 1
    console.log(awayScore)
    drawAway()
}

function subAway() {
    awayScore -= 1
    console.log(awayScore)
    drawAway()
}

function drawHome() {
    let homeWindow = document.getElementById("home-window")
    homeWindow.innerHTML = homeScore
}

function drawAway() {
    let awayWindow = document.getElementById("away-window")
    awayWindow.innerHTML = awayScore
}

function reset() {
    homeScore = 0
    awayScore = 0
    drawHome()
    drawAway()
}

function youWin() {
    if (homeScore == 10) {
        window.alert("Home won")
    } else if (awayScore == 10) {
        window.alert("Away won")
    }
}
