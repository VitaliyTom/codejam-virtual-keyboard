const body = document.querySelector('body');
const div = document.createElement('div');
const textArea =  '<div class = "wrapper_textArea"> <textArea class = "textArea" , rows = "15",> </textArea> </div> ';

const keyboardEng = [['','`'],['', 1], ['', 2], ['', 3], ['', 4], ['', 5], ['', 6], ['', 7], ['', 8], ['', 9], ['', 0], 
['', '-'], ['', '='], ['backspace', 'Backspace'], ['tab', 'Tab'], ['', 'q'],['', 'w'], ['', 'e'], ['', 'r'], ['', 't'], ['', 'y'], ['', 'u'], 
['', 'i'], ['', 'o'], ['', 'p'], ['', '['], ['', ']'], ['slash', '\\'], ['capslock', 'CapsLock'], ['', 'a'], ['', 's'], ['', 'd'], ['', 'f'], 
['', 'g'], ['', 'h'], ['', 'j'], ['', 'k'], ['', 'l'], ['', ';'], ['', '\''], ['enter', 'Enter'], ['left_shift', 'SHIFT'], ['', 'z'], ['', 'x'],
['', 'c'], ['', 'v'], ['', 'b'], ['', 'n'], ['', 'm'], ['', ','], ['', '.'], ['', '/'],['arrow_up', '⇑'], ['right_shift', 'SHIFT'], 
['left_control', 'CTRL'], ['left_meta', 'Win'], ['left_alt', 'ALT'], ['space', 'Space'], ['right_alt', 'ALT'], ['arrow_left', '⇐'], 
['arrow_down', '⇓'], ['arrow_right', '⇒'], ['right_control', 'CTRL']];

div.className = 'container';
body.prepend(div);
const bodyDiv = document.querySelector('div');
bodyDiv.insertAdjacentHTML('afterbegin', textArea);
bodyDiv.insertAdjacentHTML('beforeend', '<div class = "keyboard" ></div>')

keyboardEng.reverse().map(el =>{
       bodyDiv.children[1].insertAdjacentHTML('afterbegin', `<div class = "keyboardEng ${el[0]}"> <p>${el[1]}</p></div>`);
});

const keyboard =  document.querySelector('.keyboard');
const keyboardEngDOM = Array.from(document.querySelectorAll('.keyboardEng'));
let arr = [['arrow_left', 'ArrowLeft'], ['arrow_right', 'ArrowRight'], ['arrow_up', 'ArrowUp'], ['arrow_down', 'ArrowDown'],['space',' ']]
let textAreaIn = document.querySelector('.textArea');

window.addEventListener('keydown', (event) => {
    let key = event.key;
    let location = event.location;
    
    event.preventDefault();
    
    keyboardEngDOM.map(el => {
       
        switch (location) {
           
            case 1:
                document.querySelector(`.left_${key.toLowerCase()}`).classList.add('active');
            break;

            case 2:
                document.querySelector(`.right_${key.toLowerCase()}`).classList.add('active');
            break;
                  
        }

        if (location === 0 && el.classList.length > 1 ){
            arr.map(item =>{
               if(item[1] === key){
                document.querySelector(`.${item[0]}`).classList.add('active');
               } 
            })
        }         

         if( el.innerText === key){
              el.closest('.keyboardEng').classList.add('active');
              textAreaIn.value += el.innerText;
        }
    });
});


window.addEventListener('keyup', (event) => {
    let key = event.key;       
    let location = event.location;
    keyboardEngDOM.map(el => {

        switch (location) {
           
            case 1:
                document.querySelector(`.left_${key.toLowerCase()}`).classList.remove('active');
            break;

            case 2:
                document.querySelector(`.right_${key.toLowerCase()}`).classList.remove('active');
            break;
                  
        }

        if (location === 0 && el.classList.length > 1 ){
            arr.map(item =>{
               if(item[1] === key){
                document.querySelector(`.${item[0]}`).classList.remove('active');
               } 
            })
        }

        if ( el.innerText === key){
            el.closest('.keyboardEng').classList.remove('active');
        }
    })
})

// console.log(el.innerText);
// console.log('press = ' + key);
// console.log('location = ' + location);