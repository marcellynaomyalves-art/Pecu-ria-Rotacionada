document.getElementById('btnSimular').addEventListener('click', function() {
    const piquetes = parseInt(document.getElementById('piquetes').value);
    
    // Validação de segurança
    if (isNaN(piquetes) || piquetes < 1) {
        alert("Por favor, digite um número válido de piquetes (maior que zero).");
        return;
    }

    // Elementos da Interface DOM
    const areaResultados = document.getElementById('resultados');
    const valProducao = document.getElementById('valProducao');
    const txtStatusProducao = document.getElementById('txtStatusProducao');
    const barraProducao = document.getElementById('barraProducao');

    const valSustentabilidade = document.getElementById('valSustentabilidade');
    const txtStatusSust = document.getElementById('txtStatusSust');
    const barraSustentabilidade = document.getElementById('barraSustentabilidade');

    const divMensagem = document.getElementById('feedbackMensagem');

    // Torna a seção oculta visível
    areaResultados.style.display = 'block';

    // Cálculos lógicos com tetos de segurança (Máximo 100%)
    let porcProducao = Math.min(piquetes * 8, 100); 
    let porcSustentabilidade = Math.min(piquetes * 10, 100); 
    
    if(piquetes === 1) {
        porcProducao = 10; 
        porcSustentabilidade = 5;
    }

    // Cálculo proporcional de Arrobas (@) por hectare/ano
    let arrobas = Math.round((porcProducao / 100) * 15);
    if (arrobas < 1) arrobas = 1;

    // Atualiza os indicadores de texto e os gráficos de barra
    valProducao.innerText = arrobas + " @/ha/ano";
    valSustentabilidade.innerText = porcSustentabilidade + "%";

    barraProducao.style.width = porcProducao + "%";
    barraSustentabilidade.style.width = porcSustentabilidade + "%";

    // Estrutura de Decisão para as Cores e Relatórios Finais
    if (piquetes === 1) {
        barraProducao.style.backgroundColor = '#ef4444';
        barraSustentabilidade.style.backgroundColor = '#ef4444';
        txtStatusProducao.innerText = "Produtividade Crítica";
        txtStatusSust.innerText = "Solo Degradado / Alta Emissão de CO₂";
        
        divMensagem.className = "mensagem perigo";
        divMensagem.innerHTML = "<strong>Cenário Extensivo Crítico:</strong> Manter o gado em um único pasto gigante causa o superpastoreio. O boi compacta a terra com os cascos, a grama morre e o solo exposto sofre erosão. A produção cai e o meio ambiente é prejudicado.";
    } 
    else if (piquetes > 1 && piquetes <= 7) {
        barraProducao.style.backgroundColor = '#f59e0b';
        barraSustentabilidade.style.backgroundColor = '#f59e0b';
        txtStatusProducao.innerText = "Produtividade Moderada";
        txtStatusSust.innerText = "Solo em Recuperação Lenta";
        
        divMensagem.className = "mensagem alerta";
        divMensagem.innerHTML = "<strong>Manejo de Transição:</strong> Você começou a dividir a propriedade. Isso dá um pequeno alívio para o capim crescer, melhorando a engorda do boi, mas o tempo de descanso ainda não é o ideal para neutralizar as emissões de gases de efeito estufa.";
    } 
    else {
        barraProducao.style.backgroundColor = '#10b981';
        barraSustentabilidade.style.backgroundColor = '#10b981';
        txtStatusProducao.innerText = "Alta Performance (Agro Forte)";
        txtStatusSust.innerText = "Carbono Neutro (Futuro Sustentável)";
        
        divMensagem.className = "mensagem sucesso";
        divMensagem.innerHTML = "<strong>Equilíbrio Sustentável Perfeito!</strong> Ao adotar o sistema rotacionado intensivo, o capim descansa o tempo exato para recuperar suas folhas e criar raízes profundas. Essas raízes sugam o carbono da atmosfera e o fixam no solo. O produtor ganha mais dinheiro na mesma área sem desmatar nenhuma árvore!";
    }
});
