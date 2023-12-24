const container = document.getElementsByClassName('container')
const btn = document.getElementById('btn')
console.log(btn)
const box2 = document.getElementsByClassName('box2')
btn.addEventListener('click', () => {
    
    const mess = document.getElementsByClassName("mess")
    btn.remove()
    mess[0].classList.remove('hide')
    setTimeout(() => {
        mess[0].classList.add('hide')
        
        box2[0].classList.remove('hide')
    }, 72000);
    
})

const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', () => {
   
    
    box2[0].classList.add('hide')
    container[0].classList.remove('hide')
    setInterval(makeSnow, 5000);l
})
const makeSnow = () => {
    const snow = document.createElement("div")
    const size = Math.random() + 7
    console.log(size)
    snow.classList.add("snow")
    snow.style.height = size + 'px'
    snow.style.width = size + 'px',
    snow.style.opacity = size / 7.9;
    snow.style.zIndex = 1000
    snow.style.animationDuration = Math.random() + 2 + 's'
    
    snow.style.left = Math.random() * window.innerWidth * 2 + 'px'    
container[0].appendChild(snow)
setTimeout(() => {
    snow.remove()
}, 3000);
}
