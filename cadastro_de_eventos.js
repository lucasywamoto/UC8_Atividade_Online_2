//Nome do evento
let eventName = "DEV2022";

//Data do evento
let eventDate = new Date("07/01/2022");

//Lista de participantes do evento
var listaParticipantes = ['Lucas', 'Ana', 'Vitória', 'Paulo', 'Alberto'];

//Lista de palestrantes do evento
var listaPalestrantes = ['José', 'Antônio', 'Cristina', 'Andréia']

//Novo participante para cadastro
var newPart = {
    name: 'Matheus',
    age: 26,
}

//Comparação de data inserida com data atual
let nowDate = new Date();
if (eventDate > nowDate) {
    console.log(`Data permitida. Evento ${eventName} cadastrado.`)
    //Verificação de maioridade do participante
    if (newPart.age > 17) {
        console.log("Participante é maior de 18 anos.");
        //Verificação da quatidade de vagas do evento
        if (listaParticipantes.length < 100) {
            listaParticipantes.push(newPart.name);
            console.log(`Evento com vaga disponível. Participante ${newPart.name} cadastrado.`);
        } else console.log("Participante não caLimite de vagas atingido.");
    } else console.log("Participante NÃO possui idade mínima.");
    //Listagem dos participantes
    console.log("----------Lista de participantes----------");
    for (var i = 0; i < listaParticipantes.length; i++) {
        console.log(listaParticipantes[i]);
    }
    console.log("----------Lista de palestrantes----------");
    for (var i = 0; i < listaPalestrantes.length; i++) {
        console.log(listaPalestrantes[i]);
    }
} else console.log("Data inválida.");