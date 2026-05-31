//template_6oomkop
//service_unxthal
//pP19id_5iI0771PQA

function contact(event) { 
    event.preventDefault();
    // emailjs
    // .sendForm(
    //     'service_unxthal',
    //     'template_6oomkop',
    //     event.target,
    //     'pP19id_5iI0771PQA'
    // ).then(() => {
    //             console.log('this worked1')
    // })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";
    setTimeout (() => {
       loading.classList.remove("modal__overlay--visible");
       success.classList += " modal__overlay--visible";
       console.log('it worked 1')
    },1000);
}
