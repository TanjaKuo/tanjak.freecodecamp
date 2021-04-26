const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');  

btn.addEventListener('click', function() {
    const randomNumber = getRandomColor();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}

/*

1. define variable btn and color 
2. using btn to addEventListeren and set a function
3. inside the function, make sure the style background will be change by randomNumber
4. also the textContent as well
5. define the randomNumber is getRandomColor function
6. create a getRandomColor function
7. return Math.random() and colors.length, also cover by Math.floor

*/