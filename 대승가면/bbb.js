// 이미지를 클릭했을 때 애니메이션 발생
document.getElementById('click-img').addEventListener('click', function() {
    const yellowfanzi = document.getElementById('yellow-fanzi');
    const page2 = document.querySelector('.page2');
    
    // 애니메이션 클래스를 추가하여 편지지가 위로 올라오도록 설정
    yellowfanzi.classList.add('animate');
  });