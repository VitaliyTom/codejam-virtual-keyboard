localStorage.setItem('caps', 'smallLetter');
const body = document.querySelector('body');
const div = document.createElement('div');
const textArea = '<div class = "wrapper_textArea"> <textArea class = "textArea" , rows = "15",> </textArea> <div class = "alert"> <span class = "span"> У ВАС ВКЛЮЧЕН CAPSCLOCK !!! </span></div> </div> ';

const keyboardEng = [['special', '`', '~'], ['special', 1, '!'], ['special', 2, '@'], ['special', 3, '#'], ['special', 4, '$'], ['special', 5, '%'],
 ['special', 6, '^'], ['special', 7, '&'], ['special', 8, '*'], ['special', 9, '('], ['special', 0, ')'], ['special', '-', '_'], ['special', '=', '+'],
 ['backspace', 'Backspace', 'Backspace'], ['tab', 'Tab', 'Tab'], ['simple_key', 'q', 'Q'], ['simple_key', 'w', 'W'], ['simple_key', 'e', 'E'], ['simple_key', 'r', 'R'], 
 ['simple_key', 't', 'T'], ['simple_key', 'y', 'Y'], ['simple_key', 'u', 'U'], ['simple_key', 'i', 'I'], ['simple_key', 'o', 'O'], ['simple_key', 'p', 'P'], 
 ['special', '[', '{'], ['special', ']', '}'], ['special', '\\', '|'], ['del', 'Del', 'Del'], ['capslock', 'CapsLock', 'CapsLock'], ['simple_key', 'a', 'A'], 
 ['simple_key', 's', 'S'], ['simple_key', 'd', 'D'], ['simple_key', 'f', 'F'], ['simple_key', 'g', 'G'], ['simple_key', 'h', 'H'], ['simple_key', 'j', 'J'], 
 ['simple_key', 'k', 'K'], ['simple_key', 'l', 'L'], ['special', ';', ':'], ['special', '\'', '"'], ['enter', 'Enter', 'Enter'], ['left_shift', 'Shift', 'Shift'], 
 ['simple_key', 'z', 'Z'], ['simple_key', 'x', 'X'], ['simple_key', 'c', 'C'], ['simple_key', 'v', 'V'], ['simple_key', 'b', 'B'], ['simple_key', 'n', 'N'], 
 ['simple_key', 'm', 'M'], ['special', ',', '<'], ['special', '.', '>'], ['special', '/', '?'], ['arrow_up', '⇑', '⇑'], ['right_shift', 'Shift', 'Shift'],
 ['left_control', 'Ctrl', 'Ctrl'], ['left_meta', 'Win', 'Win'], ['left_alt', 'Alt', 'Alt'], ['space', ' ', ' '], ['right_alt', 'Alt', 'Alt'], ['arrow_left', '⇐', '⇐'],
 ['arrow_down', '⇓', '⇓'], ['arrow_right', '⇒', '⇒'], ['right_control', 'Ctrl', 'Ctrl']];

let arr = [['arrow_left', 'ArrowLeft'], ['arrow_right', 'ArrowRight'], 
    ['arrow_up', 'ArrowUp'], ['arrow_down', 'ArrowDown'],
    ['space', ' '], ['del', 'Delete'], ['backspace', 'Backspace'], 
    ['tab', 'Tab'], ['enter', 'Enter'], ['left_control', 'Ctrl'],
    ['right_control', 'Ctrl'], ['left_meta', 'Win'],
    ['left_alt', 'Alt'], ['right_alt', 'Alt'],
    ['left_shift', 'Shift'],  ['right_shift', 'Shift'] ];    

div.className = 'container';
body.prepend(div);
const bodyDiv = document.querySelector('div');
bodyDiv.insertAdjacentHTML('afterbegin', textArea);
bodyDiv.insertAdjacentHTML('beforeend', '<div class = "keyboard" ></div>')

