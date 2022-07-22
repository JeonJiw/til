
/* 이상한 문자 만들기 */

function solution(s) {
    var answer = [];
    let word = s.split(' ');
    for(let i = 0; i < word.length; i++){
        let change = ''; //변수설정을 어디서 하느냐에 따라서 값이 달라짐
        for(let j = 0; j < word[i].length; j++){
             if(j%2===0){
                 change += word[i][j].toUpperCase();
             }else{
                 change += word[i][j].toLowerCase();
             }
        }    
        let a = answer.push(change)
    }
    return answer.join(' ');
}
