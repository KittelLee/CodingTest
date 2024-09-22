// for문으로 1부터 10까지 더하는 코드를 짜기

// 일반풀이
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}

console.log(sum);

// +=연산자 이용 풀이
let sum1 = 0;
for (let i = 1; i <= 10; i++) {
  sum1 += i;
}

console.log(sum1);
