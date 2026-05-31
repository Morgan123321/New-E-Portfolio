//template_6oomkop
//service_unxthal
//pP19id_5iI0771PQA

function contact(event) { 
    event.preventDefault();
    emailjs
    .sendForm(
        'service_unxthal',
        'template_6oomkop',
        event.target,
        'pP19id_5iI0771PQA'
    ).then(() => {
        console.log('this worked1')
    })
}