keyboardEng.reverse().map(el => {
    bodyDiv.children[1].insertAdjacentHTML('afterbegin', `<div class = "keyboardEng ${el[0]}"> <p class = "little_letter">${el[1]}</p> <p class = "big_letter letter_none">${el[2]}</p></div>`);
});

const keyboard = document.querySelector('.keyboard');
const keyboardEngDOM = Array.from(document.querySelectorAll('.keyboardEng'));
let textAreaIn = document.querySelector('.textArea');
const little_letter = Array.from(document.querySelectorAll('.little_letter'));
const big_letter = Array.from(document.querySelectorAll('.big_letter'));
const local = window.navigator.language;
const capslock = document.querySelector('.capslock'); 
let capsOn = 0;


    window.addEventListener('keydown', (event) => {

        event.preventDefault();
        let key = event.key;
        // console.log(key);
        let keyCode = event.code;
        let location = event.location;
        let keyLower = key.toLowerCase();
        let left = 'left';
        let right = 'right';
        
        keyboard();

        switch (keyCode) {

            case 'ShiftLeft':
                if(document.querySelector('.right_shift').classList[2] === 'active'){
                    break;
                }

                addActive(keyLower, left);

                if(capslock.classList[2] === 'active' ){
                    bigLetter();
                    letterLower ();                                       
                }else{
                    bigLetter();                    
                }
                break;

            case 'ShiftRight':
                if(document.querySelector('.left_shift').classList[2] === 'active'){
                    break;
                }

                addActive(keyLower, right);

                if(capslock.classList[2] === 'active' ){
                    bigLetter();
                    letterLower ();
                }else{
                    bigLetter();
                }
                break;
                
            case 'ControlLeft':
                addActive(keyLower, left);
                break;
            case 'ControlRight':
                addActive(keyLower, right);
                break;
            case 'AltLeft':
                addActive(keyLower, left);
                break;
            case 'AltRight':
                addActive(keyLower, right);
                break;
            case 'CapsLock':
                capslock.classList.toggle('active');
                if(localStorage.getItem('caps') === 'smallLetter'){
                    localStorage.setItem('caps', 'bigLetter');
                    letterUpper();
                }else
                if (localStorage.getItem('caps') === 'bigLetter'){
                    localStorage.setItem('caps', 'smallLetter');
                    letterLower();
                    lower ();
                }
                break;
            case 'Tab':
                addActiveKey();
                break;
            case 'Backspace':
                addActiveKey();
                break;
            case 'Enter':
                addActiveKey();
                break;
            case 'Delete':
                addActiveKey();
                break;
            case 'ArrowUp':
                addActiveKey();
                break;
            case 'ArrowDown':
                addActiveKey();
                break;
            case 'ArrowLeft':
                addActiveKey();
                break;
            case 'ArrowRight':
                addActiveKey();
                break;
            case 'Delete':
                addActiveKey();
                break;
            case 'Space':
                addActiveKey();
                break;
            case 'MetaLeft':
                addActiveKey();
                break;          
            
        }
        //  активация нажатых клавиш - буквы и цифры
        function keyboard(){
            keyboardEngDOM.map(el => {
                if(el.classList[1] === 'simple_key' || el.classList[1] === 'special' ){
                    if (el.innerText.toLowerCase() === key.toLowerCase()) {
                        el.closest('.keyboardEng').classList.add('active');
                        textAreaIn.value += el.innerText;
                    }
                }
            });
        }
        //  активация нажатых функциональных клавиш 
        function addActiveKey() {
            keyboardEngDOM.map(el => {
                if (el.innerText === key) {
                        el.closest('.keyboardEng').classList.add('active');
                }
            })     
        }

        // маленькие буквы и цифры убираем, показываем большие
        function bigLetter() {
            little_letter.map(item => {
                item.classList.add('letter_none');
            })
    
            big_letter.map(item => {
                item.classList.remove('letter_none');                
            })
        }
        
        //  активация нажатых функциональных клавиш - alt,ctrl,shift
        function addActive(key, str) {
            document.querySelector(`.${str}_${key}`).classList.add('active');
        }
    })

    //  делаем большими только буквы
    function letterUpper (){
        keyboardEngDOM.map(el => {
            if (el.classList[1] === 'simple_key' ) {
                    el.closest('.keyboardEng').classList.add('letter_uppercase');    
                    el.closest('.keyboardEng').classList.remove('letter_lowercase');                
            }
        })  
        textAreaIn.nextElementSibling.style.display = 'block';
        keyboard.style.marginTop = '6px';  
    }

    //  делаем маленькими только буквы
    function letterLower (){
        keyboardEngDOM.map(el => {
            if (el.classList[1] === 'simple_key') {
                    el.closest('.keyboardEng').classList.remove('letter_uppercase');
                    el.closest('.keyboardEng').classList.add('letter_lowercase');
            }
        })    
        textAreaIn.nextElementSibling.style.display = 'none';
        keyboard.style.marginTop = '100px';
    }

    //  удаляем селектор lowerCase
    function lower (){
        keyboardEngDOM.map(el => {
            if (el.classList[1] === 'simple_key' ) {
                    el.closest('.keyboardEng').classList.remove('letter_lowercase');
            }
        })    
    }
    

    
    window.addEventListener('keyup', (event) => {
        let key = event.key;
        let keyCode = event.code;
        let location = event.location;        
        let keyLower = key.toLowerCase();
        let left = 'left';
        let right = 'right';
        switch (keyCode) {
            case 'ShiftLeft':
                removeActive(keyLower, left);
                if(capslock.classList[2] === 'active'){
                    littleLetter();
                    letterUpper ();
                }else{
                    littleLetter();                    
                }
                
                break;
            case 'ShiftRight':
                removeActive(keyLower, right);
                if(capslock.classList[2] === 'active'){
                    littleLetter();
                    letterUpper ();
                }else{
                    littleLetter();

                }
                break;
            case 'ControlLeft':
                removeActive(keyLower, left);
                break;
            case 'ControlRight':
                removeActive(keyLower, right);
                break;
            case 'AltLeft':
                removeActive(keyLower, left);
                break;
            case 'AltRight':
                removeActive(keyLower, right);
                break;
            case 'CapsLock':
              
                break;
            case 'Tab':
                removeActiveKey();
                break;
            case 'Backspace':
                removeActiveKey();
                break;
            case 'Enter':
                removeActiveKey();
                break;
            case 'Delete':
                removeActiveKey();
                break;
            case 'ArrowUp':
                removeActiveKey();
                break;
            case 'ArrowDown':
                removeActiveKey();
                break;
            case 'ArrowLeft':
                removeActiveKey();
                break;
            case 'ArrowRight':
                removeActiveKey();
                break;
            case 'Delete':
                removeActiveKey();
                break;
            case 'Space':
                removeActiveKey();
                break;
            case 'MetaLeft':
                removeActiveKey();
                break;      

            
        }
        //  удаление активации клавиш - буквы и цифры
        keyboardEngDOM.map(el => {
           
            if(el.classList[1] === 'simple_key' || el.classList[1] === 'special'){
                
                if (el.innerText.toLowerCase() === key.toLowerCase()) {
                    el.closest('.keyboardEng').classList.remove('active');
                }
            }
        })
        
        //  удаление активации клавиш - функциональные
        function removeActiveKey() {
            keyboardEngDOM.map(el => {
                if (el.innerText === key) {
                        el.closest('.keyboardEng').classList.remove('active');                        
                }
            })     
        }

        // большие буквы и цифры убираем, показываем маленькие
        function littleLetter() {
            little_letter.map(item => {
                item.classList.remove('letter_none');                
            })
    
            big_letter.map(item => {
                item.classList.add('letter_none');
            })
        }
        //  удаление активации клавиш - alt,ctrl,shift
        function removeActive(key, str) {
            document.querySelector(`.${str}_${key}`).classList.remove('active');
        }
    })
       
    