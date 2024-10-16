// 2단부터 19단까지 구구단 출력

for (let i = 2; i <= 19; i++) {
  console.log(`=== ${i}단 ===`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("");
}
