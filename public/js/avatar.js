var form = document.querySelector('#avatar')
var img = document.querySelector('#profileImage')
var ipt = document.querySelector('#imageUpload')

form.addEventListener('click',(e) => {
    if(ipt) {
        ipt.click()
    }
    e.preventDefault()
})

ipt.addEventListener("change", handleFiles, false)

function handleFiles() {
    if(!this.files.length) {
        console.log("No file selected")
    } else {
        img.src = URL.createObjectURL(this.files[0])
        img.onload = function() {
            URL.revokeObjectURL(this.src);
        }
        // var formData = new FormData()
        // formData.append('avatar',this.files[0])
        // console.log(formData.get('avatar'))
        // console.log(this.files[0])

        // options = {
        //     method: 'POST',
        //     headers: {
        //         //'Accept': 'application/json, text/plain, */*',
        //         'Accept': 'multipart/form-data; boundary=<calculated when request is sent>, text/plain, */*',
        //         'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
        //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        //     },
        //     body: formData
        // }

        // fetch('/users/me/avatar', options).then(res => {
        //     if(res.ok) {
        //         console.log("good")
        //     } else {
        //         throw Error(`Request rejected with status ${res.status}`)
        //     }
        // }).catch(e => {
        //     console.log(e);
        // })
    }
}