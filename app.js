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

        const agregarFrase = () => {
            if (nuevaFrase.value.trim() !== '' && nuevoAutor.value.trim() !== '') {
                frases.value.push({ frase: nuevaFrase.value, autor: nuevoAutor.value });
                nuevaFrase.value = '';
                nuevoAutor.value = '';
            }
        };

        const eliminarFrase = (numeros) => {
            frases.value.splice(numeros, 1);
        };

        return {
            frases,
            nuevaFrase,
            nuevoAutor,
            agregarFrase,
            eliminarFrase
        };
    }
});

app.mount('#app');
