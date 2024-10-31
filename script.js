const options = document.querySelector('.options');
const emotion = document.querySelectorAll('.emotion');
const main = document.querySelector('.container');
const dynamicDiv = document.querySelector('.dynamic-div')
const feedbackInfo = document.getElementById('feedback-info');
const send = document.getElementById('send');
const back = document.getElementById('back');

let rating = "";
let emoji = "";

emotion.forEach((eles) => {
    eles.addEventListener('click', () => {
        extractActiveFunctionality();
        emoji = eles.children[0].innerText
        rating = eles.children[1].innerText;
        eles.classList.add('clicked');
    });
});

send.addEventListener('click', () => {
    if (rating !== "") {
        main.style.display = 'none';
        feedbackInfo.innerText = `${emoji} ${rating} ${emoji}`;
        dynamicDiv.style.display = 'flex';
    }
    else {
        send.animate([
            {transform: 'scale(1.1) rotateZ(-1deg)'},
            {transform: 'scale(1) rotateZ(0deg)'},
            {transform: 'scale(1.1) rotateZ(1deg)'}
        ], {
            duration: 300,
            iterations: 3,
            easing: 'ease-in-out'
        });
    }
});

back.addEventListener('click', () => {
    main.style.display = 'flex';
    dynamicDiv.style.display = 'none'
})

function extractActiveFunctionality() {
    emotion.forEach(ele => {
        ele.classList.remove('clicked');
    });
}

window.addEventListener('load', () => {
    main.classList.add('loaded');
    dynamicDiv.classList.add('loaded');
})