function solution(n) {
  // count를 0으로 초기화
  let count = 0;

  // i가 0일때 j가 0 1 2 3 4 5 돌고
  // i가 1일때 j가 0 1 2 3 4 5 또돌고
  // 이렇게 반복하면 6*6반복 따라서 결과값은 36
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      count += 1;
    }
  }
  // n^2번 연산 수행

  // k가 0 1 2 3 4 5 까지 증가
  // 따라서 결과값은 6
  for (let k = 0; k < n; k += 1) {
    count += 1;
  }
  // n번 연산 수행

  // i가 0에서 2 * 6만큼
  // 즉 0 1 2 3 ~ 11 (12번반복)
  // 따라서 결과값은 12
  for (let i = 0; i < 2 * n; i += 1) {
    count += 1;
  }
  // 2n번 연산수행

  // i가 0에서 4까지
  // 5번반복 결과값은 5
  for (let i = 0; i < 5; i += 1) {
    count += 1;
  }
  // 5번연산수행

  // 36+6+12+5=59
  console.log(count);
}

solution(6);
// 6² + 6 + (2 * 6) + 5
// f(x) = x² + 3x + 5
