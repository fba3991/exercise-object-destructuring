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
/* 
      const film = {
        titolo: "Inception",
        regista: "Christopher Nolan",
        anno: 2010,
        valutazione: 8.8
    };
    const {titolo, anno} = film;
    console.log(titolo, anno); 
   */

   
  /*   const utente = {
        nome: "Alice",
        indirizzo: {
            via: "123 Via degli Aceri",
            citta: "Paese delle Meraviglie"
        }
    };
    const{indirizzo:{citta, via}}= utente;
    console.log(citta, via);
    /* variante in 2 righe 
    const {indirizzo}=utente;
    const {via, citta}=indirizzo
    */
     

    /* Utilizza la distrutturazione degli oggetti per estrarre 
    il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta` non è fornita,
     dovrebbe avere un valore predefinito di `30` */
     
   /*   const persona = {
        nome: "Bob"
    };
       const {nome, eta = 30}= persona;
       console.log(nome, eta);
     /* 
     variante
     const etaDefault=30
     const persona={
        nome:Bob,
     };
     const{nome, eta =etaDefault}=persona
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
presentati(persona); 

variante
 const persona = {
    nome: "Jane",
    occupazione: "sviluppatrice"
 };
 const presentati=({nome, occupazione})=>{
    console.log(`ciao, sono ${nome} e sono una ${occupazione}`)
 }
 presentati(persona)




*/





/* Hai ricevuto una risposta JSON da un database 
contenente informazioni su libri e loro autori. 
Analizza il JSON e usa la distrutturazione degli 
oggetti per estrarre e registrare le seguenti 
informazioni per ogni libro: titolo, nome e cognome 
dell'autore, e il numero di pagine se il libro ne ha più di 300. */

/* const response=`
[
    {
        "title": "Il Grande Gatsby",
        "author": {
            "firstName": "F. Scott",
            "lastName": "Fitzgerald"
        },
        "details": {
            "pages": 180,
            "language": "Inglese"
        }
    },
    {
        "title": "Guerra e Pace",
        "author": {
            "firstName": "Lev",
            "lastName": "Tolstoj"
        },
        "details": {
            "pages": 1225,
            "language": "Russo"
        }
    },
    {
        "title": "1984",
        "author": {
            "firstName": "George",
            "lastName": "Orwell"
        },
        "details": {
            "pages": 328,
            "language": "Inglese"
        }
    }
]
`;
const books =JSON.parse(response);
const [
    {title:title1, author:{
        firstName:firstName1, lastName:lastName1
    }, details:{pages:pages1}},
    {title:title2, author: {
        firstName:firstName2, lastName:lastName2
    }, details:{pages:pages2}},
    {title:title3, author: {
        firstName:firstName3, lastName:lastName3
    }, details:{pages:pages3}}
]=books;
/* questo equivale a fare questo */
/*  const titl1e=books[0].title;
const firstName1=books[0].author.firstName;
const lastName1=books[0].author.lastName;
const pages1=books[0].details.pages;
 
for(let i=0; i<books.length; i++){
    const { title, author:{firstName, lastName},
    details:{pages} }= books[i]
    const stringaPagine= pages>300 ? ` e ha ${pages} pagine` :'';
    const msg= `il libro ${title}e stato scritto da ${firstName} ${lastName}${stringaPagine}`;
    console.log(msg);
    
} */ 

/* Dato il JSON degli utenti, scrivi una funzione che distruttura ogni oggetto 
utente per estrarre il nome, l'email e l'indirizzo dell'utente. 
Se l'indirizzo non è fornito, 
la funzione dovrebbe assegnare un valore predefinito di "Indirizzo non fornito".
 Registra le informazioni estratte per ogni utente. */

/* const response = `

[
    {
        "name": "Alice",
        "email": "alice@example.com",
        "address": "123 Via Acero, Meraviglia"
    },
    {
        "name": "Bob",
        "email": "bob@example.com"
    },
    {
        "name": "Charlie",
        "email": "charlie@example.com",
        "address": "456 Via Olmo, Sognilandia"
    }
]
`;

const utenti=JSON.parse(response);
const addressPredefinito="indirizzo fornito"
const valoriUtente= ({name, email, address=addressPredefinito}) =>{
console.log(`${name} con email${email} vive a ${address}`);
}
for(let i=0; i<utenti.length; i++){
     valoriUtente(utenti[i]);

} */
/* 
Hai ricevuto una stringa JSON contenente un array di prodotti con i loro prezzi 
e quantità. Scrivi una funzione che analizza il JSON e calcola il valore totale 
di ogni prodotto (prezzo moltiplicato per la quantità). 
Utilizza la distrutturazione degli oggetti per estrarre le 
proprietà necessarie. Quindi, registra il nome del prodotto e il suo valore totale. */

/* const response=`
[
    {
        "product": "Laptop",
        "price": 1200,
        "quantity": 5
    },
    {
        "product": "Telefono",
        "price": 500,
        "quantity": 10
    },
    {
        "product": "Tablet",
        "price": 750,
        "quantity": 3
    }
]
`;


const totaleProdotti =(stringaJson)=>{
const prodotti =JSON.parse(stringaJson);  
let totale=0;

for(let i=0; i<prodotti.length; i++){
    const {product, price, quantity} =prodotti[i];
    const totaleparziale=price*quantity;
    totale+=totaleparziale
    console.log(`il prezzo totale del ${product} e ${totaleparziale}`);
    }
    console.log(`il totale dei prodotti e ${totale}`)

}


totaleProdotti(response); */