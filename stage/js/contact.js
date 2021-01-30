// Handeling the Form
let myForm = document.getElementById('form'),
    myFormItems = document.querySelectorAll('.navbar form input'),
    myPass = document.querySelector('.navbar .form-control #pass');
    CheckedPass = document.querySelector('.navbar .form-control #checkpass');


myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    myFormItems.forEach(ele => {
        if (ele.value === "") {
            ele.parentElement.classList.remove('success');
            ele.parentElement.classList.add('error');
        } else{
            ele.parentElement.classList.remove('error');
            ele.parentElement.classList.add('success');
        }
        if (myPass.value !== CheckedPass.value){
            CheckedPass.parentElement.classList.remove('success');
            CheckedPass.parentElement.classList.add('error');
            CheckedPass.parentElement.children[3].textContent = "Password Doesn't Match";
        }
    });
});