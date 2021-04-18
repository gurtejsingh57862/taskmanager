const update = document.querySelector('#edittask')
const desc = document.querySelector('#desc')
const comp = document.querySelector('#comp')

fetch(`/tasks/${localStorage.getItem('taskId')}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
}).then((res) => {
    if(res.ok) {
        return res.json()
    } else {
        throw Error(`Request rejected with status ${res.status}`)
    }
}).then((res) => {
    desc.defaultValue = res.description
    comp.defaultValue = res.completed
}).catch((e) => {
    console.log(e)
})

update.addEventListener('submit', (e) => {
    e.preventDefault()

    data = {
        description: desc.value,
        completed: comp.value
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
    fetch(`/tasks/${localStorage.getItem('taskId')}`, options).then( (res) => {
        if (res.ok) {
            return res.json()
        } else{
            throw Error(`Request rejected with status ${res.status}`)
        }
    }).then((res) => {
        alert('Task Updated')
        location.href = "/viewtasks"
    }).catch((e) => {
        console.log(e)
    })
})