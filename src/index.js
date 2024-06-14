import './style.css';
import { homeContainer, menuContainer, aboutContainer, clearContainer } from './page.js';

console.log("Console log from index.js");

//add a container that can be centered
const container = document.createElement('div');
container.classList.add("container");
const content = document.querySelector('#content');
content.appendChild(container);

homeContainer();

const btn = document.querySelectorAll("button");
console.log(btn);
for(let i = 0;i < btn.length; i++) {
    if(btn[i].innerText == "Home") {
        btn[i].addEventListener ('click', () => {
            clearContainer();
            homeContainer();
            console.log('home tab loaded');
        })
    }
    else if(btn[i].innerText == "Menu") {
        btn[i].addEventListener ('click', () => {
            clearContainer();
            menuContainer();
            console.log('menu tab loaded');
        })
    }
    else if(btn[i].innerText == "About") {
        btn[i].addEventListener ('click', () => {
            clearContainer();
            aboutContainer();
            console.log('about tab loaded');
        })
    }
}