function darkMode() {
    let darkMode = document.querySelector('#switchButtonStyle');
    let darkModeLocalStorage = localStorage.getItem('DarkMode');

    const enableDarkMode = () => {
        document.querySelector('html').classList.add('dark-mode');
        localStorage.setItem('DarkMode', 'enabled');
    }
    const disableDarkMode = () => {
        document.querySelector('html').classList.remove('dark-mode');
        localStorage.setItem('DarkMode', null);

    }
    if (darkModeLocalStorage === 'enabled') {
        enableDarkMode();
    }

    ['touchstart', 'click'].forEach(userEvent => {
        darkMode.addEventListener(userEvent, handleClickDarkMode);
    });

    function handleClickDarkMode() {
        darkModeLocalStorage = localStorage.getItem('DarkMode');

        if (darkModeLocalStorage !== 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }
}

export default darkMode;