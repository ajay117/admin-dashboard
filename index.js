let sidebar = document.querySelector('.sidebar');
let logo =  document.querySelector('.logo');
let closeBtn = document.querySelector('.close-btn');

logo.addEventListener('click', () => {
    let html = document.querySelector('html');
    sidebar.style.height = html.offsetHeight; 
    sidebar.classList.toggle('show');
    sidebar.style.left = '0px';

    logo.classList.toggle('show');
    closeBtn.classList.toggle('show');
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    sidebar.style.left = '-1000px';

    logo.classList.toggle('show');
    closeBtn.classList.toggle('show');
})