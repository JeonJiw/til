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


/* replit에서 작성한 부분 - 입력값과 함수를 작성해서 콘솔로 함수에 입력값을 줬을때 나오게 하는 부분*/
let input1 = 5;
let input2 = 3;

function stars(a,b) {
let star = "";
for(let i = 0; i <b; i++){
  let k = "*".repeat(a);
  star = star + "\n" +k;
}
return star;
}
console.log(stars(input1,input2));
//함수는 리턴을 해줘야 값을 내놓는다....그리고 리턴은 한번만 한다

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
/* replit에서 작성한 부분 - 입력값과 함수를 작성해서 콘솔로 함수에 입력값을 줬을때 나오게 하는 부분*/
function solution(num) {
    var answer = '';
    if(num %2==0){
        answer = "Even"
    }else {
        answer = "Odd"
    }
    return answer;
}
console.log(solution(2));

//3. 가운데 글자 가져오기

function solution(s) {
    var answer = '';
    
    if (s.length % 2 == 0) {  //입력값(단어)의 문자수가 짝수이면
        answer = s[s.length / 2 - 1] + s[s.length / 2]; //입력값의 속성값[(문자수)를 2로 나눈 값에서 1을 뺀 자리의 문자 + 2로 나눈 값의 자리의 문자] => 왜냐하면 s[0]의 경우 첫번째 문자가 나오기 때문
    }else { //홀수의 경우
        answer = s[Math.floor(s.length/2)]; //만약 5자리 문자를 2로 나누면 2.5이다. 우리는 세번째, 즉 s[2]의 문자가 필요하기 때문에 소수점을 버려야 한다.
    }                                          //새롭게 배운 것 : Math.floor(소수점있는 숫자) => 앞의 자리만 나타낸다
    return answer;
}


/* replit에서 작성한 부분 - 입력값과 함수를 작성해서 콘솔로 함수에 입력값을 줬을때 나오게 하는 부분*/
let s = "abcde";

function solution() {
    var answer = '';
    if(s.length%2 == 0){
      answer = s[s.length/2-1] + s[s.length/2];
    }else{
      answer = s[Math.floor(s.length/2)]
    }
    return answer;
}
console.log(solution(s));



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
/* // 문자열을 정수로 바꾸는 다양한 방법
    // string 타입으로된 숫자를 Number 타입으로 바꾸는 방법;
    1. const answer = Number(s); Number 함수 사용
    2. const answer = ParseInt(s); ParseInt 함수 사용
    3. const answer = s/1; 나누기
    4. const answer = s*1; 곱하기

 */
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
//reduce를 for반복문으로 써보기
let currentValue = [];
let sum = 0;
for (let i = 0; i <currentValue.length; i++){
    sum = sum + currentValue;
}

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
let signs = [true,false,true];

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

/* 배열의 요소들의 평균을 구할 때는 길이로 나눈다 */

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



//13. 2016년
  //정답
  function solution(a, b) {
    var answer = '';
    let date = new Date(2016, a-1, b+1) //월은 0부터 시작
    let day = date.getDay(); //.getDay()에서는 일-토 : 0-6
    let all_day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    console.log(all_day[day-1]);
    return all_day[day-1];
}

//new Date()
let today = new Date()
let birthday = new Date('December 17, 1995 03:24:00')
let birthday = new Date('1995-12-17T03:24:00')
let birthday = new Date(1995, 11, 17)            // 월은 0부터 시작해서 12월을 나타내고 싶으면 11을 사용
let birthday = new Date(1995, 11, 17, 3, 24, 0)


//14. 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
    var answer = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
    } 
} 
    answer.sort((a,b)=>a-b);  //.sort() 간단한 함수는 이렇게 쓴다
    if (answer.length === 0) {  //오름차순으로 정리하고 싶을 때는 a-b로 쓰고, 내림차순으로 정렬하고 싶을 경우에는 b-a을 쓴다.
        answer.push(-1);        //answer의 length가 0인 경우는 나누어지는 수가 없는 것이기 때문에 -1로 나오게 한다.
    }return answer;
} 

