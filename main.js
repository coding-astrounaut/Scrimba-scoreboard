let homeCount = 0;
let guestCount = 0;

function increment(team, points) {
    if (team === 'home') {
        homeCount += points;
        document.getElementById('home-score').textContent = homeCount;
    } else {
        guestCount += points;
        document.getElementById('guest-score').textContent = guestCount;
    }
    if (homeCount > guestCount) {
        document.getElementById("home-score-container").style.boxShadow = "0 0 20px 5px #00ff00";
        document.getElementById("guest-score-container").style.boxShadow = "";
    } else if(guestCount > homeCount) {
        document.getElementById("guest-score-container").style.boxShadow = "0 0 20px 5px #00ff00";
        document.getElementById("home-score-container").style.boxShadow = "";    
    } else {
        document.getElementById("guest-score-container").style.boxShadow = "";
        document.getElementById("home-score-container").style.boxShadow = "";  
    }
}

function resetScores() {
    homeCount = 0;
    guestCount = 0;
    document.getElementById('home-score').textContent = homeCount;
    document.getElementById('guest-score').textContent = guestCount;
    document.getElementById("guest-score-container").style.boxShadow = "";
    document.getElementById("home-score-container").style.boxShadow = "";  
}