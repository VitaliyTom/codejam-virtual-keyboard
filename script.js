localStorage.setItem('caps', 'smallLetter');
localStorage.setItem('lang', 'Eng');
// sessionStorage.setItem('lang', 'Eng');
let lang = localStorage.getItem('lang');
if(sessionStorage.hasOwnProperty('lang')){
    lang = sessionStorage.getItem('lang');
}

// const lang = sessionStorage.getItem('lang');
const body = document.querySelector('body');
const div = document.createElement('div');
const textArea = '<div class = "wrapper_textArea"> <textArea class = "textArea" , rows = "15",> </textArea> <div class = "alert"> <span class = "span"> У ВАС ВКЛЮЧЕН CAPSCLOCK !!! </span></div> </div> ';

const keyboardEng = [['special', '`', '~'], ['special', 1, '!'], ['special', 2, '@'], ['special', 3, '#'], ['special', 4, '$'], ['special', 5, '%'],
 ['special', 6, '^'], ['special', 7, '&'], ['special', 8, '*'], ['special', 9, '('], ['special', 0, ')'], ['special', '-', '_'], ['special', '=', '+'],
 ['backspace', 'Backspace', 'Backspace', 'Backspace'], ['tab', 'Tab', 'Tab', 'Tab'], ['simple_key', 'q', 'Q'], ['simple_key', 'w', 'W'], ['simple_key', 'e', 'E'], ['simple_key', 'r', 'R'], 
 ['simple_key', 't', 'T'], ['simple_key', 'y', 'Y'], ['simple_key', 'u', 'U'], ['simple_key', 'i', 'I'], ['simple_key', 'o', 'O'], ['simple_key', 'p', 'P'], 
 ['special', '[', '{'], ['special', ']', '}'], ['special', '\\', '|'], ['del', 'Del', 'Del', 'Delete'], ['capslock', 'CapsLock', 'CapsLock'], ['simple_key', 'a', 'A'], 
 ['simple_key', 's', 'S'], ['simple_key', 'd', 'D'], ['simple_key', 'f', 'F'], ['simple_key', 'g', 'G'], ['simple_key', 'h', 'H'], ['simple_key', 'j', 'J'], 
 ['simple_key', 'k', 'K'], ['simple_key', 'l', 'L'], ['special', ';', ':'], ['special', '\'', '"'], ['enter', 'Enter', 'Enter', 'Enter'], ['left_shift', 'Shift', 'Shift'], 
 ['simple_key', 'z', 'Z'], ['simple_key', 'x', 'X'], ['simple_key', 'c', 'C'], ['simple_key', 'v', 'V'], ['simple_key', 'b', 'B'], ['simple_key', 'n', 'N'], 
 ['simple_key', 'm', 'M'], ['special', ',', '<'], ['special', '.', '>'], ['special', '/', '?'], ['arrow_up', '⇑', '⇑', 'ArrowUp'], ['right_shift', 'Shift', 'Shift'],
 ['left_control', 'Ctrl', 'Ctrl'], ['left_meta', 'Win', 'Win', 'MetaLeft'], ['left_alt', 'Alt', 'Alt'], ['space', ' ', ' ', 'Space'], ['right_alt', 'Alt', 'Alt'], ['arrow_left', '⇐', '⇐', 'ArrowLeft'],
 ['arrow_down', '⇓', '⇓', 'ArrowDown'], ['arrow_right', '⇒', '⇒', 'ArrowRight'], ['right_control', 'Ctrl', 'Ctrl']];

