let home_count = 0
let guest_count = 0

let homeEl = document.getElementById("home_screen")
let guestEl = document.getElementById("guest_screen")

function leaderCheck() {
    if(home_count > guest_count) {
        homeEl.classList.add("leader")
        guestEl.classList.remove("leader")
    }
    
    if(guest_count > home_count) {
        guestEl.classList.add("leader")
        homeEl.classList.remove("leader")
    }
}

function incrementHomeBy1() {
    home_count += 1
    homeEl.textContent = home_count
    
    leaderCheck()
}

function incrementHomeBy2() {
    home_count += 2
    homeEl.textContent = home_count
    
    leaderCheck()
}

function incrementHomeBy3() {
    home_count += 3
    homeEl.textContent = home_count
    
    leaderCheck()
}

function incrementGuestBy1() {
    guest_count += 1
    guestEl.textContent = guest_count
    
    leaderCheck()
}

function incrementGuestBy2() {
    guest_count += 2
    guestEl.textContent = guest_count
    
    leaderCheck()
}

function incrementGuestBy3() {
    guest_count += 3
    guestEl.textContent = guest_count
    
    leaderCheck()
}

function newGame() {
    home_count = 0
    guest_count = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
    
    homeEl.classList.remove("leader")
    guestEl.classList.remove("leader")
}