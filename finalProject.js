const theModal = new bootstrap.Modal(document.getElementById('myModal'));

document.addEventListener('DOMContentLoaded', function(event) {
  
    modal();
  
    login();

});

function login() {
    // Select the button element with ID 'bag'

    let button = document.querySelector("#personOne");
    console.log(button)
    
    // Check if the button exists
    if (button) {
        button.addEventListener('click', function(event) {
            // Redirect to signup.html when the button is clicked
            window.location.href = "signup.html";
        });
    } else {
        console.error("Button with ID 'personOne' not found in the DOM.");
    }
}

function modal(){
    theModal.show();
}

function buttons(){
    let size = document.querySelector("size");

    size.addEventListener('click', function(event){
        
    })
}