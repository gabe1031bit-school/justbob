// set wait cmmd.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const bobIs = document.getElementById("bobis")
const bobTip = document.getElementById("bobtip")
const bobUIState = document.getElementById("bobimg")

async function startBob() {
    bobIs.textContent = "bob is loading, js is enabled!"
    bobTip.textContent = "Tip: just wait for bob to load."
    bobUIState.src = "/src/bob/1.png"

    console.log("bob is starting!!")
}

function bobNormal() {
    bobIs.textContent = "bob is NORMAL."
    bobTip.textContent = "Tip: do nothing, for now. he is perfectly fine!"
    bobUIState.src = "/src/bob/1.png"

    console.log("set BOB to NORMAL.")
}

function bobHungry() {
    bobIs.textContent = "bob is HUNGRY."
    bobTip.textContent = "Tip: feed him! click on the button below to feed."
    bobUIState.src = "/src/bob/4.png"

    console.log("set BOB to HUNGRY.")
} 

function bobHappy() {
    bobIs.textContent = "bob is HAPPY!"
    bobTip.textContent = "Tip: do nothing, he is cool!"
    bobUIState.src = "/src/bob/2.png"

    console.log("set BOB to HAPPY.")
}  

function bobSad() {
    bobIs.textContent = "bob is SAD. :("
    bobTip.textContent = "Tip: click on the entertain button below this text!"
    bobUIState.src = "/src/bob/3.png"

    console.log("set BOB to SAD.")
} 

async function main() {

    let bobState = 1;

    startBob();
    await wait(2000);
    bobNormal();
    while(true) {
        if (bobState === 1) {
            await wait(50000);
            bobSad();
        } else if (bobState === -1){
            bobNormal();
            await wait(100)
        } else {
            bobHungry(); 
        }
        await wait(11000)

        
    }
}

async function pressEntertain() {
    await wait(5000);
    bobHappy();
    bobState = 2
    await wait(60000);
    bobNormal();
    bobState = 1
}

async function pressFeast() {
    await wait(5000);
    bobHappy();
    bobState = 2;
    await wait(120000);
    bobHungry();
    bobState = 3
}

async function pressSadMovie() {
    await wait(5000);
    bobSad();
    bobState = -1
    await wait(5000);
    bobNormal();
    bobState = 1
}

const startTime = Date.now();
const bobAge = document.getElementById("bobAge")

setInterval(() => {
    const elapsedMs = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedMs / 1000);

    const days = String(Math.floor(totalSeconds / 86400)).padStart(2, "0");
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    bobAge.textContent = "bob is about..." + `${days}:${hours}:${minutes}:${seconds}` + " old.";
}, 1000);

main();
