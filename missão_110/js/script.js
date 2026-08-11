//função para registrar logs no painel
const painellog = document.getElementById('log-painel');

function registrarLog(mensagem) {

  const novalinha = document.createElement('div');
    novalinha.textContent = `[${new Date().toLocaleTimeString()}] ${mensagem}`;
    painellog.appendChild(novalinha);
}

//eventos de mouse : click
const btnclique = document.getElementById('btn-clique');
const areaMouse = document.getElementById('area-mouse');

btnclique.addEventListener('click', function() {
    registrarLog("evento de mouse: evento 'click'disparado");
});

// eventos de mouse : mouseenter
areaMouse.addEventListener('mouseenter', function() {
    areaMouse.textContent = "mouse entrou na area";
    areaMouse.style.backgroundColor = "green";
    registrarLog("evento de mouse: evento 'mouseenter' disparado");
});


// eventos de mouse : mouseleave
areaMouse.addEventListener('mouseleave', function() {
    areaMouse.textContent = "mouse saiu da area";
    areaMouse.style.backgroundColor = "lightgray";
    registrarLog("evento de mouse: evento 'mouseleave' disparado");
});

//eventos de teclado : keydown
const campoTeclado = document.getElementById('campo-teclado');
campoTeclado.addEventListener('keydown', function(event) {
    registrarLog("[TECLA LIBERADA]teclado: evento 'keydown' disparado");
});

//eventos de formulário : envio
const formulario = document.getElementById('meu-formulario');
const campoinput = document.getElementById('campo-input');

campoinput.addEventListener('input', function() {
    registrarLog(`[INPUT] Formulário: evento "input" disparado -> valor: ${campoinput.value}`);
});

//eventos de formulário : submit(acesso ao evento de envio via id do formulário)
meuformulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário
    registrarLog("[SUBMIT]Formulário: evento 'submit' disparado"); 
     });

    // isso vai funciona`, mais vai captura apenas o clicque no botão de envio, não o envio do formulário si enter, por exemplo. Para capturar o evento de envio do formulário, e melhor usar o evento `submit` no propio formulário.
//const meuformulario = document.getElementById('meu-formulario');
//meuformulario.addEventListener('submit', function(event) {
  //  event.preventDefault(); // Impede o envio do formulário
    //registrarLog("[SUBMIT]Formulário: evento 'submit' disparado"); 
    // });



const meuformulario = document.getElementById('meu-formulario');
meuformulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    registrarLog("[SUBMIT]Formulário: evento 'submit' disparado");
    
});
