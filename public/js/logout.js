const logout = document.querySelector('#logout')

logout.addEventListener('submit', (e) => {
    e.preventDefault()

    options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    }

    fetch('/users/logout', options).then((res) => {
        if (res.ok) {
            location.href = '/users/login'
        } else {
            throw Error(`Request rejected with status ${res.status}`)
        }
    }).catch((e) => {
        console.log(e)
    })
})