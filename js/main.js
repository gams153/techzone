// Saudação dinâmica na home
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('saudacao')) {
    const saudacoes = [
      "Hoje temos promoções em notebooks!",
      "Lançamento: novos roteadores Wi-Fi 6E!",
      "Headsets com cancelamento de ruído em oferta!"
    ];
    const random = saudacoes[Math.floor(Math.random() * saudacoes.length)];
    document.getElementById('saudacao').textContent += ` ${random}`;
  }

  // Detalhes do produto (modal)
  document.querySelectorAll('.btn-detalhes').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('.produto');
      const id = card.dataset.id;

      const produtos = {
        1: { nome: "Celular muito tecnologico", desc: "256GB, câmera 48MP, titânio." },
        2: { nome: "MacBook Air M3", desc: "13\", 16GB RAM, 512GB SSD." },
        3: { nome: "Roteador wifi", desc: "Dual Band, 1.8Gbps, 4 portas"},
        4: { nome: "Monitor 4K 27\"", desc: "Monitor 4K 27\", IPS, 60Hz, HDMI/DisplayPort"},
        5: { nome: "Headset Gamer", desc: "Cancelamento de ruído, RGB"},
        6: { nome: "Switch 8 Portas", desc: "Gigabit, Gerenciável, PoE"}
      };

      const p = produtos[id];
      document.getElementById('nomeProduto').textContent = p.nome;
      document.getElementById('descricaoProduto').textContent = p.desc;

      new bootstrap.Modal(document.getElementById('modalDetalhes')).show();
    });
  });

  // Formulário de contato
  const form = document.getElementById('formContato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const nome = document.getElementById('nome').value.trim();
      const interesse = document.getElementById('interesse').value;

      const msgDiv = document.getElementById('mensagemRetorno');
      msgDiv.className = 'mt-4 alert alert-success';
      msgDiv.textContent = `Obrigado, ${nome}! Recebemos sua mensagem sobre ${interesse} e entraremos em contato em breve.`;
      msgDiv.style.display = 'block';

      form.reset();
    });
  }
});