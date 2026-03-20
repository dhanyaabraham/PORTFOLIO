function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("msg").innerText = "Message sent successfully!";

this.reset();

});