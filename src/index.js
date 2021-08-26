import menuTemplate from '../templates/menu.hbs';
import menu from '../src/menu.json';


const menuRef = createMenuCards(menu);

function createMenuCards(menu) {
    return menu.map(menuTemplate).join('');
}

const ulRef = document.querySelector('ul');

ulRef.insertAdjacentHTML('beforeend', menuRef);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const switcher = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

switcher.addEventListener('change', clickHandler);
switcher.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', getLocalStorageTheme);

const defaultTheme = localStorage.getItem(STORAGE_KEY);

if (defaultTheme === null) {
bodyRef.classList.add(Theme.LIGHT);
}
else {
bodyRef.classList.add(defaultTheme);
}

function clickHandler() {

    if (switcher.checked === true) {
        bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    } else {
        bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    }
}

function setLocalStorage() {
    switcher.checked
        ? localStorage.setItem(STORAGE_KEY, Theme.DARK)
        : localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
}

function getLocalStorageTheme() {
    const localStoregeTheme = localStorage.getItem(STORAGE_KEY);
    if (localStoregeTheme === Theme.DARK) {
        bodyRef.classList.add(Theme.DARK);
        switcher.checked = true;
    }
}
