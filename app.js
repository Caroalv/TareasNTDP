const frasesO = [
    { frase: 'La vida es lo que sucede mientras estás ocupado haciendo otros planes.', autor: 'John Lennon' },
    { frase: 'El mayor riesgo es no correr ningún riesgo.', autor: 'Mark Zuckerberg' },
    { frase: 'La imaginación lo es todo. Es la vista previa de las próximas atracciones de la vida.', autor: 'Albert Einstein' },
    { frase: 'No se puede encontrar la paz evitando la vida.', autor: 'Virginia Woolf' },
    { frase: 'La simplicidad es la máxima sofisticación.', autor: 'Leonardo da Vinci' }
];

const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const frases = ref(frasesO);
        const nuevaFrase = ref('');
        const nuevoAutor = ref('');
        const editIndex = ref(null);
        const editFrase = ref('');
        const editAutor = ref('');
        const mensaje = ref('');

        const agregarFrase = () => {
            if (nuevaFrase.value.trim() !== '' && nuevoAutor.value.trim() !== '') {
                frases.value.push({ frase: nuevaFrase.value, autor: nuevoAutor.value });
                nuevaFrase.value = '';
                nuevoAutor.value = '';
                mostrarMensaje('Frase añadida con éxito');
            }
        };

        const eliminarFrase = (index) => {
            const confirmacion = confirm("¿Estás seguro de que quieres eliminar esta frase?");
            if (confirmacion) {
                frases.value.splice(index, 1);
                mostrarMensaje('Registro eliminado con éxito');
            }
        };

        const iniciarEdicion = (index) => {
            editIndex.value = index;
            editFrase.value = frases.value[index].frase;
            editAutor.value = frases.value[index].autor;

            // Abre el modal
            const modal = new bootstrap.Modal(document.getElementById('editModal'));
            modal.show();
        };

        const guardarEdicion = () => {
            if (editFrase.value.trim() !== '' && editAutor.value.trim() !== '') {
                frases.value[editIndex.value].frase = editFrase.value;
                frases.value[editIndex.value].autor = editAutor.value;
                cancelarEdicion();
                mostrarMensaje('Editado con éxito');
            }
        };

        const cancelarEdicion = () => {
            editIndex.value = null;
            editFrase.value = '';
            editAutor.value = '';

            // Cierra el modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
            if (modal) {
                modal.hide();
            }
        };

        const mostrarMensaje = (msg) => {
            mensaje.value = msg;
            setTimeout(() => {
                mensaje.value = '';
            }, 3000); // El mensaje desaparecerá después de 3 segundos
        };

        const cerrarMensaje = () => {
            mensaje.value = '';
        };

        return {
            frases,
            nuevaFrase,
            nuevoAutor,
            agregarFrase,
            eliminarFrase,
            editIndex,
            editFrase,
            editAutor,
            iniciarEdicion,
            guardarEdicion,
            cancelarEdicion,
            mensaje,
            cerrarMensaje
        };
    }
});

app.mount('#app');
