const button = document.getElementById('btn');


button.addEventListener('click', () => {
    const randaomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    button.style.backgroundColor = randaomColor;
    button.style.color.white = "white;"

    button.textContent = "clicked"


    setTimeout(() => {
button.textContent = "Click me"
    }, 1000);
    
})