// Seleciona os elementos do HTML
const botao = document.getElementById('btn-gravador');
const status = document.getElementById('status-gravacao');

// Cores usadas na troca de estado
const corOriginal = "#3498db"; // azul
const corGravando = "#e74c3c"; // vermelho

// Textos usados na troca de estado
const textoOriginal = "🎤 Clique e Segure para Gravar";
const textoGravando = "🔴 Gravando... Não solte!";

// Função chamada ao INICIAR a gravação (mouse ou toque)
function iniciarGravacao() {
    botao.style.backgroundColor = corGravando; // fica vermelho
    botao.textContent = textoGravando;
    status.textContent = "Status: Capturando áudio...";
}

// Função chamada ao FINALIZAR a gravação (mouse ou toque)
function finalizarGravacao() {
    botao.style.backgroundColor = corOriginal; // volta pro azul
    botao.textContent = textoOriginal;
    status.textContent = "Status: Gravação concluída e enviada!";
}

// --- Eventos de MOUSE (desktop) ---
botao.addEventListener('mousedown', iniciarGravacao);
botao.addEventListener('mouseup', finalizarGravacao);

// --- Eventos de TOQUE (mobile/tablet) ---
botao.addEventListener('touchstart', iniciarGravacao);
botao.addEventListener('touchend', finalizarGravacao);