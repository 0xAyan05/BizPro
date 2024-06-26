const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
let signed_up = false
sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});

const signin_form = document.querySelector('.sign-in-form')

signin_form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const username = document.getElementById('sign-in-username')
    const password = document.getElementById('sign-in-password')
    const msg = document.querySelector('.err-msg')

    fetch('http://localhost:5000/api/users/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    .then(res => res.json())
    .then(data => {
        if(data.stats<0) {
            msg.innerHTML = data.msg
            return
        }
        window.open(data.url, '_self')
    })
    .catch(err => {
        console.log(err.msg)
    })

})

const sign_up = document.querySelector('.sign-up-form')

sign_up.addEventListener('submit', e => {
    e.preventDefault()

    const username = document.getElementById('username')
    const fname = document.getElementById('fname')
    const lname = document.getElementById('lname')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const msg = document.querySelector('.signup-errmsg')

    fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username.value,
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.stats<0) {
                msg.innerHTML = data.msg
                return
            }
            window.open('http://localhost:5000/login', '_self')
        })
        .catch(err => console.log(err))
})