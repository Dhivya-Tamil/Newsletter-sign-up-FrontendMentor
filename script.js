const submitBtn = document.getElementById('submitbtn');
const container = document.querySelector('.container');
const container2 = document.querySelector('.container-2');
const sentEmail = document.getElementById('sent-email');

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const error = document.getElementById('error');
    if (!email.value) return;

    if(!validateEmail(email.value)){
        console.log("valid")
        error.innerHTML = "Valid email required";
        return;
    }

    container.style.display = 'none';
    container2.style.display = 'block'
    sentEmail.innerHTML = email.value;
});

