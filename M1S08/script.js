 // Seleciona o elemento pelo ID
 let meuElemento = document.getElementById("meuElemento");

 // Altera a cor de fundo
 meuElemento.style.backgroundColor = "blue";
 
 // Adiciona a nova classe ao elemento
 meuElemento.classList.add("novaClasse");

 // Remove a classe do elemento
 meuElemento.classList.remove("minhaClasse");

 // Adiciona o novo atributo ao elemento
 meuElemento.setAttribute("data-novo-atributo", "meu-valor");

 // Remove o atributo do elemento
 meuElemento.removeAttribute("data-novo-atributo");

 // Seleciona todos os elementos pela classe
 let elemento = document.getElementsByClassName("minhaClasse");

 // Itera sobre os elementos e altera o texto
for (let i = 0; i < elementos.length; i++) {
  elementos[i].innerText = "Novo texto para o elemento " + (i + 1);
}

 // Cria um novo elemento parágrafo
 let novoParagrafo = document.createElement("p");

 // Define o texto para o novo parágrafo
 novoParagrafo.innerText = "Este é um novo parágrafo adicionado dinamicamente.";

 // Seleciona o elemento pai pelo ID
 let elementoPai = document.getElementById("elementoPai");

 // Adiciona o novo parágrafo como filho do elemento pai
 elementoPai.appendChild(novoParagrafo);
 
 // Remove o elemento filho do elemento pai
 elementoPai.removeChild(paragrafoFilho);

 // Seleciona todos os elementos pela classe
 let elementos = document.getElementsByClassName("minhaClasse");

 // Altera o estilo de cada elemento
 for (let i = 0; i < elementos.length; i++) {
   elementos[i].style.backgroundColor = "blue";
   elementos[i].style.color = "white"; // Adicionando outro estilo para exemplo
 }
