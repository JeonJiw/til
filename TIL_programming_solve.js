// TIL 프로그래밍 기초 문제 풀기

//1. 직사각형 별찍기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const row = "*".repeat(a) //가로 반복
    for(let i = 0; i<b; i++){ //세로 반복
        console.log(row);
    }
    
}); 
// 입력 5,3
// 출력  *****
//      *****
//      *****
//      *****
//      *****


//2. 짝수와 홀수

function solution(num) {
    var answer = '';
    if(num %2==0){
        answer = "Even"
    }else {
        answer = "Odd"
    }
    return answer;
}

//3. 가운데 글지 가져오기

function solution(s) {
    var answer = '';
    
    if (s.length % 2 == 0) {  //입력값(단어)의 문자수가 짝수이면
        answer = s[s.length / 2 - 1] + s[s.length / 2]; //입력값의 속성값[(문자수)를 2로 나눈 값에서 1을 뺀 자리의 문자 + 2로 나눈 값의 자리의 문자] => 왜냐하면 s[0]의 경우 첫번째 문자가 나오기 때문
    }else { //홀수의 경우
        answer = s[Math.floor(s.length/2)]; //만약 5자리 문자를 2로 나누면 2.5이다. 우리는 세번째, 즉 s[2]의 문자가 필요하기 때문에 소수점을 버려야 한다.
    }                                          //새롭게 배운 것 : Math.floor(소수점있는 숫자) => 앞의 자리만 나타낸다
    return answer;
}

