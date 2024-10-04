// Seleccionar el formulario con el id "miFormulario"
const $form = document.getElementById('miFormulario');

// Función para manejar el envío del formulario
$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Crear el objeto FormData con los datos del formulario
    const form = new FormData($form);

    // Enviar los datos usando fetch
    try {
        const response = await fetch($form.action, {
            method: $form.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        });

        // Si la respuesta del servidor es exitosa
        if (response.ok) {
            // Resetear el formulario
            $form.reset();

            // Mostrar una alerta de éxito usando SweetAlert2
            Swal.fire({
                title: "¡Gracias por contactarnos!",
                text: "Te escribiremos pronto :D",
                icon: "success",
                background: "#1c1f2b",
                showConfirmButton: false,
                showClass: {
                    popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                            `
                },
                hideClass: {
                    popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                            `
                },
                timer: 3500
            });
        } else {
            // Si la respuesta no es exitosa
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.",
                icon: "error",
                background: "#1c1f2b",
                showClass: {
                    popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                            `
                },
                hideClass: {
                    popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                            `
                },
                showConfirmButton: true
            });
        }
    } catch (error) {
        // Si ocurre un error con la solicitud
        Swal.fire({
            title: "Error",
            text: "No pudimos enviar tu mensaje. Por favor, revisa tu conexión e inténtalo de nuevo.",
            icon: "error",
            background: "#1c1f2b",
            showClass: {
                popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                        `
            },
            hideClass: {
                popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                        `
            },
            showConfirmButton: true
        });
    }
}
