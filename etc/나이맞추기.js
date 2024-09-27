// 출생년도를 prompt로 입력받으면 그에 해당하는 나이를 출력
// new Date()이용

const date = new Date();
const year = prompt("출생년도를 입력하세요");
const year_of_age = date.getFullYear();
const result = year_of_age + 1 - year;
console.log(result);

// 리팩토링 필요
