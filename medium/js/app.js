document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.blog-content-container');
    const thumbnails = Array(33).fill(null); //추후 csv 파일에서 데이터를 가져와서 배열에 저장

    thumbnails.map(() => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'blog-content-thumbnail';
        container.appendChild(thumbnail); 
    })
});