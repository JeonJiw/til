// TIL 프로그래밍 기초 문제 풀기
//이해가 가지 않는다면 programming_prac.js 를 살펴볼 것

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

//4. 두 정수 사이의 합
//(3,5)를 입력하면 3+4+5 가 나와야 한다
function aolution(a,b) {
    var answer =0;
    let x = a;
    let y = b;
    if(x>y) [x,y] = [y,x];
    for(let i=x; i<=y; i++)
    answer += i;
    return answer
}

/* 다른 풀이법 */
function aolution(a,b){
    var answer =0;
    for (var i=Math.min(a,b); i<=Math.max(a,b); i++)
    answer+=i;
    return answer;
}

/* Math.min(a,b) : 최솟값 
   Math.max(a,b) : 최댓값*/

//5. 문자열을 정수로 바꾸기

a = "-1234"

function solution(a){
    return Number(a)
}
// -1234나옴


//6. 없는 숫자 더하기

//numbers = [1,2,3,4,6,7,8,0]

function solution(numbers) {
    return 45-numbers.reduce((sum, currentValue) => sum + currentValue);
}
/* .reduce((총합,현재값)=>총합+현재값)
1~9까지 총 합에서 배열에 있는 숫자들의 합을 뺀다.
총합은 0, 현재값은 1일 때 총합과 현재값을 더하면 1이 된다
다음번 총합은 1, 현재값은 2일 때 총합과 현재값을 더하면 3이 된다.
계속 반복하면 배열의 총 합을 구할 수 있고 전체 45에서 빼면 없는 숫자의 합이 나온다.
*/

/* 또 다른 풀이법 */
function solution(numbers) {
    let sum = 0;
    for(i=0; i<numbers.length; i++){
        sum += numbers[i]
    }
    return 45-sum;
}



//7. 음양 더하기
//ture이면 +, false이면 -로 부호 바뀌어서 나온 총 element들(배열)의 합 구하기

let absolutes = [4,7,12];
let sighs = [true,false,true];

function solution(absolutes, signs) {
    let answer = 0; 
    let num = [];   
    for(let i=0; i<absolutes.length; i++){ 
    if(signs[i] === true) {               
        num[i] = absolutes[i]*1   
    }else {
        num[i] = absolutes[i]*(-1)       
    }                                     
    }   for(j=0; j<num.length; j++){      
        answer += num[j]                  
    }                                     
    return answer;
} 

/* 새롭게 배운 것 
부호를 바꿀 때 *(-1)을 사용할 수 있다.*/

//8. 평균 구하기
//Array의 elements들의 평균을 구한다.

let arr = [1,2,3,4];

function solution(arr) {
    var answer = 0;
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i]
    } answer = sum/arr.length
    return answer;
}

/* 배열의 요소들의 합을 구할 때는 길이로 나눈다 */

//9. 핸드폰 번호 가리기
//맨 뒤4자리 빼고 다 *로 바꾼다

let phone_number = "01062964433";

function solution(phone_number) {
    var answer = '';
    answer = phone_number.slice(0,-4).replace(/[0-9]/gi,'*')+phone_number.slice(-4)                                          
    return answer;
}

/* 모든 숫자를 나타내는 정규식 : /[0-9]gi
.replace(바꿔지는것,바꿀것) 문자열은 ''안에 쓰기 
.slice(시작,끝)으로 덩어리로 자르기
.slice(-4)뒤에서 네번째부터 끝까지*/

//10. 행렬의 덧셈
//두개의 배열을 넣으면 각 배열의 요소들의 합을 구한다.
/* arr1	          arr2	             return
[[1,2],[2,3]]	[[3,4],[5,6]]	 [[4,6],[7,9]]
  [[1],[2]]	      [[3],[4]]	        [[4],[6]] */

let arr1 = [[1,2],[2,3]];
let arr2 = [[3,4],[5,6]];

function solution(arr1,arr2) {
    var answer = [[]];                         //answer는 arr1,2처럼 [[]] 이중으로 배열됨
    for(let i = 0; i < arr1.length; i++){      //answer[0]와 answer[1]의 값을 구함
        answer[i] = [];                        
        for(let j = 0; j <arr1[i].length; j++){//answer[0][0]과 answer[0][1]을 구해야 한다
             answer[i][j] = arr1[i][j]+arr2[i][j];//arr1[j] 여기서 실수해서 오래걸림.
        }                                         //배열의 길이를 나타내야 하는데 arr.length는 arr[0].length와 다르기 때문에 오류가 발생함
        }
    }

   /* 여기서 모르는 Method는 없었지만, 배열의 구조를 이해하는데 시간이 오래 걸렸다.
   배열이 이중으로 되어있어서 첫번째와 두번째 배열의 요소들의 합을 각각의 for문으로 구해야 했다.
   아직도 다시 보면 이해하기 쉽지 않다...이거 하루종일 했다. 나머지 5문제 3시간도 안걸렷는데.... 
   이것만 5시간 넘게 한 것 같다... */ 


//11. x만큼 간격이 있는 n개의 숫자
/* //문제이해를 돕기위한 입출력 예
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8] */

function solution(x, n) {
    var answer = [];
    for(i=0; i<n; i++){
        answer[i] = x*(i+1);
    }
    return answer;
}

//push를 이용한 또다른 풀이법
function solution(x, n) {
    for (var i=0, arr=[]; i<n; i++) arr.push(x + x*i);
    return arr;
}

/* 간단한 수학식이었고,
새롭게 알게 된 것은 .push를 사용해서 하는 방법도 있다는 것이다.
배열.push(넣을 값과 i(반복문))를 사용해서 할 수도 있다. */

//12. 부족한 금액 계산하기

function solution(price, money, count) {
    let sum = 0;
    for(i=1; i<=count; i++){
        sum += price*i;
    }   
   if (money >= sum) return 0; 

    return sum - money;
}

/* 간단한 수학식이었고, if 문을 더 간결하게 쓸 수 있는 방법을 생각해보았다.
return을 쓸 때에도 정해진 형식이 아닌 위처럼 쓸 수 있다는 것도 알게 되었다. */