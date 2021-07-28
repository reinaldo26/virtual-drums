document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLocaleLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
    let input = document.querySelector("#input").value;
  
    if (input !== "") {
        let songArray = input.split("");
        playComposition(songArray);
    }
});

function playSound(key) {
    let audioEl = document.querySelector(`#s_${key}`);
    let datakey = document.querySelector(`div[data-key="${key}"]`);
    
    if (audioEl) {
        audioEl.currentTime = 0;
        audioEl.play();
    }
    
    if (datakey) {
        datakey.classList.add("active");
        setTimeout(() => {
            datakey.classList.remove("active");
        }, 500);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}
