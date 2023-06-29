/* EFECT MAQUINA DE ESCRIBIR */

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Desarrollador FullStack";
    }, 0);
    /*setTimeout(() => {
        text.textContent = "";
    }, 4000);*/
}

textLoad();
setInterval(textLoad, 12000);

/* PROGRESS BAR */

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 90;
let speed = 60;

let progress = setInterval( () => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`;
    if(progressValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);

let progressBar_2 = document.querySelector(".circular-progress_2");
let valueContainer_2 = document.querySelector(".value-container_2");

let progressValue_2 = 0;
let progressEndValue_2 = 90;
let speed_2 = 60;

let progress_2 = setInterval( () => {
    progressValue_2++;
    valueContainer_2.textContent = `${progressValue_2}%`;
    progressBar_2.style.background = `conic-gradient(
        #4d5bf9 ${progressValue_2 * 3.6}deg,
        #cadcff ${progressValue_2 * 3.6}deg
    )`;
    if(progressValue_2 == progressEndValue_2) {
        clearInterval(progress_2);
    }
}, speed);

let progressBar_3 = document.querySelector(".circular-progress_3");
let valueContainer_3 = document.querySelector(".value-container_3");

let progressValue_3 = 0;
let progressEndValue_3 = 40;
let speed_3 = 60;

let progress_3 = setInterval( () => {
    progressValue_3++;
    valueContainer_3.textContent = `${progressValue_3}%`;
    progressBar_3.style.background = `conic-gradient(
        #4d5bf9 ${progressValue_3 * 3.6}deg,
        #cadcff ${progressValue_3 * 3.6}deg
    )`;
    if(progressValue_3 == progressEndValue_3) {
        clearInterval(progress_3);
    }
}, speed);

let progressBar_4= document.querySelector(".circular-progress_4");
let valueContainer_4 = document.querySelector(".value-container_4");

let progressValue_4 = 0;
let progressEndValue_4 = 20;
let speed_4 = 60;

let progress_4 = setInterval( () => {
    progressValue_4++;
    valueContainer_4.textContent = `${progressValue_4}%`;
    progressBar_4.style.background = `conic-gradient(
        #4d5bf9 ${progressValue_4 * 3.6}deg,
        #cadcff ${progressValue_4 * 3.6}deg
    )`;
    if(progressValue_4 == progressEndValue_4) {
        clearInterval(progress_4);
    }
}, speed);