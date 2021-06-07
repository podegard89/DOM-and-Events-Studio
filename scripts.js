// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // buttons
    let takeOffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");

    // html elements we are affecting with our buttons
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    
    takeOffButton.addEventListener("click", function() {
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeOffConfirmation === true) { // same as if(takeOffConfirmation)
            flightStatus.innerHTML = "Shuttle in flight";  
            shuttleBackground.style = "background-color: blue";
            spaceShuttleHeight.innerHTML = 10000;
        }
    })

    landingButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style = "background-color: green";
        spaceShuttleHeight.innerHTML = 0;
    })

    abortButton.addEventListener("click", function() {
        let missionAbortConfirmation = window.confirm("Confirm that you want to abort the mission.");
        if(missionAbortConfirmation === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style = "background-color: green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

})