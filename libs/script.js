$(document).ready(function () {
    $('#tel').mask('(00) 0.0000-0000');

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (() => {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    else {
                        let nome = document.getElementById("nome")
                        let mensagem = document.getElementById("mensagem")
                        alert(nome.value + " " + mensagem.value)
                    }

                    form.classList.add('was-validated')
                }, false)
                form.addEventListener('reset', event => {
                    form.classList.remove('was-validated')
                })
            })
        })();

});