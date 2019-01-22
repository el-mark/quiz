var allQuestions = []

class Question {
    constructor(statement){
        this.statement = statement
        this.options = [
            {value:5, statement:'Me encanta'},
            {value:4, statement:'Me gusta'},
            {value:3, statement:'Neutral'},
            {value:2, statement:'No me gusta'},
            {value:1, statement:'Lo detesto'}
        ]
        this.answer = null
    }
    ask(){
        var printOptions = ''
        this.options.forEach(element => {
            printOptions = `${printOptions} (${element.statement}: ${element.value})`
        });
        this.answer = prompt(`${this.statement} ${printOptions}`)
    }
    printAnswer(){
        console.log(this.answer)
    }
}

var q1 = new Question('¿Te gusta trabajar con personas?')
allQuestions.push(q1)

var q2 = new Question('¿Te gusta trabajar en la computadora?')
allQuestions.push(q2)

var q3 = new Question('¿Te gusta estar en movimiento?')
allQuestions.push(q3)

var q4 = new Question('¿Te gusta leer?')
allQuestions.push(q4)

allQuestions.forEach(element => {
    element.ask()
});

console.log(allQuestions)