
const parent = document.getElementById("parent")


//to know which button i cliced

parent.addEventListener('click' , (e) => {
    const child = e.target
    const body = document.querySelector('body')
    body.style.backgroundColor = child.id
})