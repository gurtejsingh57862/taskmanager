const update = document.querySelector('#updateprofile')

update.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = document.querySelector('#name').value
    const age = document.querySelector('#age').value
    const password = document.querySelector('#password').value

    var data

    if (name && age && password) {
        console.log(name)
        data = {
            name,
            age,
            password
        }
    } else if (name && age) {
        data = {
            name,
            age
        }
    } else if (name && password) {
        data = {
            name,
            password
        }
    } else if (age && password) {
        data = {
            age,
            password
        }
    } else if (name) {
        data = {
            name
        }
    } else if (age) {
        data = {
            age
        }
    } else if (password) {
        data = {
            password
        }
    } else {
        data = {

        }
    }

    options = {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        body: JSON.stringify(data)
    }
    fetch('/users/me', options).then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw Error(`Request rejected with status ${res.status}`)
        }
    }).then((res) => {
        location.href = '/viewtasks'
    }).catch((e) => {
        console.log(e)
    })
})