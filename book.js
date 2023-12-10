let display = document.getElementById('userInput');
const btn = document.querySelector('button');

btn.addEventListener('click', function(event){
    event.preventDefault();
    console.log(display.value);
});