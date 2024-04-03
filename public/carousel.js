const carousel = document.querySelector('.carousel')
const btn = document.querySelectorAll('.carousel-container button')
let dragging = false, start, distance

btn.forEach(b =>{
    b.addEventListener('click', e => {
        console.log(carousel.scrollLeft)
        carousel.scrollLeft += b.className=="left"? -265: 265
    })
})

carousel.addEventListener('mousedown', e => {
    dragging = true
    start = e.pageX
    distance = carousel.scrollLeft
})
window.addEventListener('mouseup', e =>{
    dragging = false
})
carousel.addEventListener('mousemove', e => {
   if(!dragging) return
   
   else carousel.scrollLeft = distance - (e.pageX - start) *1.5
})


fetch('http://localhost:5000/api/services')
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(e => {
        carousel.innerHTML += `
        <div class="card" style="background-image: url('${e.poster}')" >
        <div class="text" >${e.services}</div>
        </div>`
    })
})
.catch(err => console.log(err))

//