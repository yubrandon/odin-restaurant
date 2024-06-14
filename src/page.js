export function homeContainer() {
    const container = document.querySelector('.container');
    const test = document.createElement("p");
    test.innerHTML = "hello home world!";
    container.appendChild(test);
}

export function menuContainer() {
    const container = document.querySelector('.container');
    const test = document.createElement("p");
    test.innerHTML = "hello menu world!";
    container.appendChild(test);
    
}

export function aboutContainer() {
    const container = document.querySelector('.container');
    const test = document.createElement("p");
    test.innerHTML = "hello about world!";
    container.appendChild(test);
}

export function clearContainer() {
    const container = document.querySelector('.container');

    if(container.hasChildNodes()) {
        let del = container.childNodes;
        for(let i = 0; i<del.length;i++) {
            container.removeChild(del[i]);
        }
    }
}