const keyboardRus = [['simple_key', 'ё', 'Ё'], ['special', 1, '!'], ['special', 2, '"'], ['special', 3, '№'], ['special', 4, ';'], ['special', 5, '%'],
['special', 6, ':'], ['special', 7, '?'], ['special', 8, '*'], ['special', 9, '('], ['special', 0, ')'], ['special', '-', '_'], ['special', '=', '+'],
['backspace', 'Backspace', 'Backspace', 'Backspace'], ['tab', 'Tab', 'Tab', 'Tab'], ['simple_key', 'й', 'Й'], ['simple_key', 'ц', 'Ц'], ['simple_key', 'у', 'У'], 
['simple_key', 'к', 'К'], ['simple_key', 'е', 'Е'], ['simple_key', 'н', 'Н'], ['simple_key', 'г', 'Г'], ['simple_key', 'ш', 'Ш'], ['simple_key', 'щ', 'Щ'], 
['simple_key', 'з', 'З'], ['simple_key', 'х', 'Х'], ['simple_key', 'ъ', 'Ъ'], ['special', '\\', '/'], ['del', 'Del', 'Del', 'Delete'], ['capslock', 'CapsLock', 'CapsLock'], 
['simple_key', 'ф', 'Ф'], ['simple_key', 'ы', 'Ы'], ['simple_key', 'в', 'В'], ['simple_key', 'а', 'А'], ['simple_key', 'п', 'П'], ['simple_key', 'р', 'Р'], 
['simple_key', 'о', 'О'], ['simple_key', 'л', 'Л'], ['simple_key', 'д', 'Д'], ['simple_key', 'ж', 'Ж'], ['simple_key', 'э', 'Э'], ['enter', 'Enter', 'Enter', 'Enter'], 
['left_shift', 'Shift', 'Shift'], ['simple_key', 'я', 'Я'], ['simple_key', 'ч', 'Ч'], ['simple_key', 'с', 'С'], ['simple_key', 'м', 'М'], ['simple_key', 'и', 'И'], 
['simple_key', 'т', 'Т'], ['simple_key', 'ь', 'Ь'], ['simple_key', 'б', 'Б'], ['simple_key', 'ю', 'Ю'], ['special', '/', '?'], ['arrow_up', '⇑', '⇑', 'ArrowUp'], ['right_shift', 'Shift', 'Shift'],
['left_control', 'Ctrl', 'Ctrl'], ['left_meta', 'Win', 'Win', 'MetaLeft'], ['left_alt', 'Alt', 'Alt'], ['space', ' ', ' '], ['right_alt', 'Alt', 'Alt'], ['arrow_left', '⇐', '⇐', 'ArrowLeft'],
['arrow_down', '⇓', '⇓', 'ArrowDown'], ['arrow_right', '⇒', '⇒', 'ArrowRight'], ['right_control', 'Ctrl', 'Ctrl']];

div.className = 'container';
body.prepend(div);
const bodyDiv = document.querySelector('div');
bodyDiv.insertAdjacentHTML('afterbegin', textArea);
bodyDiv.insertAdjacentHTML('beforeend', '<div class = "keyboard" ></div>')

    function isLang(){
        return (lang === 'Eng') ? keyboardEng : keyboardRus;
    }
         
    isLang().reverse().map(el => {
    bodyDiv.children[1].insertAdjacentHTML('afterbegin', `<div class = "keyboard${lang} ${el[0]} ${el[3]} "> <p class = "little_letter">${el[1]}</p> <p class = "big_letter letter_none">${el[2]}</p></div>`);
    });

