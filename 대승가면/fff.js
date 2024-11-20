document.addEventListener("DOMContentLoaded", () => {
    
    const textElement = document.querySelector('.changing-text');
    const textList = ["이링크를 클릭해 박람회에 참석하자", "설마 박람회가는 링크를 놓쳐서 여기온건 아니겠지", "억겁의 세월을 기다리는중"]; // 변경될 텍스트 배열
    let textIndex = 0;

    if (textElement) {
        setInterval(() => {
            textIndex = (textIndex + 1) % textList.length; // 인덱스 순환
            textElement.textContent = textList[textIndex]; // 텍스트 변경

            // 텍스트가 1번 글일 경우에만 링크 추가
            if (textList[textIndex] === "이링크를 클릭해 박람회에 참석하자") {
                textElement.style.cursor = "pointer"; // 클릭 가능 표시
                textElement.onclick = () => {
                    window.location.href = "ggg.html"; // ggg.html로 이동
                };
            } else {
                textElement.style.cursor = "default"; // 기본 커서
                textElement.onclick = null; // 클릭 비활성화
            }
        }, 5000);
    } else {
        console.error("Error: '.changing-text' 요소를 찾을 수 없습니다.");
    }
    
    
});