//.sort()
function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  

//15. 내적 
function solution(a, b) {
    let answer = 0;
    for(let i=0; i<a.length; i++){
        answer += a[i]*b[i] //+= 인것을 기억할 것!!
    }
    //a[i]*b[i]의 합
    return answer;
}



//16. 문자열 내 p와 y의 개수
//정답1
function solution(s){
    let change = s.toLowerCase(); //소문자로 바꾸기
    console.log(change);
    let check_p = change.match(/p/g).length; //p와 일치하는 개수
    console.log(check_p);
    let check_y = change.match(/y/g).length; //y와 일치하는 개수
    console.log(check_y);
    
    if (check_p == check_y) {
        return true;
    } else {
        return false;
    }
}

//.toLowerCase(바꿀거)
//찾아질 곳.match(찾을 것) => [찾아진 것이 배열로 나온다.]
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g; //정규식을 정의해주었고
const found = paragraph.match(regex); //정규식에 매칭되는 것(대문자) 찾기

console.log(found);
// expected output: Array ["T", "I"]

//정답2
function solution(s){
    let change = s.toLowerCase(); //소문자로 바꾸기
//    console.log(change);
    let check_p = change.split("p").length; //p를 기준으로 문자열을 나눠주고 길이 저장
    let check_y = change.split("y").length; //y를 기준으로 문자열을 나눠주고 길이 저장
    
    return check_p == check_y ? true : false;
}
//check_p == check_y 라면, true(value1)
//check_p == check_y 아니라면, false(value2)

}

//17. 문자열 다루기 기본
//정답
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str); 
  }                                
   
  console.log(onlyNumbers('1234')); // 👉️ true
  console.log(onlyNumbers('123hello123')); // 👉️ false
  console.log(onlyNumbers('123.5')); // 👉️ false

  //정규식.test(string) string에 정규식 포함 되어있으면 true, 아니면 false
  //정규식만 써야한다.


//18. 서울에서 김서방 찾기

//정답
function solution(seoul) {
    var answer = '';
    let find = seoul.indexOf('Kim');
    answer = '김서방은 ' + find + '에 있다'
    return answer;

//method : indexOf(찾으려는 것)

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); //찾으려는 element만을 입력하면
// expected output: 1  //호출한 sring 객체에서 주어진 값과 일치하는 첫 인덱스를 반환하고 없으면 -1을 반환한다

// start from index 2 
console.log(beasts.indexOf('bison', 2));  //찾으려는 element와 시작하는 위치를 입력하면
// expected output: 4 // 2번재인 'camel'이후에 있는 4번째 자리에 있는'bison'이 처음 일치해서 result = 4

console.log(beasts.indexOf('giraffe')); //'giraffe'는 없으니까 -1
// expected output: -1


