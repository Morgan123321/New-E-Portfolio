//template_6oomkop
//service_unxthal
//pP19id_5iI0771PQA
 let isModalOpen = false;
 let contrastToggle = false;

 function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX;
    const y = event.clientY;
   
    for(let i = 0; i < shapes.length; ++i) {
        shapes[i].style.transform = `translate(${x}px, ${y}px)`
    }
 }

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
}
else {
    document.body.classList.remove("dark-theme")
}
}


function contact(event) { 
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
     loading.classList += " modal__overlay--visible";
   
     emailjs
    .sendForm(
    'service_unxthal',
    'template_6oomkop',
    event.target,
    'pP19id_5iI0771PQA'
    ).then(() => {
       loading.classList.remove("modal__overlay--visible");
       success.classList += " modal__overlay--visible";
    
    setTimeout (()=> {
    success.classList.remove("modal__overlay--visible");
  }, 3000);

    })
    .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert("The email server is down.  Please contact me directly at morgan.feeney1022@gmail.com");
    })

}



  function toggleModal() {
    const success = document.querySelector('.modal__overlay--success');
       
    if (isModalOpen) {
        isModalOpen = false;
        success.classList.remove("modal__overlay--visible");
       return document.body.classList.remove("modal--open");    
    } 
         
    
    isModalOpen = true;
     success.classList.remove("modal__overlay--visible");
     document.body.classList += " modal--open";
  }
 