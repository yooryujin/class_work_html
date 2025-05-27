// 자바 스크립트 함수 만들어보기
function changeMessage() {
    var img = document.getElementById("sample-img2");
    if(img) {
        img.src = "img/sample2.png";
    } else {
        console.log("log 출력하기");
        console.error("이미지 태그를 찾을 수 없습니다.");
    }
}
