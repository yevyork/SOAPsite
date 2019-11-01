let popup = document.querySelector('.popcontainer');
let xButton = document.querySelector('.close')
    xButton.addEventListener('click', function() {
        popup.remove();
    })

let signUp = document.querySelector('button');
    signUp.addEventListener('click', function() {
        popup.remove()
        alert("Thanks! Check your inbox and confirm your e-mail address!")
    })