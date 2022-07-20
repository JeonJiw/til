console.log("Hello World");

/* 행렬의 덧셈*/

    let arr1 = [[1,2],[2,3]];
    let arr2 = [[3,4],[5,6]];

    function solution(arr1,arr2) {
         var answer = [[]];                          /* answer은 arr1,arr2의 [i]번째 값의 합의 나열로 이루어진 Array이다. [[i번째합],[i+1번째합], ...] 이런식으로
                                                        어차피 for문으로 돌려주면서 각 i번째의 합을 나열할 것이기 때문에 위에 설명한 실수한 부분처럼 생각하지 않아도 된다. */
        for(let i = 0; i < arr1.length; i++){
        answer[i] = [];                             /*  answer은 [[0번째합],[1번째합]] 인데, answer[0]은 [0번째합]이다. 그렇기 떼문에 answer[i] = []이다.
                                                        내가 구하고 싶은 answer은 [[1+3,2+4],[2+5,3+6]]이다.
                                                        answer[0]은 Array answer의 0번째 배열 [1+3,2+4], answer[1]은 1번째 배열[2+5,3+6]이다.
                                                        따라서 answer[i]는 [[arr1[i]+arr2[i]]의 형식으로 for문으로 인해 계속 돌아가면서 i 다음번째의 값을 나열할 것이다.
                                                        하지만 여기서 다시 arr1[i]와 arr2[i]의 값을 구해야 하기 때문에 for문을 한 번 더 적용해줘야 한다.     */                 
        for(let j = 0; j <arr1[i].length; j++){
             answer[i][j] = arr1[i][j]+arr2[i][j];
        }
        }
    }
    //도대체 왜 console.log(answer);이 안나올까........

    function solution(absolutes, signs) {
        var answer = 123456789;
        return answer;
    }

/* 음양 더하기 */

/* 문제 접근
    //Array absolutes의 elements는 signs 안의 같은 위치에 있는 elements에 따라 부호가 바뀜 
    //if문으로 true일 때 +로, false일 때 -로 바꿔주기
    //ture이면 *(+1), false이면 *(-1)
    //바꿔준 값들을 배열로 나열하고 (변수지정이 필요할 듯) 배열의 합을 구한다. */

let absolutes = [4,7,12];
let sighs = [true,false,true];

function solution(absolutes, signs) {
    let answer = 0; //더해진 값
    let num = [];   //더할 숫자들이 있는 배열
    for(let i=0; i<absolutes.length; i++){ //부호 바꿔주기 위해 먼저 signs의 element 요소 확인
    if(signs[i] === true) {               //true이면 *1
        num[i] = absolutes[i]*1   
    }else {
        num[i] = absolutes[i]*(-1)        //false이면 *(-1)
    }                                     //num = [] Array로 부호가 정해진 숫자들이 나열되어 있다.
    }   for(j=0; j<num.length; j++){      //num의 elements들을 돌아가면서 더한다
        answer += num[j]                  //answer의 값은 num[0]+num[1]+...+num[j-1]이기 때문에
    }                                     //answer = answer + num[j] 로 정의해준다.
    return answer;
} 

    //Array absolutes의 elements는 signs 안의 같은 위치에 있는 elements에 따라 부호가 바뀜 
    //if문으로 true일 때 +로, false일 때 -로 바꿔주기
    //ture이면 *(+1), false이면 *(-1)
    //바꿔준 값들을 배열로 나열하고 (변수지정이 필요할 듯) 배열의 합을 구한다.

/* 평균구하기 
객 Array의 elements의 합을 구한후 Array의 길이로 나눈다.
 */
let arr = [1,2,3,4];

function solution(arr) {
    var answer = 0;
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i]
    } answer = sum/arr.length
    return answer;
}

/* 핸드폰 번호 가리기

문제접근
.slice(0,-4)는 배열을 나누는 method로 0번째부터 뒤에서 4번째가 한묶음이 된다.
*표시 하는 정규식 필요
숫자를 문자로 치환하는 method 필요
 */
