const create = document.querySelector('#createtask')
const desc = document.querySelector('#desc')
const comp = document.querySelector('#comp')

create.addEventListener('submit', (e) => {
    e.preventDefault()

    data = {
        description: desc.value,
        completed: comp.value
    }
    options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        body: JSON.stringify(data)
    }
    fetch('/tasks', options).then( (res) => {
        if (res.ok) {
            return res.json()
        } else{
            throw Error(`Request rejected with status ${res.status}`)
        }
    }).then((res) => {
        location.href = "/viewtasks"
    }).catch((e) => {
        console.log(e)
    })
})