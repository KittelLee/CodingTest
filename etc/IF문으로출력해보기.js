// if문으로 원하는 답 출력해보기

function solution() {
  let answer = prompt("사과, 배, 딸기 중 하나 입력");
  if (answer == "사과") {
    console.log("사과를 좋아하시는군요?");
  } else if (answer == "배") {
    console.log("배를 좋아하시는군요?");
  } else if (answer == "딸기") {
    console.log("딸기를 좋아하시는군요?");
  } else {
    console.log("잘못 입력하셨습니다!");
  }
}

solution();
