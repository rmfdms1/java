let currentPage = 0; // 현재 페이지 인덱스
const pages = document.querySelectorAll('.page'); // 모든 페이지 요소
const totalPages = pages.length; // 총 페이지 수
let scrollTimeout; // 스크롤 타이머 변수

function scrollToPage(index) {
    if (index < 0 || index >= totalPages) return; // 페이지 범위를 벗어나면 무시
    currentPage = index;

    // 페이지별 위치 계산
    let targetPosition = 0;
    if (index === 0) {
        targetPosition = 0;
    } else if (index === 1) {
        targetPosition = window.innerHeight; // Page 2 시작
    } else if (index === 2) {
        targetPosition = window.innerHeight * 2; // Page 3 시작
    }

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // 부드러운 스크롤 효과
    });
}

function handleScroll(event) {
    // 이벤트가 연속적으로 발생하지 않도록 타이머 설정
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
        const isPage3 = currentPage === 2; // 현재 페이지가 Page 3인지 확인

        if (isPage3) {
            const page3 = document.getElementById('page3');
            const atTop = page3.scrollTop === 0; // Page 3의 최상단인지 확인
            const atBottom = page3.scrollTop + page3.clientHeight >= page3.scrollHeight; // Page 3의 최하단인지 확인

            if (event.deltaY > 0 && atBottom) {
                // 아래로 스크롤 시 Page 3 끝에서 다음 페이지로 이동
                scrollToPage(currentPage + 1);
            } else if (event.deltaY < 0 && atTop) {
                // 위로 스크롤 시 Page 3 시작에서 이전 페이지로 이동
                scrollToPage(currentPage - 1);
            }
        } else {
            // Page 3 외의 페이지에서 스크롤
            if (event.deltaY > 0) {
                scrollToPage(currentPage + 1);
            } else if (event.deltaY < 0) {
                scrollToPage(currentPage - 1);
            }
        }
    }, 100); // 스크롤이 끝날 때까지 100ms 대기 후 페이지 이동
}

window.addEventListener('wheel', handleScroll); // 마우스 휠 이벤트 감지