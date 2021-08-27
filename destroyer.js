/*초기 배열( destroyer함수 의 첫 번째 인수 )과 하나 이상의 인수가 제공됩니다. 
이러한 인수와 값이 동일한 초기 배열에서 모든 요소를 ​​제거합니다. */

function destroyer(arr, ...args) {
  // 인수가 몇개가 들어올지 모르기 때문에
  // ... 연산자를 사용한다.  👉 The rest parameter syntax 
  // Rest 파라미터 구문은 정해지지 않은 수(an indefinite number, 부정수) 인수를 배열로 나타낼 수 있게 합니다.

  return arr.filter(el => !args.includes(el))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));