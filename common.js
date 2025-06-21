const mode = document.querySelector('.mode'); 
const changeMode = document.querySelector('.mode span');
const body = document.querySelector('body');

// Load initial state
if (localStorage.getItem('isDark') === 'true') {
    body.classList.add('dark');
    changeMode.innerText = ' Light Mode';
} else {
    body.classList.remove('dark');
    changeMode.innerText = ' Dark Mode';
}

mode.addEventListener('click', () => {
    const isDark = body.classList.contains('dark');

    if (!isDark) {
        body.classList.add('dark');
        changeMode.innerText = ' Light Mode';
        localStorage.setItem('isDark', 'true');
    } else {
        body.classList.remove('dark');
        changeMode.innerText = ' Dark Mode';
        localStorage.setItem('isDark', 'false');
    }
});
