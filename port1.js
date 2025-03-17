// Header Toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// typing effect
 let typed = new Typed('#auto-input',{
    strings:['Front-End-Developer!','Web-Designer!', 'React-Devloper!'],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 100,
    loop:true,
 })