let phone_number = "01062964433";

function solution(phone_number) {
    var answer = '';
    answer = phone_number.slice(0,-4).replace(/[0-9]/gi,'*')+phone_number.slice(-4)                                          
    return answer;
}

//모든 숫자를 나타내는 정규식 : /[0-9]gi
//.replace(바꿔지는것,바꿀것) 문자열은 ''안에 쓰기


/* x만큼 간격이 있는 n개의 숫자 */
/* 문제접근
x가 x만큼 커지고 n번 반복 
배열을 만들어야 하는군요...
그러면 배열을 answer = [] 이라고 두고
0번째는 x*1, 1번째는 x*2 ... n-1번째는 x*(n) 이라고 하면 되겠군
*/
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

/*부족한 금액 계산하기  */
/* 문제접근
[가격,돈,횟수]의 Array를 입력하면 얼마가 부족한지 알려주는 함수. 안부족하면 0 출력
가격은 횟수만큼 상승한다. 1번째는 가격*1, 2번째는 가격*2 이렇게..
[3,20,4]일 경우,
총 가격은 = 3+6+9+12 =30이 되고, 10이 모자르기 때문에 결과는 10.
가격이 p인 놀이기구를 n번을 탈 경우, 총 가격은 = p*1 + p*2 + ...p*n
돈 - 총 가격 >=0 => 0을 출력하고,
돈 - 총 가격 <0 =>  총 가격 - 돈 의 값을 출력한다.
*/


function solution(price, money, count) {
    let sum = 0;
    for(i=1; i<=count; i++){
        sum += price*i;
    } 
    
   if (money >= sum) return 0; 

    return sum - money;
}







//이상한 문자 만들기

const solution = (s) => {
    // s= "try hello world"라고 가정을 해보겠습니다.
    // string 타입의 값을 분리할 때 split 메서드를 사용합니다.
    // split된 값은 배열안데 각 요소가 됩니다.
    // words = ['try', 'hello', 'world'];
    const words = s.split(' ');

    // words 배열의 각 요소 값을 변경하기 위해서 map함수를 사용합니다.
    // newWords는 map함수에서 return 값을 요소로 할당 받습니다.
    const newWords = words.map((w) => {
        // words 배열의 각 요소(w)의 변형된 값을 저장하기위해 temp를 let으로 선언합니다.
        let temp = ""
        // w의 짝수번째 char은 대문자로 홀수번째 char은 소문자로 변형합니다.
        for(let i = 0; i < w.length; i++){
            if(i%2 === 0) temp += w[i].toUpperCase();
            if(i%2 !== 0) temp += w[i].toLowerCase();
        }

        return temp;
    })

    // 마지막으로 변형된 단어를 요소로 가지는 배열을 string으로 변환하기 위해서 join 메서드를 사용합니다.
    // 각단어는 한칸씩 띄어져있어야되기 때문에 join 파라미터안에 한칸 띈 string 값을 넣어줍니다.
    const answer = newWords.join(' ')

   return answer;
}





    //모의고사

function solution(answers) {
    //answer = [1,2,3,4,5]
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    const results = [0,0,0];

    for(ler i = 0; i < answers.length; i++){
        if(one[i%5] === answers[i]) results[0] ++;
        //5개마다 반복되니까 나머지가 0이면 다시 0번째, results[0]은 results Array의 0번째 자리에 들어가야 하니까
        //중괄호를 안쓰더라도 true이면 다음 함수를 실행한다.
        if(one[i%8] === answers[i]) results[1] ++;
        //8개마다 반복되니까 나머지가 0이면 다시 0번째 //
        if(one[i%10] === answers[i]) results[2] ++;
        //10개마다 반복되니까 나머지가 0이면 다시 0번째
    }
    const MaxNum = Math.max(...results);
    const answer =[]; 
    //results Array 안의 최댓값을 구해서 누가 가장 문제를 많이 맞췄는지 구해주기
    //Math.max(1,2)에서는 Array를 넣을 수 없기 때문에 
    //...array = 대괄호를 제거하고 숫자만 ,로 구분해서 나타내주는 것.
    
    for(let i = 0; i < results.length' i++){
        if(results[i]) === maxNum) answer.push(i+1)
    } //
    return answer

    // === 답의 type까지 맞춰줘야 하지만, == 는 문자열과 숫자여도 괜찮음.
    //특별한 이유 없으면 ===로 쓰기



 *//* let A = [1,2];
