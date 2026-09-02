console.log("🌸 Site da Mel carregado com amor! 💕");

// Efeito de boas-vindas
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.header h1');
    
    // Pequena animação ao carregar
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        title.style.transition = 'all 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 300);
    
    console.log('💖 Tudo pronto para a Mel!');
    
    // Inicializa os áudios
    initAudios();
});

// Mensagens que mudam a cada visita
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

// DATAS ESPECIAIS
const dataConhecidos = new Date('2025-05-18');
const dataNamoro = new Date('2025-10-11');
const hoje = new Date();

// Calcular dias
const diffConhecidos = Math.floor((hoje - dataConhecidos) / (1000 * 60 * 60 * 24));
const diffNamoro = Math.floor((hoje - dataNamoro) / (1000 * 60 * 60 * 24));

// Atualizar o contador
const diasConhecidosEl = document.getElementById('dias-conhecidos');
const diasNamoroEl = document.getElementById('dias-namoro');

if (diasConhecidosEl) diasConhecidosEl.textContent = diffConhecidos;
if (diasNamoroEl) diasNamoroEl.textContent = diffNamoro;

// Mensagem especial baseada no tempo de namoro
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

// BOTÃO SURPRESA
const btnSurpresa = document.getElementById('btn-surpresa');
const mensagemSurpresa = document.getElementById('mensagem-surpresa');

if (btnSurpresa && mensagemSurpresa) {
    btnSurpresa.addEventListener('click', function(e) {
        e.preventDefault();
        if (mensagemSurpresa.style.display === 'none' || mensagemSurpresa.style.display === '') {
            mensagemSurpresa.style.display = 'block';
            this.textContent = '💕 Esconder mensagem';
            // Rola suavemente até a mensagem (mobile friendly)
            setTimeout(() => {
                mensagemSurpresa.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'nearest'
                });
            }, 100);
        } else {
            mensagemSurpresa.style.display = 'none';
            this.textContent = '🎀 Clique aqui';
        }
    });
}

// INICIALIZA OS ÁUDIOS
function initAudios() {
    const audios = document.querySelectorAll('audio');
    
    audios.forEach((audio, index) => {
        // Previne que o áudio seja carregado automaticamente em celular
        audio.preload = 'metadata';
        
        // Remove o atributo autoplay se existir
        audio.removeAttribute('autoplay');
        
        // Adiciona evento de play
        audio.addEventListener('play', () => {
            console.log(`🎵 Tocando áudio ${index + 1} para a Mel! 💕`);
            // Pausa outros áudios que estejam tocando
            audios.forEach((otherAudio, otherIndex) => {
                if (otherIndex !== index && !otherAudio.paused) {
                    otherAudio.pause();
                }
            });
        });
        
        // Adiciona evento de pause
        audio.addEventListener('pause', () => {
            console.log(`⏸️ Áudio ${index + 1} pausado`);
        });
        
        // Adiciona evento de erro
        audio.addEventListener('error', (e) => {
            console.error(`❌ Erro no áudio ${index + 1}:`, e);
            // Tenta recarregar em caso de erro
            setTimeout(() => {
                audio.load();
            }, 1000);
        });
    });
}

// EFEITO DE CHUVA DE CORAÇÕES
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

// Adiciona a animação no CSS (se não existir)
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

// Cria corações - menos frequente em mobile para performance
let heartInterval;
let heartCount = 0;
const MAX_HEARTS = 30; // Limita para não sobrecarregar

function startHearts() {
    // Limpa intervalos anteriores
    if (heartInterval) {
        clearInterval(heartInterval);
    }
    
    // Verifica se é mobile para ajustar frequência
    const isMobile = window.innerWidth <= 768;
    const interval = isMobile ? 3500 : 2500;
    
    heartInterval = setInterval(() => {
        if (heartCount < MAX_HEARTS) {
            criarCoracao();
            heartCount++;
        } else {
            // Reinicia o contador após um tempo
            setTimeout(() => {
                heartCount = 0;
            }, 10000);
        }
    }, interval);
}

// Inicia os corações
startHearts();

// Reinicia os corações quando a janela é redimensionada (ex: girar o celular)
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        startHearts();
    }, 500);
});

// Cria alguns corações imediatamente ao carregar
for (let i = 0; i < 3; i++) {
    setTimeout(criarCoracao, i * 400 + 200);
}

// LOGS DE INFORMAÇÃO
console.log('💕 Datas carregadas:');
console.log('📅 Conhecidos: ' + diffConhecidos + ' dias');
console.log('💍 Namoro: ' + diffNamoro + ' dias');

// Verifica se é mobile
const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);
if (isMobile) {
    console.log('📱 Modo mobile ativado!');
    document.body.classList.add('mobile-mode');
} else {
    console.log('💻 Modo desktop ativado!');
}

// Previne recarga acidental com dois dedos (iOS)
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});

console.log('✨ Site pronto para a Mel! 💕');