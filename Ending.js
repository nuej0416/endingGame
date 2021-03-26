//끝말잇기 게임
let word = document.querySelector('p');
let form = document.querySelector('form');
let input = document.querySelector('input');
let button = document.querySelector('button');
let result = document.querySelectorAll('div');
result1 = result[result.length-1];

word.textContent = "게임만들기";

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (word.textContent[word.textContent.length - 1] === input.value[0]) {
        result1.textContent = "정답입니다!";
        word.textContent = input.value;
        input.value = '';
        input.focus();
    } else {
        result1.textContent = "땡!";
        input.value = '';
        input.focus();
    }
});


//조건문 word 와 answer이 같으면 진행, 다르면 게임 끝
// while(true) {
//     let answer = prompt(word);
//     if (word[word.length - 1] === answer[0]) {
//         alert("정답입니다!")
//         word = answer;
//     } else {
//         alert("틀렸습니다. 게임을 종료합니다.")
//         break;
//     }
// }