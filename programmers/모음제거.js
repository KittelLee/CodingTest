// 쉬운방법
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// 배열에 담아서 처리
function solution(my_string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let answer = my_string;
  vowels.forEach((vowel) => {
    answer = answer.replaceAll(vowel, "");
  });
  return answer;
}