let B = [3,4];

function sum(A, B) {
    var answer = [];
    for (let i = 0; i <A.length; i++){
            let a = A[i]
            let b = B[i]
            answer = a + b;
    }
    console.log(answer);
} 


// 모의고사

function solution(answers) {
    // 각 수포자의 패턴을 변수로 선언하고 할당시킵니다.
    // one = 1번 수포자, two = 2번 수포자, three = 3번 수포자
    // results는 각 수포자들이 몇개의 문제를 맞췄는지를 저장합니다.
    // results[0] = 1번 수포자 맞춘 개수
    // results[1] = 2번 수포자 맞춘 개수
    // results[2] = 3번 수포자 맞춘 개수
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    const results = [0,0,0];

    // 몇개의 문제를 맞췄는지 알기위해서
    // answers의 각 요소들을 one, two, three의 요소들과 비교합니다.
    // 값이 같을때마다 results 요소에 1씩 더합니다.
    for(let i = 0; i < answers.length; i++){
        if(one[i%5] === answers[i]) results[0]++;
        if(two[i%8] === answers[i]) results[1]++;
        if(three[i%10] === answers[i]) results[2]++;
    }

    // 제일 많이 맞춘 개수를 알기위해서 result 배열에서 제일 큰 값을 가지고 있는 요소를
    // maxNum 변수의 값으로 할당시킵니다.
    // 최대값을 구할때는 Math.max() 메서드를 사용합니다.
    // 메서드 파라미터에는 숫자를 넣어야되기 때문에
    // results 배열을 spread 연산자를 사용해서 숫자 타입으로 파라미터에 넣어줍니다.
    const maxNum = Math.max(...results);
    const answer = [];

    // 누가 제일 많이 맞췄는지 알기위해서 results의 요소들을 maxNum과 비교해서
    // 같을 경우에 i+1(몇번째 수포자인지)을 answer에 push메서드를 사용해서 넣어줍니다.
    // 이미 오름차순으로 비교하기때문에 오름차순으로 정렬할 필요가없습니다.
    for(let i = 0; i < results.length; i++){
        if(results[i] === maxNum) answer.push(i+1);
    }

    return answer;
}


/* 16. 문자열 내 p와 y의 개수 */

//string은 p,P,y,Y로 이루어져 있다.
//대,소문자 구분없이 각 p와 y의 개수를 확인해서 개수가 같으면 true, 다르면 false를 나타낸다.

//문제 분석하기
//p의 개수 숫자로 나타내기
//y의 개수 숫자로 나타내기
//두개의 숫자를 비교하기


//chacrater가 일치하는 method를 찾기 위한 것....
//Method1
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char) //소문자 a-z 대문자 A-Z 와 char를 매칭해서 일치하면 true 아니면 false
  }
/*   
console.log(isCharacterALetter("t")) // true
console.log(isCharacterALetter("W")) // true
console.log(isCharacterALetter("5")) // false
console.log(isCharacterALetter("β")) // false */

//대소문자
const str = 'Hello world';
const char = 'L';

// 👇️ true
console.log(str.toLowerCase().includes(char.toLowerCase()));


//Method2
// Not Supported in IE 6-11
const str = 'Hello world';
const char = 'e';

console.log(str.includes(char)); // 👉️ true

if (str.includes(char)) {
  // 👉️ string contains the character
}

