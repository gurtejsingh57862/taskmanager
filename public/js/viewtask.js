const table = document.querySelector('#myTable')

const buildDeleteButton = (data, cell) => {
    var button1 = document.createElement("button")
    var button2 = document.createElement("button")

    cell.append(button1)
    cell.append(button2)

    button1.innerHTML = "Edit"
    button1.setAttribute("class", "btn_class btn1")
    button1.setAttribute('value', data._id)

    button2.innerHTML = "Delete"
    button2.setAttribute("class", "btn_class btn2")
    button2.setAttribute('value', data._id)

    button2.addEventListener("click", () => {
        alert("You are going to delete your task.")

        console.log(button2.value)

        options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }

        fetch(`/tasks/${button2.value}`, options).then((res) => {
            if(res.ok) {
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

    button1.addEventListener("click", () => {
        alert( `Edit Task`)
        localStorage.setItem('taskId',button1.value)
        location.href = '/edittask'
    })

}

fetch('/tasks', {
    method: 'GET',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
}).then( res => res.json()).then((res) => {
    for (var i=0; i<res.length;i++){
        var row = table.insertRow(i+1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        cell1.innerHTML = i+1
        cell2.innerHTML = res[i].description
        cell3.innerHTML = res[i].completed

        buildDeleteButton(res[i],cell4)   
    }
}).catch((e)=>{
    console.log(e);
})