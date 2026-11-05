const widget = document.querySelector('.chat-widget');
const toggle = document.querySelector('.chat-toggle');

toggle.addEventListener('click', () => {
  const aberto = widget.classList.toggle('open');
  toggle.setAttribute('aria-expanded', aberto);
});

// fecha ao clicar fora do widget
document.addEventListener('click', (e) => {
  if (!widget.contains(e.target)) {
    widget.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }
});

// ===== Menu hambúrguer (telas até 763px) =====
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function fecharMenu() {
  menu.classList.remove('open');
  menuToggle.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', false);
  menuToggle.setAttribute('aria-label', 'Open menu');
}

menuToggle.addEventListener('click', () => {
  const aberto = menu.classList.toggle('open');
  menuToggle.classList.toggle('open', aberto);
  menuToggle.setAttribute('aria-expanded', aberto);
  menuToggle.setAttribute('aria-label', aberto ? 'Close menu' : 'Open menu');
});

// fecha ao clicar em um link do menu
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', fecharMenu));

// fecha ao clicar fora do menu
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) fecharMenu();
});

// fecha com a tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharMenu();
});

// se a tela voltar a ficar grande, garante o menu fechado
// (o 764 aqui precisa ser o mesmo número do @media max-width: 763px do CSS, mais 1)
window.matchMedia('(min-width: 764px)').addEventListener('change', (e) => {
  if (e.matches) fecharMenu();
});

// ===== Efeito de aparecer ao rolar a página =====
// a classe "js" só existe se o JavaScript estiver rodando; assim o conteúdo
// nunca fica escondido caso o script falhe
document.documentElement.classList.add('js');

// observa os elementos do seletor e coloca a classe "visible" quando eles
// entram na tela (só na primeira vez)
function observarAoRolar(seletor, opcoes) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // anima só uma vez
      }
    });
  }, opcoes);

  document.querySelectorAll(seletor).forEach((el) => observer.observe(el));
}

// títulos e textos soltos: aparecem quando 15% deles já está na tela
observarAoRolar('.reveal', { threshold: 0.15 });

// passos da seção "offer": cada um acende quando o topo dele passa de uma
// "linha" imaginária a 60% da altura da tela (o -40% abaixo faz isso)
observarAoRolar('.offer-step', { threshold: 0, rootMargin: '0px 0px -40% 0px' });

// ===== Linha da linha do tempo que vai se preenchendo com a rolagem =====
const passos = [...document.querySelectorAll('.offer-step')];
let atualizando = false;

function atualizarLinha() {
  const linha = window.innerHeight * 0.6; // a mesma "linha" de 60% usada acima

  passos.forEach((passo, i) => {
    const proximo = passos[i + 1];
    if (!proximo) return; // o último passo não tem linha para baixo

    const a = passo.querySelector('.offer-number').getBoundingClientRect();
    const b = proximo.querySelector('.offer-number').getBoundingClientRect();

    // 0 = a linha ainda não chegou na bolinha deste passo
    // 1 = a linha já chegou na bolinha do próximo passo
    const progresso = (linha - (a.top + a.height / 2)) / (b.top - a.top);
    passo.style.setProperty('--seg', Math.min(1, Math.max(0, progresso)));
  });

  atualizando = false;
}

function pedirAtualizacao() {
  if (!atualizando) {
    atualizando = true;
    requestAnimationFrame(atualizarLinha); // no máximo uma vez por quadro
  }
}

if (passos.length) {
  window.addEventListener('scroll', pedirAtualizacao, { passive: true });
  window.addEventListener('resize', pedirAtualizacao);
  atualizarLinha();
}