// i를 앞에다가 두고 쓸 수도 있다.
function solution(seoul) {
    var answer = '';
    for(var i = 0; i<seoul.length; i++) {
        if(seoul[i] == "Kim") {
            answer = i;
            break; // i가 발견되었다면 break하고 해당 인덱스를 return
        }
    }
    return '김서방은 '+answer+'에 있다';


//19. 수박수박수

//정답
function solution(n) {
    var answer = '';
    for(let i = 0; i<n; i++){
        if(i%2===0){
            answer += "수";  //추가할 떼는 그냥 추가할 것만 쓰기. 괜히 i번째 생각하다가 망했네
        }else{              //"수"랑 "박"을 따로 짝 홀수 인덱스 값으로 넣어줄 생각을 하지 말고,
            answer += "박"; // 그냥 "수"랑 "박"을 번갈아가면서 넣어주되, for문으로 돌려야 하니까
        }                  //i를 인덱스값이라고 생각하고 n-1번째까지 돌려주면 된다. 
    }
    return answer;
}

// 리턴 배열의 인덱스에 따라 수 또는 박을 넣어볼까...?
//return.length는 n, return의 마지막 인덱스는 n-1
//["0(1)(2)...(n-1)"] return[i] i가 짝수이면 수 홀수이면 박

//20. 완주하지 못한 선수
//정답
function solution(participant, completion) {
    const total = participant.length;
    var answer = '';
    
    let a = participant.sort(); 
    let b = completion.sort();
    console.log(a);
    console.log(b);
    for(let i=0; i<total; i++){
        if(participant[i] !== completion[i]){ 
            answer = participant[i]; 
            return answer;
        }
    }
}

//method
//.sort()
//()안에 아무것도 넣지 않으면 알파벳 순으로 정렬이 된다.
//!== if not



//실패한 나의 풀이

//일단 완료자의 요소를 참가자의 요쇼와 비교해 있으면 참가자에서 그 요소를 제거하는 것으로 생각하고 했는데
//일단 그 일치하는 요소들의 인덱스는 구햇으나 하나씩 지울때마다 인덱스 값이 바뀌어서 어떻게 해야할지...모르겠다....
function solution(participant, completion) {
    var answer = '';
    let a = participant;
    for(let i = 0; i <completion.length; i++){
        let check = participant.includes(completion[i])
        if(check == true){
           let name = participant.indexOf(completion[i])
            for(let j = 0; j <name.length; j++){
           let b = name.sort((a,b)=>a-b);
                a.splice([b[j]]);
            } console.log(name);
           }
    }
    return answer;
}


//결론적으로 너무 복잡하고 헷갈리는데 그래도 이 과정을 생각하면서 알고리즘 문제를 푸는데 생각하는 연습은 된 것 같다.


//21. 이상한 문자 만들기
//정답

let s = "try hello world";

function solution(s) {
    var answer = [];
    let word = s.split(' '); 
    for(let i=0; i<word.length; i++){ /
        let sum = '';
        for(let j=0; j<word[i].length; j++){ 
           if(j%2==0){
             sum += word[i][j].toUpperCase();
           }else{
             sum += word[i][j].toLowerCase();
           }
        }                     
    let a = answer.push(sum) 
    console.log(sum)         
    //    console.log(sum)   result => TrY HeLlO WoRlD
    //    console.log(answer)  result =>[  'TrY', 'HeLlO', 'WoRlD' ]
}
    return answer.join(' '); 

//*주의할점*
//콘솔을 찍는 것은 그냥 결과만 뱉는 것이 아닌 실제로 실행을 하는 것이기 때문에,
//이로 인해서 내가 원하는 값에 영향을 끼칠 수 있다.
//따라서 콘솔을 찍어주고 싶을 경우에는 알고싶은 것을 변수로 지정하고 그 변수를 콘솔에 찍어주는 것이 좋다.


//.join('중간에 넣을 것')
//(합쳐진 것이 들어갈 곳).join('중간에 넣을 것')

//22. 자릿수 더하기
    //정답
    function solution(n){
        var answer = 0;
        let N = n.toString();
        
        for(let i = 0; i <N.length; i++){
         answer += Number(N[i])  
        }
        return answer;
    }
//23. 자연수 뒤집기
//정답

function solution(n) {
    var answer = [];
    let N = n.toString()
    for (var i = N.length - 1; i >= 0; i--) { //for문을 쓰는 새로운 방식
        answer.push(Number(N[i]));
    }
    return answer;
}

//시간이 있다면 map과 reverse를 쓰는 것도 찾아보자

//indexOf(element) => index 값/없으면 -1
function solution(n){
    let answer = [];
    let N = n.toString();//"12345"
    for(let i = 0; i < N.length; i++){
      let index1 = N.indexOf(i)//N.indexOf(0)="1" //N.length = 5
      let index2 = N.indexOf(N.length-(i+1))//N.indexOf(5-(0+1))=N.indexOf(4)="5"
      if(i+(N.length-(i+1))== N.length-1){ //0+(5-(0+1)) == 5-1
        N[i] = N[N.length-i],
        N[N.length-i] = N[i]
      }
    }
  }

//24. 내림차순으로 배치하기
/* n	return
118372	873211 */
//정답

    function solution(n) {
        var answer = 0;
        let arr = n.toString().split('');
    console.log(arr)//[ '1', '1', '8', '3', '7', '2' ]
    let sort = arr.sort((a,b) => b-a);
    //[ '8', '7', '3', '2', '1', '1' ]  
        console.log(sort.join('')) //"873211"
        answer = Number(sort.join(''));
        return answer;
    }

//25. 정수 제곱근 판별
//정답
function solution(n) {
    var answer = 0;
    if(Math.sqrt(n) % 1 == 0 ){ //n의 제곱근이 양의 정수라면 1로 나누었을 때 나머지 0
        return (Math.sqrt(n)+1)*(Math.sqrt(n)+1)
    }else{ //n의 제곱근이 양의 정수가 아니라면(예를들어 루트3=1.***인 경우 1로 나누면 나머지가 0이 아님)
       return -1
    }
    }

//Math.sqrt(n) = n의 제곱근
//MAth.pow(값,n) = 값의 n제곱     

//26. 제일 작은 수 제거하기

//정답
/* arr	     return
[4,3,2,1]	[4,3,2]
[10]	    [-1]
 */
function solution(arr) {
    var answer = [];
    if(arr.length == 1){
        return [-1]
    }
    else{
   let min = Math.min(...arr)
   arr.splice(arr.indexOf(min),1) //arr.indexOf(min) arr에서 제일 작은 수의 인덱스값
        return arr
        }
}
    //console.log(sort.pop()) 
    //마지막 지우고 배열 출력하면 마지막 element가 지워진 배열이 나옴 
//sort를 쓰면 내림차순으로 정렬이 되기때문에 원래 배열인 arr의 배열에서 최솟값만 제거한 배열의 위치가 달라짐

//.splice(시작index,지울 개수)

var list = ["bar", "baz", "foo", "qux"];
    
    list.splice(0, 2); 
    // Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].


//틀린 방법
function solution(arr) {
    var answer = [];
    if(arr.length == 1){
        return [-1]
    }
    else{
    let sort = arr.sort((a,b) => b-a);
    sort.pop();
    return sort;
        }
}
//console.log(sort.pop()) 
//마지막 지우고 배열 출력하면 마지막 element가 지워진 배열이 나옴 
    
//sort를 쓰면 내림차순으로 정렬이 되기때문에 원래 배열인 arr의 배열에서 최솟값만 제거한 배열의 위치가 달라짐


//27. 콜라츠 추측
/* 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다.
1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
예를 들어, 
주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 
위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 
단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
 */
//정답
function solution(num) {
    var answer = 0;
    for(let i = 0; i <500; i++){
         if(num%2==0){
        num = num/2; //어차피 계속 반복해야 하기 때문에 새로운 변수를 넣어줄 필요가 없다
    }
        else if(num==1){ //else if를 통해 어러가지의 경우의 수를 넣어줄 수 있다.
        return i
    }
        else if(num%2==1){
        num = (num*3)+1
    }
}
    return -1;
    }

//28. 하샤드 수
//정답

let x = 10;
function solution(x) {
    var answer = '';
    let str = x.toString(); //[10]
    let sum = 0;
    for(let i = 0; i<str.length; i++){
        sum += Number(str[i])
    } //console.log(sum)
    if(x%sum == 0){
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}

//스트링으로 만들어서 각 인덱스 더해주고
//더한 값 sum으로 원래 값 x를 나눠주기 >> x%sum==0