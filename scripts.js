// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    // buttons
    let takeOffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");
    let rocketImage = document.getElementById("rocket");
    rocketImage.style.position= 'absolute'; 
    rocketImage.style.left = '0px'; 
    rocketImage.style.bottom = '0px';


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
        
        // for part 5
        rocketImage.style.bottom = "0px";
    })

    abortButton.addEventListener("click", function() {
        let missionAbortConfirmation = window.confirm("Confirm that you want to abort the mission.");
        if(missionAbortConfirmation === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style = "background-color: green";
            spaceShuttleHeight.innerHTML = 0;
            // for part 5
            rocketImage.style.bottom = "0px";
        }

        
    })

    // Part 5 here. You don't have to know how this works.

    upButton.addEventListener("click", function() {
        let shuttleHeightNumber = Number(spaceShuttleHeight.innerHTML);
        spaceShuttleHeight.innerHTML = shuttleHeightNumber + 10000;
        // parseInt("0px") returns the number 0, parses string for an integer
        let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
        rocketImage.style.bottom = movement;
    })

    downButton.addEventListener("click", function() {
        let shuttleHeightNumber = Number(spaceShuttleHeight.innerHTML);
        spaceShuttleHeight.innerHTML = shuttleHeightNumber - 10000;
        let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
        rocketImage.style.bottom = movement;
    })

    rightButton.addEventListener("click", function() {
        let movement = parseInt(rocketImage.style.left) + 10 + 'px';
        rocketImage.style.left = movement;
    })

    leftButton.addEventListener("click", function() {
        let movement = parseInt(rocketImage.style.left) - 10 + 'px';
        rocketImage.style.left = movement;
    })

})