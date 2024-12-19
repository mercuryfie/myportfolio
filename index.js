$(function () {
     
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.font = '40px Borel';
    ctx.fillStyle = '#333';
    
    const text = "about";
    let index = 0;

    function draw() {
        if (index < text.length) {
            ctx.fillText(text[index], 50 + index * 40, 70); // 각 글자의 위치 조정
            index++;
            setTimeout(draw, 500); // 다음 글자를 그리기 전에 500ms 대기
        }
    }

    draw(); // 애니메이션 시작
});  