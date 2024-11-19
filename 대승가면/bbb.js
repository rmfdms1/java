// 빨갱이 이미지를 클릭했을 때 애니메이션 발생
document.getElementById('click-img').addEventListener('click', function() {
    const yellowLetter = document.getElementById('yellow-letter');
    const page2 = document.querySelector('.page2');
    
    // 노란 편지지에 애니메이션 클래스를 추가하여 편지지가 위로 올라오도록 설정
    yellowLetter.classList.add('animate');
    
    // 페이지 2에서 스크롤을 막는 클래스를 추가
    page2.classList.add('no-scroll');
  });