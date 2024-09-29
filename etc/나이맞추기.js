// 출생년도를 prompt로 입력받으면 그에 해당하는 나이를 출력
// new Date()이용

const date = new Date();
const year = prompt("출생년도를 입력하세요");
const year_of_age = date.getFullYear();
const result = year_of_age + 1 - year;
console.log(result);

// new Date()를 적극 이용한 다른 방법
const date_2 = new Date();
const currentYear = date.getFullYear();
const birthYear = prompt("출생년도를 입력하세요");
const age = currentYear - birthYear + 1;
console.log(`당신의 나이는 ${age}살입니다.`);
