const name = document.querySelector('#name')
const age = document.querySelector('#age')
const email = document.querySelector('#email')
const table = document.querySelector('#myTable')

fetch('/users/myprofile', {
    method: 'GET',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
}).then(res => res.json()).then((res) => {
    console.log(res)
    name.textContent = res.name
    age.textContent = res.age
    email.textContent = res.email
    
})

fetch('/tasks', {
    method: 'GET',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
}).then( res => res.json()).then((res) => {
    console.log(res[0])
    for (var i=0; i<res.length;i++){
        var row = table.insertRow(i+1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        cell1.innerHTML = i+1
        cell2.innerHTML = res[i].description
        cell3.innerHTML = res[i].completed

        var button = document.createElement("button")
        button.innerHTML = "Edit"
        cell4.appendChild(button)
        button.addEventListener("click", () => {
            alert("did something")
        })
    }
    
})
