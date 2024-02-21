let cursor = document.querySelector('#cursor');
let first_div = document.querySelector('.first-div')

document.addEventListener('mousemove', (e) => {
    first_div.style.backgroundPositionX = e.pageX/-4 + 'px';
    first_div.style.backgroundPositionY = e.pageY/-4 + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})