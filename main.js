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

    console.log("set BOB to NORMAL.")
} 

function bobNormal() {
    bobIs.textContent = "bob is NORMAL."
    bobTip.textContent = "Tip: do nothing, for now. he is perfectly fine!"
    bobUIState.src = "/src/bob/1.png"

    console.log("set BOB to NORMAL.")
}  

function bobNormal() {
    bobIs.textContent = "bob is NORMAL."
    bobTip.textContent = "Tip: do nothing, for now. he is perfectly fine!"
    bobUIState.src = "/src/bob/1.png"

    console.log("set BOB to NORMAL.")
} 

async function main() {
    startBob();
    await wait(2000);
    bobNormal();
}

main();