console.log("🌸 Site da Mel carregado com amor! 💕");

// Efeito de boas-vindas
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.header h1');
    
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        title.style.transition = 'all 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 300);
    
    console.log('💖 Tudo pronto para a Mel!');
    
    initAudios();
    carregarDatas();
    configurarBotaoSurpresa();
});

// ============================================
// CARREGAR DATAS CORRETAMENTE
// ============================================
function carregarDatas() {
    // 🔥 DATAS CORRIGIDAS - Coloque as datas corretas aqui!
    // Formato: ANO-MÊS-DIA (ex: 2025-05-18)
    const dataConhecidos = new Date('2025-05-18');  // ← Coloque a data que conheceu ela
    const dataNamoro = new Date('2025-10-11');      // ← Coloque a data do namoro
    const hoje = new Date();
    
    // Calcular dias (se a data for futura, vai dar negativo, mas vamos tratar)
    const diffConhecidos = Math.floor((hoje - dataConhecidos) / (1000 * 60 * 60 * 24));
    const diffNamoro = Math.floor((hoje - dataNamoro) / (1000 * 60 * 60 * 24));
    
    // Atualizar o contador
    const diasConhecidosEl = document.getElementById('dias-conhecidos');
    const diasNamoroEl = document.getElementById('dias-namoro');
    
    // Se a data for futura (diff negativo), mostra 0
    if (diasConhecidosEl) {
        diasConhecidosEl.textContent = diffConhecidos < 0 ? 0 : diffConhecidos;
    }
    if (diasNamoroEl) {
        diasNamoroEl.textContent = diffNamoro < 0 ? 0 : diffNamoro;
    }
    
    // Mensagem especial
    function getMensagemAmor(dias) {
        if (dias < 0) return '💕 Em breve começa essa história linda!';
        if (dias < 7) return '🌱 Primeira semana de muito amor!';
        if (dias < 30) return '🌷 Começando essa linda história...';
        if (dias < 90) return '🌸 O amor floresce a cada dia!';
        if (dias < 180) return '💕 Cada dia mais apaixonado!';
        if (dias < 365) return '✨ Quase um ano de puro amor!';
        if (dias < 730) return '🌟 Já é uma história de amor pra vida toda!';
        return '💖 Amor eterno! Vocês são lindos juntos!';
    }
    
    const mensagemAmorEl = document.getElementById('mensagem-amor');
    if (mensagemAmorEl) {
        mensagemAmorEl.textContent = getMensagemAmor(diffNamoro);
    }
    
    console.log('📅 Conhecidos: ' + (diffConhecidos < 0 ? 0 : diffConhecidos) + ' dias');
    console.log('💍 Namoro: ' + (diffNamoro < 0 ? 0 : diffNamoro) + ' dias');
}

// ============================================
// CONFIGURAR BOTÃO SURPRESA
// ============================================
function configurarBotaoSurpresa() {
    const btnSurpresa = document.getElementById('btn-surpresa');
    const mensagemSurpresa = document.getElementById('mensagem-surpresa');
    
    if (btnSurpresa && mensagemSurpresa) {
        // Remove qualquer evento anterior
        btnSurpresa.replaceWith(btnSurpresa.cloneNode(true));
        
        // Pega o novo botão
        const novoBtn = document.getElementById('btn-surpresa');
        const novaMensagem = document.getElementById('mensagem-surpresa');
        
        novoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (novaMensagem.style.display === 'none' || novaMensagem.style.display === '') {
                novaMensagem.style.display = 'block';
                this.textContent = '💕 Esconder mensagem';
                
                // Rola até a mensagem
                setTimeout(() => {
                    novaMensagem.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center'
                    });
                }, 100);
            } else {
                novaMensagem.style.display = 'none';
                this.textContent = '🎀 Clique aqui para uma surpresa';
            }
        });
    }
}

// ============================================
// MENSAGENS QUE MUDAM A CADA VISITA
// ============================================
const mensagens = [
    'Te amo mais que a Hello Kitty ama laços 💕',
    'Você é meu raio de sol na escuridão 🌟',
    'Saudade apertando aqui 🥺',
    'Mel, você é perfeita do jeitinho que é ✨',
    'Seu sorriso ilumina meu dia 🌸',
    'Você é a pessoa mais linda que eu conheci 💗',
    'Cada dia com você é um presente 🎁',
    'Meu coração bate mais forte por você 💓',
    'Você é a minha pessoa favorita 🌷',
    'Amo você mais que pizza 🍕❤️'
];

const msgAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    subtitle.textContent = msgAleatoria;
}

// ============================================
// INICIALIZA OS ÁUDIOS
// ============================================
function initAudios() {
    const audios = document.querySelectorAll('audio');
    
    audios.forEach((audio, index) => {
        audio.preload = 'metadata';
        audio.removeAttribute('autoplay');
        
        audio.addEventListener('play', () => {
            console.log(`🎵 Tocando áudio ${index + 1} para a Mel! 💕`);
            audios.forEach((otherAudio, otherIndex) => {
                if (otherIndex !== index && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        });
        
        audio.addEventListener('error', (e) => {
            console.error(`❌ Erro no áudio ${index + 1}:`, e);
        });
    });
}

// ============================================
// EFEITO DE CHUVA DE CORAÇÕES
// ============================================
function criarCoracao() {
    const coracao = document.createElement('div');
    const emojis = ['💕', '❤️', '💗', '💖', '🌸', '✨', '💝', '💘'];
    coracao.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    coracao.style.position = 'fixed';
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.top = '-50px';
    coracao.style.fontSize = (Math.random() * 18 + 14) + 'px';
    coracao.style.opacity = (Math.random() * 0.25 + 0.1);
    coracao.style.animation = 'cairCoracao ' + (Math.random() * 3 + 2.5) + 's linear forwards';
    coracao.style.pointerEvents = 'none';
    coracao.style.zIndex = '999';
    coracao.style.willChange = 'transform, opacity';
    document.body.appendChild(coracao);
    
    setTimeout(() => {
        if (coracao.parentNode) {
            coracao.remove();
        }
    }, 6000);
}

// Adiciona a animação no CSS
if (!document.querySelector('#heart-style')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'heart-style';
    styleSheet.textContent = `
        @keyframes cairCoracao {
            0% { 
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.25;
            }
            100% { 
                transform: translateY(110vh) rotate(720deg) scale(0.3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(styleSheet);
}

// Inicia os corações
let heartInterval;
let heartCount = 0;
const MAX_HEARTS = 30;

function startHearts() {
    if (heartInterval) {
        clearInterval(heartInterval);
    }
    
    const isMobile = window.innerWidth <= 768;
    const interval = isMobile ? 3500 : 2500;
    
    heartInterval = setInterval(() => {
        if (heartCount < MAX_HEARTS) {
            criarCoracao();
            heartCount++;
        } else {
            setTimeout(() => {
                heartCount = 0;
            }, 10000);
        }
    }, interval);
}

startHearts();

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        startHearts();
    }, 500);
});

// Cria alguns corações imediatamente
for (let i = 0; i < 3; i++) {
    setTimeout(criarCoracao, i * 400 + 200);
}

console.log('✨ Site pronto para a Mel! 💕');