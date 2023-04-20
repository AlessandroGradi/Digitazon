/*
creare un oggetto chiamato "language" che rappresenta un linguaggio di programmazione, e che abbia le seguenti caratteristiche:

- proprietà label, indica il nome del linguaggio
- proprietà tags; un array di 3 stringhe che indica le caratteristiche dell'oggetto
- un metodo printTags che itera sui tag dell'oggetto e li stampa con un WHILE

chiamare il metodo printTags per mostrare i dati in console
*/

//let caratteristiche = ['car1', 'car2', 'car3']

const language = {
    label:'Javascript', 
    tags: ['car1', 'car2', 'car3'], 
    printTags: function() {
        let i=0
        while (i < this.tags.length) {
            console.log(this.tags[i]);
            i++
        }
    }
}



const lang = {
    label: 'Javascript',
    tags: ['aaaa', 'bbbb', 'cccc'],
    printTags: function () {
        let i =0
        while (i < this.tags.length) {
            console.log(this.tags[i]);
            i++
        }
    }
}

language.printTags()
lang.printTags()

