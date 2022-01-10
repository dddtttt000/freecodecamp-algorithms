// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면
//프로도는 원래 숫자를 찾는 게임입니다.
//다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.
// "one4seveneight" -> "1478" -> 1478

function solution(s) {
  // 문자들을 배열에 담는다.
  let letter = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  var answer = s

  for (let i = 0; i < letter.length; i++) {
    // s 문자열을 letter[i] 를 기준으로 나눈다 -> i=1, ["", "4seveneight"]
    // join 으로 배열의 각 요소를 연결해준다 -> i로 연결, "14seveneight"
    let arr = answer.split(letter[i])
    answer = arr.join(i)
  }
  return Number(answer)
}
