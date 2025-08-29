//seleziono il contenitore dove inserire la lista

const container = document.getElementById("lista-container");

//creo una lista non ordinata

const ul = document.createElement("ul");

//creazione di un array degli elementi per la lista

const elementi = ["primo", "secondo", "terzo", "quarto", "quinto"];

//per ogni elemento, crea una <li> e aggiungilo alla <ul>

elementi.forEach(function(item){
    const li = document.createElement("li"); //crea un nuovo <li>
    li.textContent = item; //imposta il testo

    //extra aggiungo effetto con js hover
    li.addEventListener("mouseenter", function(){
        li.style.color = "tomato";
        li.style.fontWeight = "bold";
        li.style.cursor = "pointer";
        li.style.transition = "color 0.3s ease";
    });

    li.addEventListener("mouseleave", function(){
        li.style.color = "blue";
        li.style.fontWeight = "italic";
    })
    ul.appendChild(li); //aggiunge <li> all interno di <ul>
 
    
});

//aggiungo la <ul> completa all interno di container

container.appendChild(ul);