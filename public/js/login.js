const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', (e) => {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    e.preventDefault()
    data = {
        email,
        password
    }
    options = {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/users/login', options).then( res => {
        if (res.ok) {
            return res.json()
        } else {
            throw Error(`Request rejected with status ${res.status}`)
        }
    }).then( res => {
            console.log(res);
            let inMemoryToken = res.token;
            console.log(inMemoryToken)

            localStorage.setItem('token', JSON.stringify(res.token))
        }).then(() => {
            //const token = JSON.parse(localStorage.getItem('token'))
            location.href = "/createtask"
        }).catch((e) =>{
            console.log(e)
        })
})