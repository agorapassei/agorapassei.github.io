/* ===================== CURRICULO: Estudo Certo =====================
   Dados especificos deste "produto" - materias, paginas, apostilas, tema e
   configuracao padrao de sincronizacao. O motor (index.html/engine) le
   tudo isso de window.CURRICULO e nao tem nada fixo de Petrobras nele.
   ========================================================================= */
window.CURRICULO = {
  storeKey: "estudo-certo-v1",
  storeKeyLegacy: "petrobras-study-tracker-v1",
  tema: {
    nome: "Estudo Certo",
    corPrimaria: "#046A38",
    corSecundaria: "#FCD116"
  },
  subjects: [
  { name:"Português", aulas:["00 - Ortografia e Acentuação","01 - Classes de Palavras I","02 - Preposição e Conjunção","03 - Pronomes","04 - Verbos","05 - Correlação e Vozes Verbais","06 - Sintaxe da Oração","07 - Coordenação entre Orações","08 - Pontuação","09 - Concordância Verbal e Nominal","10 - Regência e Crase","11 - Semântica","12 - Coesão Textual","13 - Interpretação de Textos","14 - Resumo"] },
  { name:"Administração", aulas:["00 - Conceitos Introdutórios","01 - Estratégia Empresarial I","02 - Estratégia Empresarial II","03 - Estruturas Organizacionais","04 - Liderança","05 - Cultura Organizacional","06 - Processo Decisório","07 - Gerenciamento de Projetos","08 - Equipe","09 - Administração de RH","10 - Desempenho","11 - Desenvolvimento de RH","12 - Gestão do Conhecimento","13 - Carreira e Sucessão","14 - Remuneração e Benefícios","15 - Conflitos","16 - Negociação","17 - Marketing I","18 - Marketing II","19 - Marketing III"] },
  { name:"Administração de Materiais", aulas:["00 - Intro Administração de Materiais","01 - Classificação de Materiais","02 - Compras","03 - Estoques I","04 - Estoques II","05 - Armazenagem e Movimentação","06 - Transportes e Distribuição","07 - Logística e Contratos","Extra - Questões Cesgranrio"] },
  { name:"Administração de Sistemas de Informação", aulas:["00 - Conceitos Básicos BD","01 - Modelagem Relacional","02 - SSD, BI e Data Warehouse","03 - Windows 10","04 - Linux","05 - Processo Decisório","06 - Gestão da Tecnologia","07 - Sistemas de Informação"] },
  { name:"Contabilidade", aulas:["00 - Conceitos e Objetivos","01 - Situação Líquida e Patrimônio I","01B - Situação Líquida e Patrimônio II","02 - Plano de Contas I","02B - Plano de Contas II","03 - Regime de Competência e Caixa","04 - Balanço: Ativo","05 - Balanço: Estoques","06 - Depreciação e Exaustão","07 - Balanço: Passivo","08 - Balanço: Operações Diversas","09 - Patrimônio Líquido I","10 - Patrimônio Líquido II","11 - DRE","12 - DLPA e DMPL","13 - Fluxo de Caixa","14 - Valor Adicionado","15 - Princípios Contábeis","16 - CPC 00 Estrutura Conceitual","17 - Contabilidade Gerencial","18 - Contabilidade de Custos I","19 - Contabilidade de Custos II","20 - Governança, Compliance e Gestão de Riscos"] },
  { name:"Estatística", aulas:["00 - Apresentação de Dados","01 - Medidas de Posição: Médias","02 - Medidas Separatrizes","03 - Medidas de Posição: Moda","04 - Medidas de Variabilidade","05 - Assimetria e Curtose","06 - Desigualdade e Concentração","07 - Números-Índices","08 - Análise Combinatória","09 - Probabilidade"] },
  { name:"Finanças, Orçamento e Viabilidade de Projetos", aulas:["01 - Finanças Básicas","02 - Adm. Financeira de Curto Prazo","03 - Adm. Financeira de Longo Prazo"] },
  { name:"Inglês", aulas:["00 - Interpretação e Cognatos","01 - Substantivos e Pronomes","02 - Adjetivos e Advérbios","03 - Verbos Frasais","04 - Tempos Verbais I","05 - Tempos Verbais II","06 - Idioms","Extra - Questões CESGRANRIO"] },
  { name:"Legislação", aulas:["01 - Lei 13.303 (Estatuto Jurídico)","02 - Lei Compl. 123 e Lei Anticorrupção"] },
  { name:"Lógica", aulas:["00 - Estruturas Lógicas","01 - Equivalências Lógicas","02 - Proposições Quantificadoras","03 - Associação Lógica","04 - Lógica de Argumentação","05 - Verdades e Mentiras","06 - Orientação Temporal","07 - Orientação Espacial","08 - Problemas Aritméticos","09 - Equações e Inequações","10 - Estudo das Funções","11 - Função Afim","12 - Função Quadrática","13 - Função Exponencial","14 - Função Logarítmica","15 - Progressão Aritmética e Geométrica"] },
  { name:"Matemática Financeira", aulas:["00 - Regra de Três","01 - Porcentagem","02 - Juros Simples","03 - Juros Compostos","04 - Descontos","05 - Taxas","06 - Equivalência de Capitais","07 - Análise de Investimentos","08 - Sistemas de Amortização"] },
  { name:"Planejamento de Controle e Produção", aulas:["Única - PCP"] },
  { name:"Sustentabilidade e Responsabilidade Socioambiental", aulas:["01 - Sustentabilidade I","02 - Sustentabilidade II"] },
],
  pageTotals: [[{"total":123,"theory":65},{"total":96,"theory":57},{"total":100,"theory":41},{"total":106,"theory":36},{"total":114,"theory":68},{"total":34,"theory":25},{"total":67,"theory":40},{"total":78,"theory":46},{"total":144,"theory":49},{"total":163,"theory":55},{"total":129,"theory":40},{"total":110,"theory":29},{"total":119,"theory":23},{"total":230,"theory":73},{"total":69,"theory":69}],[{"total":112,"theory":48},{"total":180,"theory":88},{"total":174,"theory":74},{"total":180,"theory":109},{"total":153,"theory":70},{"total":144,"theory":83},{"total":136,"theory":84},{"total":220,"theory":131},{"total":147,"theory":95},{"total":163,"theory":105},{"total":168,"theory":102},{"total":126,"theory":101},{"total":130,"theory":75},{"total":78,"theory":44},{"total":112,"theory":68},{"total":110,"theory":50},{"total":56,"theory":30},{"total":104,"theory":104},{"total":73,"theory":4},{"total":99,"theory":54}],[{"total":165,"theory":36},{"total":235,"theory":43},{"total":251,"theory":81},{"total":181,"theory":37},{"total":157,"theory":38},{"total":177,"theory":47},{"total":132,"theory":33},{"total":146,"theory":37},{"total":3,"theory":1}],[{"total":113,"theory":67},{"total":165,"theory":66},{"total":152,"theory":76},{"total":142,"theory":111},{"total":145,"theory":108},{"total":126,"theory":126},{"total":44,"theory":30},{"total":59,"theory":31}],[{"total":43,"theory":31},{"total":33,"theory":24},{"total":37,"theory":26},{"total":78,"theory":45},{"total":44,"theory":16},{"total":131,"theory":61},{"total":84,"theory":45},{"total":110,"theory":60},{"total":101,"theory":52},{"total":71,"theory":32},{"total":62,"theory":35},{"total":70,"theory":28},{"total":96,"theory":42},{"total":102,"theory":57},{"total":55,"theory":24},{"total":104,"theory":40},{"total":59,"theory":26},{"total":31,"theory":20},{"total":86,"theory":64},{"total":80,"theory":27},{"total":82,"theory":25},{"total":87,"theory":25},{"total":169,"theory":87}],[{"total":158,"theory":76},{"total":100,"theory":74},{"total":128,"theory":87},{"total":99,"theory":39},{"total":141,"theory":72},{"total":77,"theory":32},{"total":56,"theory":28},{"total":114,"theory":52},{"total":120,"theory":80},{"total":179,"theory":72}],[{"total":72,"theory":38},{"total":92,"theory":47},{"total":79,"theory":34}],[{"total":97,"theory":83},{"total":143,"theory":128},{"total":104,"theory":93},{"total":119,"theory":102},{"total":87,"theory":76},{"total":102,"theory":89},{"total":121,"theory":98},{"total":43,"theory":33}],[{"total":111,"theory":91},{"total":64,"theory":50}],[{"total":175,"theory":129},{"total":148,"theory":81},{"total":46,"theory":22},{"total":53,"theory":5},{"total":126,"theory":79},{"total":98,"theory":16},{"total":155,"theory":27},{"total":124,"theory":7},{"total":138,"theory":68},{"total":100,"theory":58},{"total":93,"theory":50},{"total":118,"theory":67},{"total":124,"theory":69},{"total":75,"theory":50},{"total":144,"theory":69},{"total":92,"theory":37}],[{"total":99,"theory":11},{"total":105,"theory":36},{"total":131,"theory":52},{"total":149,"theory":52},{"total":86,"theory":43},{"total":78,"theory":38},{"total":154,"theory":58},{"total":210,"theory":62},{"total":155,"theory":86}],[{"total":162,"theory":105}],[{"total":95,"theory":54},{"total":110,"theory":58}]],
  apostilaFiles: [["Aula 00 - Ortografia e Acentuacao.pdf", "Aula 01 - Classes de Palavras I.pdf", "Aula 02 - Preposicao e Conjuncao.pdf", "Aula 03 - Pronomes.pdf", "Aula 04 - Verbos.pdf", "Aula 05 - Correlacao e Vozes Verbais.pdf", "Aula 06 - Sintaxe da Oracao.pdf", "Aula 07 - Coordenacao entre Oracoes.pdf", "Aula 08 - Pontuacao.pdf", "Aula 09 - Concordancia Verbal e Nominal.pdf", "Aula 10 - Regencia e Crase.pdf", "Aula 11 - Semantica.pdf", "Aula 12 - Coesao Textual.pdf", "Aula 13 - Interpretacao de Textos.pdf", "Aula 14 - Resumo.pdf"], ["Aula 00 - Conceitos Introdutorios.pdf", "Aula 01 - Estrategia Empresarial I.pdf", "Aula 02 - Estrategia Empresarial II.pdf", "Aula 03 - Estruturas Organizacionais.pdf", "Aula 04 - Lideranca.pdf", "Aula 05 - Cultura Organizacional.pdf", "Aula 06 - Processo Decisorio.pdf", "Aula 07 - Gerenciamento de Projetos.pdf", "Aula 08 - Equipe.pdf", "Aula 09 - Administracao de RH.pdf", "Aula 10 - Desempenho.pdf", "Aula 11 - Desenvolvimento de RH.pdf", "Aula 12 - Gestao do Conhecimento.pdf", "Aula 13 - Carreira e Sucessao.pdf", "Aula 14 - Remuneracao e Beneficios.pdf", "Aula 15 - Conflitos.pdf", "Aula 16 - Negociacao.pdf", "Aula 17 - Marketing I.pdf", "Aula 18 - Marketing II.pdf", "Aula 19 - Marketing III.pdf"], ["Aula 00 - Intro Administracao de Materiais.pdf", "Aula 01 - Classificacao de Materiais.pdf", "Aula 02 - Compras.pdf", "Aula 03 - Estoques I.pdf", "Aula 04 - Estoques II.pdf", "Aula 05 - Armazenagem e Movimentacao.pdf", "Aula 06 - Transportes e Distribuicao.pdf", "Aula 07 - Logistica e Contratos.pdf", "Aula Extra - Questoes Cesgranrio.pdf"], ["Aula 00 - Conceitos Basicos BD.pdf", "Aula 01 - Modelagem Relacional.pdf", "Aula 02 - SSD BI Data Warehouse.pdf", "Aula 03 - Windows 10.pdf", "Aula 04 - Linux.pdf", "Aula 05 - Processo Decisorio.pdf", "Aula 06 - Gestao da Tecnologia.pdf", "Aula 07 - Sistemas de Informacao.pdf"], ["Aula 00 - Conceitos e Objetivos.pdf", "Aula 01 - Situacao Liquida e Patrimonio I.pdf", "Aula 01B - Situacao Liquida e Patrimonio II.pdf", "Aula 02 - Plano de Contas I.pdf", "Aula 02B - Plano de Contas II.pdf", "Aula 03 - Regime de Competencia e Caixa.pdf", "Aula 04 - Balanco Ativo.pdf", "Aula 05 - Balanco Estoques.pdf", "Aula 06 - Depreciacao e Exaustao.pdf", "Aula 07 - Balanco Passivo.pdf", "Aula 08 - Balanco Operacoes Diversas.pdf", "Aula 09 - Patrimonio Liquido I.pdf", "Aula 10 - Patrimonio Liquido II.pdf", "Aula 11 - DRE.pdf", "Aula 12 - DLPA e DMPL.pdf", "Aula 13 - Fluxo de Caixa.pdf", "Aula 14 - Valor Adicionado.pdf", "Aula 15 - Principios Contabeis.pdf", "Aula 16 - CPC 00 Estrutura Conceitual.pdf", "Aula 17 - Contabilidade Gerencial.pdf", "Aula 18 - Contabilidade de Custos I.pdf", "Aula 19 - Contabilidade de Custos II.pdf", "Aula 20 - Governanca Compliance e Riscos.pdf"], ["Aula 00 - Apresentacao de Dados.pdf", "Aula 01 - Medidas de Posicao Medias.pdf", "Aula 02 - Medidas Separatrizes.pdf", "Aula 03 - Medidas de Posicao Moda.pdf", "Aula 04 - Medidas de Variabilidade.pdf", "Aula 05 - Assimetria e Curtose.pdf", "Aula 06 - Desigualdade e Concentracao.pdf", "Aula 07 - Numeros Indices.pdf", "Aula 08 - Analise Combinatoria.pdf", "Aula 09 - Probabilidade.pdf"], ["Aula 01 - Financas Basicas.pdf", "Aula 02 - Adm Financeira Curto Prazo.pdf", "Aula 03 - Adm Financeira Longo Prazo.pdf"], ["Aula 00 - Interpretacao e Cognatos.pdf", "Aula 01 - Substantivos e Pronomes.pdf", "Aula 02 - Adjetivos e Adverbios.pdf", "Aula 03 - Verbos Frasais.pdf", "Aula 04 - Tempos Verbais I.pdf", "Aula 05 - Tempos Verbais II.pdf", "Aula 06 - Idioms.pdf", "Extra - Questoes CESGRANRIO.pdf"], ["Aula 01 - Lei 13303 Estatuto Juridico.pdf", "Aula 02 - Lei Complementar 123 e Anticorrupcao.pdf"], ["Aula 00 - Estruturas Logicas.pdf", "Aula 01 - Equivalencias Logicas.pdf", "Aula 02 - Proposicoes Quantificadoras.pdf", "Aula 03 - Associacao Logica.pdf", "Aula 04 - Logica de Argumentacao.pdf", "Aula 05 - Verdades e Mentiras.pdf", "Aula 06 - Orientacao Temporal.pdf", "Aula 07 - Orientacao Espacial.pdf", "Aula 08 - Problemas Aritmeticos.pdf", "Aula 09 - Equacoes e Inequacoes.pdf", "Aula 10 - Estudo das Funcoes.pdf", "Aula 11 - Funcao Afim.pdf", "Aula 12 - Funcao Quadratica.pdf", "Aula 13 - Funcao Exponencial.pdf", "Aula 14 - Funcao Logaritmica.pdf", "Aula 15 - Progressao Aritmetica e Geometrica.pdf"], ["Aula 00 - Regra de Tres.pdf", "Aula 01 - Porcentagem.pdf", "Aula 02 - Juros Simples.pdf", "Aula 03 - Juros Compostos.pdf", "Aula 04 - Descontos.pdf", "Aula 05 - Taxas.pdf", "Aula 06 - Equivalencia de Capitais.pdf", "Aula 07 - Analise de Investimentos.pdf", "Aula 08 - Sistemas de Amortizacao.pdf"], ["Aula Unica - PCP.pdf"], ["Aula 01 - Sustentabilidade I.pdf", "Aula 02 - Sustentabilidade II.pdf"]],
  /* ===================== EDITAL: Transpetro, Ênfase 1 - Administração =====================
     Transcrição item a item do conteúdo programático real do edital (não um resumo por bloco).
     Cada item aponta pra aula(s) específica(s) que o cobrem (si = índice da matéria em subjects,
     ai = índice da aula dentro dela). Bloco = categoria/matéria como o PRÓPRIO EDITAL agrupa (não
     necessariamente a mesma matéria do app - ex: "Análise Combinatória" o edital lista em Lógica,
     mas no app mora dentro da matéria Estatística). Um item fica "coberto" quando TODAS as aulas
     listadas nele estão com studied=true. Todo o mapeamento foi conferido via grep no texto real
     das apostilas (pdftotext), não só pelo título da aula - ver conversa de 14/08/2026. */
  editalItems: (function(){
    function range(si, from, to){ const out=[]; for(let ai=from; ai<=to; ai++) out.push([si,ai]); return out; }
    const PT=0, ADM=1, MAT=2, ASI=3, CONT=4, EST=5, FIN=6, ING=7, LEG=8, LOG=9, MATFIN=10, PCP=11, SUST=12;
    return [
      // ===== CONHECIMENTOS BÁSICOS =====
      { bloco:"Língua Portuguesa", item:"Compreensão de textos", aulas:[[PT,13]] },
      { bloco:"Língua Portuguesa", item:"Ortografia oficial", aulas:[[PT,0]] },
      { bloco:"Língua Portuguesa", item:"Mecanismos de coesão textual", aulas:[[PT,12]] },
      { bloco:"Língua Portuguesa", item:"Significação das palavras", aulas:[[PT,11]] },
      { bloco:"Língua Portuguesa", item:"Emprego de tempos e modos verbais", aulas:[[PT,4],[PT,5]] },
      { bloco:"Língua Portuguesa", item:"Emprego das classes de palavras", aulas:[[PT,1],[PT,2],[PT,3]] },
      { bloco:"Língua Portuguesa", item:"Coordenação e de subordinação", aulas:[[PT,6],[PT,7]] },
      { bloco:"Língua Portuguesa", item:"Emprego dos sinais de pontuação", aulas:[[PT,8]] },
      { bloco:"Língua Portuguesa", item:"Concordância verbal e nominal", aulas:[[PT,9]] },
      { bloco:"Língua Portuguesa", item:"Regência verbal e nominal", aulas:[[PT,10]] },
      { bloco:"Língua Portuguesa", item:"Emprego do sinal indicativo de crase", aulas:[[PT,10]] },
      { bloco:"Língua Portuguesa", item:"Colocação dos pronomes átonos", aulas:[[PT,3]] },
      { bloco:"Língua Inglesa", item:"Compreensão de texto escrito em língua inglesa", aulas:range(ING,0,6) },
      { bloco:"Língua Inglesa", item:"Itens gramaticais relevantes para a compreensão dos conteúdos semânticos", aulas:range(ING,0,6) },
      // ===== CONHECIMENTOS ESPECÍFICOS - ÊNFASE 1: ADMINISTRAÇÃO =====
      // Administração Financeira e Orçamentária
      { bloco:"Administração Financeira e Orçamentária", item:"Matemática Financeira", aulas:range(MATFIN,0,6) },
      { bloco:"Administração Financeira e Orçamentária", item:"Valor do Dinheiro no Tempo", aulas:[[MATFIN,6],[FIN,0]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Risco X Retorno", aulas:[[MATFIN,7]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Análise de Investimentos", aulas:[[MATFIN,7]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Alavancagem e Endividamento", aulas:[[FIN,2]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Planejamento Financeiro e Orçamentário", aulas:[[FIN,1]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Administração do Capital de Giro", aulas:[[FIN,1]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Fontes de Financiamento a Longo Prazo", aulas:[[FIN,2]] },
      // Administração da Produção e Compras
      { bloco:"Administração da Produção e Compras", item:"Estratégia de Suprimento (Strategic Sourcing)", aulas:[[MAT,7]] },
      { bloco:"Administração da Produção e Compras", item:"Administração de Compras", aulas:[[MAT,2]] },
      { bloco:"Administração da Produção e Compras", item:"Gestão de Estoques: MRP, Ponto de Ressuprimento, Lote Econômico de Compra, Just in Time, Sistema de Rastreamento de Materiais (RFID, Código de Barras e Unique Identification Device)", aulas:[[MAT,1],[MAT,3],[MAT,4],[MAT,5]] },
      { bloco:"Administração da Produção e Compras", item:"Planejamento e Controle da Produção", aulas:[[PCP,0]] },
      { bloco:"Administração da Produção e Compras", item:"Gestão da Cadeia de Suprimentos (Supply Chain Management)", aulas:[[MAT,7]] },
      // Contratação
      { bloco:"Contratação", item:"Artigos 28 ao 91 da Lei nº 13.303 de 30 de junho de 2016 (Estatuto Jurídico da empresa pública, da sociedade de economia mista e de suas subsidiárias)", aulas:[[LEG,0]] },
      { bloco:"Contratação", item:"Artigos 42 ao 49 da Lei complementar nº 123, de 14 de dezembro de 2006 (Estatuto nacional da microempresa e da empresa de pequeno porte) e alterações", aulas:[[LEG,1]] },
      // Gerenciamento de Projetos
      { bloco:"Gerenciamento de Projetos", item:"Ciclo de Vida", aulas:[[ADM,7]] },
      { bloco:"Gerenciamento de Projetos", item:"Estrutura analítica de projeto", aulas:[[ADM,7]] },
      { bloco:"Gerenciamento de Projetos", item:"Estudo de viabilidade técnica e econômica", aulas:[[ADM,7]] },
      { bloco:"Gerenciamento de Projetos", item:"Gerenciamento das Aquisições do Projeto (PMBok 7ª ed)", aulas:[[ADM,7]] },
      { bloco:"Gerenciamento de Projetos", item:"Metodologias Ágeis", aulas:[[ADM,7]] },
      // Conflitos e Negociação - no edital é um único título, sem lista de subitens
      { bloco:"Conflitos e Negociação", item:"Conflitos e Negociação", aulas:[[ADM,15],[ADM,16]] },
      // Administração de Sistemas de Informação
      { bloco:"Administração de Sistemas de Informação", item:"Sistemas operacionais e sistemas de apoio à decisão", aulas:[[ASI,3],[ASI,4],[ASI,2],[ASI,7]] },
      { bloco:"Administração de Sistemas de Informação", item:"Gestão dos sistemas de informação: dimensões, competências, metodologias e ferramentas", aulas:[[ASI,7],[ASI,2]] },
      // Estratégia Empresarial
      { bloco:"Estratégia Empresarial", item:"Estruturas Organizacionais", aulas:[[ADM,3]] },
      { bloco:"Estratégia Empresarial", item:"Estratégia Organizacional", aulas:[[ADM,1],[ADM,2]] },
      { bloco:"Estratégia Empresarial", item:"Ferramentas da Análise Estratégica", aulas:[[ADM,1],[ADM,2]] },
      { bloco:"Estratégia Empresarial", item:"Processo de Administração Estratégica", aulas:[[ADM,1],[ADM,2]] },
      { bloco:"Estratégia Empresarial", item:"Avaliação do ambiente Externo e das Capacidades da Empresa", aulas:[[ADM,1],[ADM,2]] },
      { bloco:"Estratégia Empresarial", item:"Estratégias no Nível do Negócio", aulas:[[ADM,1],[ADM,2]] },
      { bloco:"Estratégia Empresarial", item:"Estratégias Corporativas", aulas:[[ADM,1],[ADM,2]] },
      { bloco:"Estratégia Empresarial", item:"Implementação, gestão e mensuração das estratégias", aulas:[[ADM,1],[ADM,2]] },
      // Administração Mercadológica
      { bloco:"Administração Mercadológica", item:"Marketing", aulas:[[ADM,17],[ADM,18],[ADM,19]] },
      { bloco:"Administração Mercadológica", item:"Marketing B2B", aulas:[[ADM,17],[ADM,18]] },
      { bloco:"Administração Mercadológica", item:"Marketing de Serviços", aulas:[[ADM,17],[ADM,19]] },
      { bloco:"Administração Mercadológica", item:"Pesquisa de Mercado", aulas:[[ADM,17],[ADM,19]] },
      { bloco:"Administração Mercadológica", item:"Planejamento de Marketing", aulas:[[ADM,17],[ADM,18]] },
      { bloco:"Administração Mercadológica", item:"Estratégias de Marketing", aulas:[[ADM,17],[ADM,18],[ADM,19]] },
      { bloco:"Administração Mercadológica", item:"Relacionamento com Clientes", aulas:[[ADM,17]] },
      { bloco:"Administração Mercadológica", item:"Gestão Comercial", aulas:[[ADM,17],[ADM,18]] },
      { bloco:"Administração Mercadológica", item:"Comportamento do Consumidor", aulas:[[ADM,17],[ADM,18],[ADM,19]] },
      { bloco:"Administração Mercadológica", item:"Marca", aulas:[[ADM,17]] },
      { bloco:"Administração Mercadológica", item:"Mídias digitais", aulas:[[ADM,17],[ADM,18],[ADM,19]] },
      { bloco:"Administração Mercadológica", item:"Plataformização", aulas:[[ADM,17]] },
      // Contabilidade
      { bloco:"Contabilidade", item:"Contabilidade Geral", aulas:range(CONT,0,18) },
      { bloco:"Contabilidade", item:"Contabilidade de Custos", aulas:[[CONT,20],[CONT,21]] },
      { bloco:"Contabilidade", item:"Contabilidade Gerencial", aulas:[[CONT,19]] },
      { bloco:"Contabilidade", item:"Governança, Compliance e Riscos", aulas:[[CONT,22]] },
      // Processo Decisório
      { bloco:"Processo Decisório", item:"A Natureza da Decisão", aulas:[[ADM,6],[ASI,5]] },
      { bloco:"Processo Decisório", item:"O Modelo Racional da Tomada de Decisão", aulas:[[ADM,6],[ASI,5]] },
      { bloco:"Processo Decisório", item:"Vieses comuns e mitigação", aulas:[[ADM,6],[ASI,5]] },
      { bloco:"Processo Decisório", item:"Conscientização Limitada", aulas:[[ADM,6],[ASI,5]] },
      { bloco:"Processo Decisório", item:"Técnicas e Instrumentos de Apoio à Decisão", aulas:[[ADM,6],[ASI,5]] },
      // Administração de Recursos Humanos
      { bloco:"Administração de Recursos Humanos", item:"Estratégias de RH", aulas:[[ADM,9]] },
      { bloco:"Administração de Recursos Humanos", item:"Remuneração e Benefícios", aulas:[[ADM,14]] },
      { bloco:"Administração de Recursos Humanos", item:"Desempenho", aulas:[[ADM,10]] },
      { bloco:"Administração de Recursos Humanos", item:"Cultura Organizacional", aulas:[[ADM,5]] },
      { bloco:"Administração de Recursos Humanos", item:"Desenvolvimento de RH", aulas:[[ADM,11]] },
      { bloco:"Administração de Recursos Humanos", item:"Gestão do Conhecimento", aulas:[[ADM,12]] },
      { bloco:"Administração de Recursos Humanos", item:"Carreira e Sucessão", aulas:[[ADM,13]] },
      { bloco:"Administração de Recursos Humanos", item:"Liderança e Equipe", aulas:[[ADM,4],[ADM,8]] },
      // Lógica
      { bloco:"Lógica", item:"Funções", aulas:range(LOG,10,14) },
      { bloco:"Lógica", item:"Análise Combinatória", aulas:[[EST,8]] },
      { bloco:"Lógica", item:"Progressões", aulas:[[LOG,15]] },
      { bloco:"Lógica", item:"Raciocínio Lógico Quantitativo", aulas:range(LOG,0,9) },
      // Estatística
      { bloco:"Estatística", item:"Probabilidade", aulas:[[EST,9]] },
      { bloco:"Estatística", item:"Estatística Descritiva", aulas:range(EST,0,7) },
      // Sustentabilidade e Responsabilidade Socioambiental
      { bloco:"Sustentabilidade e Responsabilidade Socioambiental", item:"Gestão Ambiental nas Organizações", aulas:[[SUST,0]] },
      { bloco:"Sustentabilidade e Responsabilidade Socioambiental", item:"Relacionamento com Públicos de Interesse", aulas:[[SUST,0]] },
      { bloco:"Sustentabilidade e Responsabilidade Socioambiental", item:"Modelos e Práticas de Relatórios Ambientais", aulas:[[SUST,1]] },
      { bloco:"Sustentabilidade e Responsabilidade Socioambiental", item:"Indicadores de Gestão Ambiental e ESG", aulas:[[SUST,1]] },
    ];
  })(),
  supabaseUrl: "https://uwriyzilfyluvdapzorm.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cml5emlsZnlsdXZkYXB6b3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMjE2NTUsImV4cCI6MjEwMTY5NzY1NX0.c0JCN6su4YWreab4YELDCITH_qrS7lFODJfR7jJMSIA",
  // Cópia web (GitHub Pages): os PDFs não vão junto no repositório público (ficariam
  // acessíveis a qualquer um com o link). Em vez de Apostilas/<Matéria>/<Arquivo>.pdf
  // como caminho estático, o app pede uma URL assinada e temporária pro bucket
  // privado do Supabase Storage — só funciona logado, e o link expira sozinho.
  // Ver abrirApostilaWeb() no index.html e apostilaStorageBucket abaixo.
  apostilasViaSupabase: true,
  apostilaStorageBucket: "apostilas"
};
