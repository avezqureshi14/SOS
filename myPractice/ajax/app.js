const uname = document.getElementById('name')
const email = document.getElementById('email')

const post = () => {
   const req = new XMLHttpRequest()
   req.onreadystatechange = function () {
        localStorage.setItem('name',uname.value);
        localStorage.setItem('email',email.value);

        window.location.href = 'result.html'
   }

   req.open('POST','http://127.0.0.1:65245/myPractice/ajax/index.html',true)
   req.send();
}