//내가 시도한 방법 - 작동이 안된다....ㅠㅠ
function solution16(s){
    let answer = "";
    let count_p = 0;
    let count_y = 0;
    for(i=0; i <s.length; i++){
        if(s.charAt(i) == "p","P"){
            count_p += 1;
            count_y += 1;
        }
    }
    if(count_p==count_y){
        answer = ture;
    } else {
    } answer = false;
    return answer;
}

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

// .match
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g; //정규식
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

/* 서울에서 김서방 찾기 */

//정답
function solution(seoul) {
    var answer = '';
    let find = seoul.indexOf('Kim');
    answer = '김서방은 ' + find + '에 있다'
    return answer;
}

//.indexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1


//아래는 배열안에서 요소를 찾는 것까지는 했으나 그 요소가 원래 있던 배열에서 몇번째 있었는지는 구현하지 못함
function solution(seoul) {
    var answer = '';
    let find = seoul.filter(element => element === 'Kim');
    let num = find;//filter은 어느 숫자 이상, 길이 이상의 element를 모두 찾을 때 쓰는 것이 좋을 것 같다.
console.log(num);
    return answer;
}

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
}

/* 문자열 다루기 기본 */
//정답
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
  
  console.log(onlyNumbers('1234')); // 👉️ true
  console.log(onlyNumbers('123hello123')); // 👉️ false
  console.log(onlyNumbers('123.5')); // 👉️ false

  //정규식.test(string) string에 정규식 포함 되어있으면 true, 아니면 false



//내적
  function solution(a, b) {
    let answer = 0;
    for(let i=0; i<a.length; i++){
        answer += a[i]*b[i] //+= 인것을 기억할 것!!
    }
    //a[i]*b[i]의 합
    return answer;
}

