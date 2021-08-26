/*Diff Two Arrays
두 배열을 비교하고 주어진 두 배열 중 하나에서만 발견되는 항목이 있는 새 배열을 반환하지만 
둘 다에서는 찾을 수 없습니다. 즉, 두 배열의 대칭 차이를 반환합니다.
참고: 배열의 요소와 순서에 상관없이 반환할 수 있습니다.
*/ 

function diffArray(arr1, arr2) {
  var newArr = [];
  
  // 각각의 배열이 가지고 있지 않은 요소만을 걸러낸다.
    // arr1 의 요소들이 arr2 에 포함되어 있지 않다면, 1 배열에 모아둔다. 
    // arr2 의 요소들이 arr1 에 포함되어 있지 않다면, 2 배열에 모아둔다.  
  // 두 배열을 하나로 합친다. 
  const filtered1 = arr1.filter(el => !arr2.includes(el))
  const filtered2 = arr2.filter(el => !arr1.includes(el))
  //console.log(filtered1, filtered2)

  newArr = filtered1.concat(filtered2)
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
