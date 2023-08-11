let second = Number(document.querySelector('#second').textContent)
let minute = Number(document.querySelector('#minute').textContent)
let startButton = document.querySelector('.start-button')
const types = document.querySelectorAll(".types");
const modalWindow = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const types2 = document.querySelectorAll(".types2");
const modalWindow2 = document.querySelector(".modal2");
const btnCloseModal2 = document.querySelector(".close-modal2");
const overlay2 = document.querySelector(".overlay2");
const audioTick = new Audio('tick.mp3')
const audioOver = new Audio('over.mp3')
startClick = false    
let timer

document.querySelector('.start-button').addEventListener('click', function() {  
    startClick = !startClick
    if (startClick) {
        startButton.textContent = 'Stop';
        startButton.classList.remove('start-button');
        startButton.classList.add('pause-button');
        timer = setInterval(function() {   
        if(second < 10 && second > 0){
            for(second; second == "00"; second--) {
                secondNull = '0' + second;
                return document.querySelector('#second').textContent = secondNull
            }
        }   
        if(second === 0 || second === "00"){
            second = 60    
            minute--
            document.querySelector('#minute').textContent = minute
        }
        console.log(second--)
        document.querySelector('#second').textContent = second
        audioTick.play()
        if(minute < 0 || minute === '00') {
            minute = '00'
            second = '00'
            document.querySelector('#minute').textContent = minute
            document.querySelector('#second').textContent = second
            clearInterval(timer)
            audioOver.play()
            startButton.classList.remove('pause-button');
            startButton.classList.add('start-button'); 
            startButton.textContent = "Restart"   
            minute = 25
            second = '00'
        }}, 1000)
    } else {
        startClick = !startClick
        clearInterval(timer)
        startButton.textContent = "Start"
        startButton.classList.remove('pause-button');
        startButton.classList.add('start-button'); 
        startClick = !startClick
    }
})

document.querySelector(".repeat-button").addEventListener('click', function(){
    clearInterval(timer)
    if (startClick == false || startClick == true) {
        minute = 25
        second = "00"
        document.querySelector('#minute').textContent = minute
        document.querySelector('#second').textContent = second
        startButton.classList.remove('pause-button');
        startButton.classList.add('start-button'); 
        startButton.textContent = "Start"
        startClick = false
    }
    
})

for (let value of types) {
    value.addEventListener("click", function () {
      overlay.classList.toggle("hidden");
      modalWindow.classList.toggle("hidden");
    });
}

btnCloseModal.addEventListener("click", function () {
    overlay.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
});
  
overlay.addEventListener("click", function () {
    overlay.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
});
  
document.addEventListener("keydown", function (event) {
if (event.key == "Escape" && !modalWindow.classList.contains("hidden")) {
    overlay.classList.toggle("hidden");
    modalWindow.classList.toggle("hidden");
}
});


for (let value of types2) {
    value.addEventListener("click", function () {
      overlay2.classList.toggle("hidden2");
      modalWindow2.classList.toggle("hidden2");
    });
}

btnCloseModal2.addEventListener("click", function () {
    overlay2.classList.toggle("hidden2");
    modalWindow2.classList.toggle("hidden2");
});
  
overlay2.addEventListener("click", function () {
    overlay2.classList.toggle("hidden2");
    modalWindow2.classList.toggle("hidden2");
});
  
document.addEventListener("keydown", function (event) {
if (event.key == "Escape" && !modalWindow2.classList.contains("hidden2")) {
    overlay2.classList.toggle("hidden2");
    modalWindow2.classList.toggle("hidden2");
}
});