const button = document.querySelector('.button');
const theme = document.querySelector('body');

button.addEventListener('click', ThemeToggle);

function ThemeToggle(){
    theme.classList.toggle('active');
}