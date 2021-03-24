//끝말잇기 게임
let word = "다이어리";

//조건문 word 와 answer이 같으면 진행, 다르면 게임 끝
while(true) {
    let answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert("정답입니다!")
        word = answer;
    } else {
        alert("틀렸습니다. 게임을 종료합니다.")
        break;
    }
}