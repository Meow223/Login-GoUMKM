/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const togglePassword = document.querySelector('#showpassword');
const password = document.querySelector('#pass');

togglePassword.addEventListener('click', function () {
    // toggle the type attribute
    this.classList.toggle('fa-eye-slash');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon

});




