// Selecting display for points
const homeScore = document.querySelector(".home-score");
const guestScore = document.querySelector(".guest-score");

// Selecting Buttons to add points 
const onePointHome = document.getElementById("add-one-point");
const twoPointsHome = document.getElementById("add-two-points");
const threePointsHome = document.getElementById("add-three-points");

const onePointGuest = document.getElementById("add-one-point-guest");
const twoPointsGuest = document.getElementById("add-two-points-guest");
const threePointsGuest = document.getElementById("add-three-points-guest");

let homeResult = 0;
let guestResult = 0;


// Functions for adding Home points 
function addOnePointHome() {
    homeScore.textContent = homeResult;
    return homeResult+= 1
}

function addTwoPointHome() {
    homeScore.textContent = homeResult;
    return homeResult+= 2
}

function addThreePointHome() {
    homeScore.textContent = homeResult;
    return homeResult+= 3
}

// Functions for adding Guest Points 
function addOnePointGuest() {
    guestScore.textContent = guestResult;
    return guestResult+= 1;
}
function addTwoPointGuest() {
    guestScore.textContent = guestResult;
    return guestResult+= 2;
}

function addThreePointGuest() {
    guestScore.textContent = guestResult;
    return guestResult+= 3;
}

// Event Listeners for buttons 
onePointHome.addEventListener("click",addOnePointHome);
twoPointsHome.addEventListener("click",addTwoPointHome);
threePointsHome.addEventListener("click",addThreePointHome);


onePointGuest.addEventListener("click",addOnePointGuest)
twoPointsGuest.addEventListener("click",addTwoPointGuest)
threePointsGuest.addEventListener("click",addThreePointGuest)