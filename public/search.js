const form = document.querySelector('.search-form')
const search = document.getElementById('search-bar')
const suggestions = document.getElementById('suggestions')

search.addEventListener('input', (e)=>{
    if(search.value ==''){
         suggestions.classList.remove('show-suggestions')
         return
    }
    suggestions.innerHTML = ""

    fetch(`/api/search/suggestions?title=${e.target.value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: e.target.value,
        })
    })
    .then(res => res.json())
    .then(data => {
        data.forEach((dt, i) => {
           if(i<6) suggestions.innerHTML += `<div class="suggestion-results" >${dt.businessOnlineCourseTitle}</div>`
        })

        const results = document.querySelectorAll('.suggestion-results')
        results.forEach(r => {
            r.addEventListener('click', (e)=> {
                search.value = e.target.textContent
                suggestions.classList.remove('show-suggestions')
            })
        })

        suggestions.classList.add('show-suggestions')
    })
    .catch(err => console.log(err))
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    fetch(`http://localhost:5000/search/${e.target[0].value}`)
    .then(res => window.open(res.url, '_self'))
    .catch(err => console.log(err))
})