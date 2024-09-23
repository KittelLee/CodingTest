// 주어진 숫자가 짝수인지 홀수인지 판별하는 프로그램

let num = prompt("숫자를 입력하세요");

num = Number(num);

if (isNaN(num)) {
  console.log("잘못입력하셨습니다.");
} else if (num % 2 === 0) {
  console.log("짝수입니다.");
} else {
  console.log("홀수입니다.");
}