const keyboard = document.querySelector('.keyboard');
const keyboardDOM = Array.from(document.querySelectorAll(`.keyboard${lang}`));
let textAreaIn = document.querySelector('.textArea');
const little_letter = Array.from(document.querySelectorAll('.little_letter'));
const big_letter = Array.from(document.querySelectorAll('.big_letter'));
const capslock = document.querySelector('.capslock'); 

        let key;
        let keyCode;
        let keyLower;
        let left = 'left';
        let right = 'right';
        let state;
        let iter = true;
        // let timer = setTimeout(window.location.reload(), 1000);
        
        console.log(keyCode);
    //------------------------------- keydown ----------------------------------
    window.addEventListener('keydown', (event) => {
        state = 'add';
        key = event.key;
        keyCode = event.code;
        keyLower = key.toLowerCase();

        event.preventDefault();
        
        simpleAndSpecial(state);
        switchKeyCode(state);
        (sessionStorage.hasOwnProperty('ctrl') && sessionStorage.hasOwnProperty('alt')) ? replaceLanguage() : undefined;         
    })                 
    
    //------------------------------- keyup ----------------------------------
    window.addEventListener('keyup', (event) => {
        state = 'remove';
        key = event.key;
        keyCode = event.code;
        keyLower = key.toLowerCase();

        simpleAndSpecial(state);
        switchKeyCode(state);
    });      
    //------------------------------- end listener ---------------------------------- 



    function replaceLanguage(){
        if ( sessionStorage.hasOwnProperty('lang')){
            (sessionStorage.hasOwnProperty('ctrl') && sessionStorage.hasOwnProperty('alt')) ? ((sessionStorage.getItem('lang') === 'Eng') ? sessionStorage.setItem('lang','Rus') : sessionStorage.setItem('lang','Eng')) :
            undefined;
            window.location.reload();
          
        }else{
            (sessionStorage.hasOwnProperty('ctrl') && sessionStorage.hasOwnProperty('alt')) ? ((localStorage.getItem('lang') === 'Eng') ? sessionStorage.setItem('lang','Rus') : sessionStorage.setItem('lang','Eng')) :
            undefined;
            window.location.reload();
                      
        }
                         
    }

    function switchKeyCode(state){
        
        switch (keyCode) {

            case 'ShiftLeft':
                keySide(keyLower, left, state);
                break;
            case 'ShiftRight':
                keySide(keyLower, right, state);
                break;
            case 'ControlLeft':
                keySide(keyLower, left, state);
                break;
            case 'ControlRight':
                keySide(keyLower, right, state);
                break;
            case 'AltLeft':
                keySide(keyLower, left, state);
                break;
            case 'AltRight':
                keySide(keyLower, right, state);
                break;
            case 'CapsLock':
                (state === 'add') ? conditionCapsLock() : undefined;                
                 break;
            case 'Tab':
                FunctionKey(state);
                break;
            case 'Backspace':
                FunctionKey(state);
                break;
            case 'Enter':
                FunctionKey(state);
                break;
            case 'Delete':
                FunctionKey(state);
                break;
            case 'ArrowUp':
                FunctionKey(state);
                break;
            case 'ArrowDown':
                FunctionKey(state);
                break;
            case 'ArrowLeft':
                FunctionKey(state);
                break;
            case 'ArrowRight':
                FunctionKey(state);
                break;
            case 'Space':
                FunctionKey(state);
                break;
            case 'MetaLeft':
                FunctionKey(state);
                break;          
        }
    };

    //  (де)активация нажатых клавиш - буквы и цифры
    function simpleAndSpecial(state){
        keyboardDOM.map((el) => {
            if(el.classList[1] === 'simple_key' || el.classList[1] === 'special'){
               
                if(el.innerText.toLowerCase() === '\\' || el.innerText.toLowerCase() === '/' || el.innerText.toLowerCase() === '\`'){
                    iter = false;    
                    replace()
                    return;
                }else 
                if (el.innerText.toLowerCase() === key.toLowerCase()) {
                    iter = false;                
                    state === 'add' ? (el.closest(`.keyboard${lang}`).classList.add('active'), (textAreaIn.value += el.innerText)) : 
                    el.closest(`.keyboard${lang}`).classList.remove('active');
                    return;
                }
            }
            
        });
        iter ? replace() : undefined;
    }    

    function replace (){
        
        (lang === 'Rus' ? keyboardEng : keyboardRus ).map((el, index)  => {
                    if(keyLower  ===  el[1]){
                        state === 'add' ? (keyboardDOM[index].closest(`.keyboard${lang}`).classList.add('active'),keyboardDOM[index].classList[0] = `${el[0]}`, 
                        (textAreaIn.value += keyboardDOM[index].innerText)) : 
                        keyboardDOM[index].closest(`.keyboard${lang}`).classList.remove('active');
                        return;
                    }
                })
            }
        
    //  (де)активация нажатых функциональных клавиш - alt,ctrl,shift
    function keySideActive(key, side, state) {
        switch (state) {
            case 'add':
                key === 'control' ? sessionStorage.setItem('ctrl', 'ctrl') : undefined;
                key === 'alt' ? sessionStorage.setItem('alt', 'alt') : undefined;
                document.querySelector(`.${side}_${key}`).classList.add('active');
                break;
            case 'remove':
                key === 'control' ? sessionStorage.removeItem('ctrl', 'ctrl') : undefined;
                key === 'alt' ? sessionStorage.removeItem('alt', 'alt') : undefined;
                document.querySelector(`.${side}_${key}`).classList.remove('active');
                break;
        }
    }

    // маленькие буквы и цифры убираем, показываем большие и на оборот
    function sizeLetter(state) {

        little_letter.map(item => {
            state === 'add' ? item.classList.add('letter_none') : item.classList.remove('letter_none');
        })
        
        big_letter.map(item => {
            state === 'remove' ? item.classList.add('letter_none') : item.classList.remove('letter_none');                
        })
        
    }

    //  активация нажатых функциональных клавиш 
    function FunctionKey(state) {
        keyboardDOM.map(el => {
            if( el.classList[1] !== 'simple_key' && el.classList[1] != 'special'){
                console.log(el.classList[1]);
                if (el.classList[2] === keyCode) {
                    state === 'add' ? el.closest(`.keyboard${lang}`).classList.add('active') : 
                    el.closest(`.keyboard${lang}`).classList.remove('active');
                  
                }
            }
        });
    }

    //  удаляем селектор lowerCase
    function lower (){
        keyboardDOM.map(el => {
            if (el.classList[1] === 'simple_key' ) {
                    el.closest(`.keyboard${lang}`).classList.remove('letter_lowercase');
            }
        })    
    }

    //  делаем маленькими только буквы
    function letterLower (){
        keyboardDOM.map(el => {
            if (el.classList[1] === 'simple_key') {
                    el.closest(`.keyboard${lang}`).classList.remove('letter_uppercase');
                    el.closest(`.keyboard${lang}`).classList.add('letter_lowercase');
            }
        })    
        textAreaIn.nextElementSibling.style.display = 'none';
        keyboard.style.marginTop = '100px';
    }

    //  делаем большими только буквы
    function letterUpper (){
        keyboardDOM.map(el => {
            if (el.classList[1] === 'simple_key' ) {
                    el.closest(`.keyboard${lang}`).classList.add('letter_uppercase');    
                    el.closest(`.keyboard${lang}`).classList.remove('letter_lowercase');                
            }
        })  
        textAreaIn.nextElementSibling.style.display = 'block';
        keyboard.style.marginTop = '6px';  
    }

    function keySide(keyLower,side, state){
        if( `${side}_shift` === `${side}_${keyLower}`){
            if((document.querySelector(`.left_${keyLower}`).classList[3] === 'active' || 
               document.querySelector(`.right_${keyLower}`).classList[3] === 'active') && state === 'add'){
                return;
            }
             
            keySideActive(keyLower, side, state);
           
            if (state === 'add'){
                capslock.classList[3] === 'active' ? (sizeLetter(state), letterLower()) : sizeLetter(state);
            }else{
                capslock.classList[3] === 'active' ? (sizeLetter(state), letterUpper()) : sizeLetter(state);
            }

        }else{
            keySideActive(keyLower, side, state);
        }
    }   

    function conditionCapsLock(){
        
        capslock.classList.toggle('active');
        
        if(localStorage.getItem('caps') === 'smallLetter'){
            localStorage.setItem('caps', 'bigLetter');
            letterUpper();
        }else {
            localStorage.getItem('caps') === 'bigLetter' ? (localStorage.setItem('caps', 'smallLetter'), letterLower(), lower()) : undefined;
        }
       
    }