//template_6oomkop
//service_unxthal
//pP19id_5iI0771PQA

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
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email server is down.  Please contact me directly at morgan.feeney1022@gmail.com"
        );
    })

}

 let isModalOpen = false;

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

