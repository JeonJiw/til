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
