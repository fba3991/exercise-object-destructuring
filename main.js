/* const utente = {
    nome: "Alice",
    eta: 25,
    hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
    indirizzo: {
        via: "123 Via degli Aceri",
        citta: "Paese delle Meraviglie"
    }
};
let jsonString = JSON.stringify(utente);
console.log(jsonString); */

/* let jsonString = '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}'

  
    let oggettoJSON = JSON.parse(jsonString);
    const {nome, email} = oggettoJSON;
    console.log(nome, email);
 */

     /* const film = {
        titolo: "Inception",
        regista: "Christopher Nolan",
        anno: 2010,
        valutazione: 8.8
    };
    const {titolo, anno} = film;
    console.log(titolo, anno); */
  

   
  /*   const utente = {
        nome: "Alice",
        indirizzo: {
            via: "123 Via degli Aceri",
            citta: "Paese delle Meraviglie"
        }
    };
    const{indirizzo:{citta, via}}= utente;
    console.log(citta, via);
     */

    /* Utilizza la distrutturazione degli oggetti per estrarre 
    il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta` non è fornita,
     dovrebbe avere un valore predefinito di `30` */
     
   /*   const persona = {
        nome: "Bob"
    };
const {nome, eta = 30}= persona;
console.log(nome, eta);
 */
/* 
Scrivi una funzione `presentati` che prende un oggetto 
con le proprietà `nome` e `occupazione`
e registra un messaggio nella console. */


    

/*  const persona = {
    nome: "Jane",
    occupazione: "sviluppatrice"
};

const presentati = () =>{
    const{ nome, occupazione}=persona;
    console.log(`ciao, sono ${nome} e sono una ${occupazione}`);
}
presentati(persona); */



/* Dato il JSON degli utenti, scrivi una funzione che 
distruttura ogni oggetto utente per estrarre il nome, 
l'email e l'indirizzo dell'utente. Se l'indirizzo non è fornito, 
la funzione dovrebbe assegnare un valore predefinito di "Indirizzo non fornito". 
Registra le informazioni estratte per ogni utente. */

const persons = [
    {
        name: "Alice",
        email: "alice@example.com",
        address: "123 Via Acero, Meraviglia"
    },
    {
        name: "Bob",
        email: "bob@example.com"
    },
    {
        name: "Charlie",
        email: "charlie@example.com",
        address: "456 Via Olmo, Sognilandia"
    }
]
const [{address: h1}, {address:h2='234 via roma, blablabla'}, {address: h3} ]= persons;
console.log(h1, h2, h3); 