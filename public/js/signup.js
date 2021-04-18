const signup = document.querySelector('#signup')
const name = document.querySelector('#name')
const age = document.querySelector('#age')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const msg1 = document.querySelector('p')

signup.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('sign_up')
    
    data = {
        name: name.value,
        age: age.value,
        email: email.value,
        password: password.value
    }
    options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/users', options).then(res => {
        if(res.ok) {
            return res.json()
        } else {
            throw Error(`Request rejected with status ${res.status}`)
        }
    }).then( res => {
        localStorage.setItem('token', JSON.stringify(res.token))
    }).then(() => {
        location.href = "/createtask"
    }).catch((e) =>{
        console.log(e)
    })
})