//나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
    var answer = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i]);
    } 
} 
    answer.sort((a,b)=>a-b);  //.sort() 간단한 함수는 이렇게 쓴다
    if (answer.length === 0) {  //a-b가 음수이면 -1, 양수이면 +1, 0이면 0이 나오고, 내림차순으로 정렬하고 싶을 경우네는 a-b대신에 b-a을 쓰면 된다
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
  

  //2016년

  //정답
  function solution(a, b) {
    var answer = '';
    let date = new Date(2016, a-1, b+1) //월은 0부터 시작
    let day = date.getDay(); //.getDay()에서는 일-토 : 0-6
    let all_day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    console.log(all_day[day-1]);
    return all_day[day-1];
}

//이상한 문자 만들기

//정답
let s = "try hello world";

function solution(s) {
    var answer = [];
    let word = s.split(' '); //s를 띄어쓰기를 기준으로 나눠주면 [ 'try', 'hello', 'world' ] 나옴
    for(let i=0; i<word.length; i++){ //word의 0번째인 'try'부터 한번씩 가져온다
        let sum = ''; // word의 0번째부터 가져와서 대문자로 바꿔줄 것을 sum이라는 변수로 정의
        for(let j=0; j<word[i].length; j++){ //word의 0번째인 try에서 0번째,2번째인 t,y를 대문자로 바꿔주는 반복문
           if(j%2==0){
             sum += word[i][j].toUpperCase();
           }else{
             sum += word[i][j].toLowerCase();
           }
        }                     
    let a = answer.push(sum) // 여기서 console.log(answer.push(sum))을 찍으면 작동이 안된다. 왜냐하면 콘솔을 찍는것은 결과만 뱉는것이 아닌 실제로 실행을 하기 때문에
    console.log(sum)         // 콘솔로 찍어주고 또 실행하는 코드를 적어주면 2번 반복하게 된다. 이럴때는 콘솔로 찍고 싶은 값을 변수로 정의해주고 콘솔로 찍는 것이 좋다.
    //    console.log(sum)   result => TrY HeLlO WoRlD
    //    console.log(answer)  result =>[  'TrY', 'HeLlO', 'WoRlD' ]
}
    return answer.join(' '); //answer의 각 element들을 ' ' 를 넣어서 합쳐준다.
}
//.join('중간에 넣을 것')
//합쳐줄 것.join('중간에 넣을 것')


//다른사람 답

//띄어쓰기를 기준으로 나누기
//인덱스값 2로 나눠서 if 문으로 대소문자 바꿔주기
   // console.log(word);//[ 'try', 'hello', 'world' ]
   // console.log(word[0][0]); // try

   function solution(s) {
    let answer = [];
// 먼저 s의 값을 공백을 기준으로 쪼갠다
let result  = s.split(" ")

// 그리고 i가 0부터 result의 길이만큼 돌게 되는데
// 이 때 sum이라는 변수를 새로 만들어 문자열을 넣어준다
for ( let i = 0; i < result.length; i++) {
    let sum = '';
    // 다시한번 이중 for문을 이용하여 j가 result[i]의 길이만큼 돌게 되는데
    // 여기서 만약 j가 짝수라면 sum에 result[i][j]를 대문자로 붙여준다.
    // 만약 j가 홀수라면 sum에 result[i][j]를 소문자로 붙여준다.
    for(let j = 0; j < result[i].length; j++) {
        if (j % 2 === 0) {
            sum += result[i][j].toUpperCase()
        } else {
            sum += result[i][j].toLowerCase()
        }
    }
    // 다음 단계로는 answer에 sum을 push
    answer.push(sum)
}
// 마지막으로 분리된 배열을 공백을 기준으로 하나의 문자열로 합쳐서 return
return answer.join(' ')
}


//완주하지 못한 선수
//정답
function solution(participant, completion) {
    const total = participant.length;
    var answer = '';
    
    let a = participant.sort(); //알파벳 순으로 정리
    let b = completion.sort();
    console.log(a);
    console.log(b);
    for(let i=0; i<total; i++){
        if(participant[i] !== completion[i]){ //알파벳 순으로 정리되었는데 일치하지 않는다면 완주하지 못한 것이니까
            answer = participant[i]; //완주하지 못한 사람 출력
            return answer;
        }
    }
}

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

//수박수박수
//정답
function solution(n) {
    var answer = '';
    for(let i = 0; i<n; i++){
        if(i%2===0){
            answer += "수";  //추가할 떼는 그냥 추가할 것만 쓰기. 괜히 i번째 생각하다가 망했네
        }else{
            answer += "박";
        }
    }
    return answer;
}

// 리턴 배열의 인덱스에 따라 수 또는 박을 넣어볼까...?
//return.length는 n, return의 마지막 인덱스는 n-1
//["0(1)(2)...(n-1)"] return[i] i가 짝수이면 수 홀수이면 박


// 자연수 뒤집기

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

  //콜라츠 추측

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
    

    //자릿수 더하기
    //정답
    function solution(n){
        var answer = 0;
        let N = n.toString();
        
        for(let i = 0; i <N.length; i++){
         answer += Number(N[i])  
        }
        return answer;
    }


    //정수 내림차순으로 배치하기
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

    //정수 제곱근 판별
    //정답
    function solution(n) {
        var answer = 0;
        if(Math.sqrt(n) % 1 == 0 ){ //n의 제곱근이 양의 정수라면 1로 나누었을 때 나머지 0
            return (Math.sqrt(n)+1)*(Math.sqrt(n)+1)
        }else{ //n의 제곱근이 양의 정수가 아니라면(예를들어 루트3=1.***인 경우 1로 나누면 나머지가 0이 아님)
           return -1
        }
        }

//Math.sqrt(n)
//n의 제곱근은 구한다.        


//제일 작은 수 제거하기
//정답
function solution(arr) {
    var answer = [];
    if(arr.length == 1){
        return [-1]
    }
    else{
   let min = Math.min(...arr)
   arr.splice(arr.indexOf(min),1)
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

//하샤드 수
//정답
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

