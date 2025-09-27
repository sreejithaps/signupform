const confirmpassword  = document.getElementById("confirmpassword");
const password = document.getElementById("password");
confirmpassword.addEventListener('change', function(event){
  if(confirmpassword.value !== password.value){
        alert("Password and Confirm Password should be same");
        confirmpassword.value = "";
        event.preventDefault();
      
    }  
});

document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('signupform');
form.addEventListener('submit', function (event) {

if (password.value !== confirmPassword.value) {
confirmPassword.setCustomValidity('Passwords do not match');
} else {
confirmPassword.setCustomValidity('');
}
if (!form.checkValidity()) {
event.preventDefault();
event.stopPropagation();

}
form.classList.add('was-validated');
}, false);
});
