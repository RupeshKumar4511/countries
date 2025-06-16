const mode = document.querySelector('.mode');
const changeMode = document.querySelector('.mode span');
const body = document.querySelector('body');
let boolean = true;
mode.addEventListener('click', () => {
    if (boolean) {
        body.classList.add('dark');
        changeMode.innerText = ' Light Mode';
        boolean = false;
    } else {
        body.classList.remove('dark');
        changeMode.innerText = ' Dark Mode';
        boolean = true;
    }


})
