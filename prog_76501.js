// absolutes의 길이는 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

function solution(absolutes, signs) {
  // signs 가 true 인경우 그대로 그 값을,
  // false 인경우 -를 붙여서 음수를 만든 값을
  let result = [];
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) {
      result.push(absolutes[i]);
    } else {
      result.push(-absolutes[i]);
    }
  }
  return result.reduce((acc, cur) => acc + cur);
}

console.log(solution([4, 7, 12], [true, false, true]));

// 명쾌한 한줄 풀이...🥲
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

// 💡 arr.reduce(callback[, initialValue]) 의 매개변수
// 1. acc = 누적값, 콜백의 첫 번째 호출이면서 initialValue
// 2. cur = 처리할 현재 요소
// 3. idx = 처리할 현재 요소의 인덱스
// 4. arr = 원본배열
