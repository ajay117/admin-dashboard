let sidebar = document.querySelector('.sidebar');
let logo =  document.querySelector('.logo');
let closeBtn = document.querySelector('.close-btn');

logo.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    sidebar.style.left = '0px';

    logo.style.display = 'none';
    closeBtn.classList.toggle('show')
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    sidebar.style.left = '-1000px';

    logo.style.display = 'block';
    closeBtn.classList.toggle('show')
})