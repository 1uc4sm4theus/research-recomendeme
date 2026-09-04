export const evidenceLevels = [
  {
    result: "Visualizacoes totais",
    level: "A/B",
    note: "Publicavel se a fonte de analytics for verificavel; caso contrario, tratar como estimativa.",
  },
  {
    result: "Tempo medio de permanencia de 50,4s",
    level: "B/C",
    note: "So e medida de atencao se vier de evento real de permanencia ativa; tempo de aba aberta nao equivale a leitura.",
  },
  {
    result: "Ranking por interest_score",
    level: "C",
    note: "Interpretacao de segunda ordem baseada em uma heuristica admitidamente provisoria.",
  },
  {
    result: "Temas e co-ocorrencias do acervo",
    level: "A/B",
    note: "Descrevem o conteudo e sua estrutura textual, nao o comportamento ou os vinculos reais entre pessoas.",
  },
];

export const emotionalThemes = [
  { theme: "Relação Moraes ↔ políticos", weight: 95 },
  { theme: "Articulação sigilosa no STF", weight: 85 },
  { theme: "Poder econômico (JBS, bancos)", weight: 73 },
  { theme: "Golpismo / ameaça institucional", weight: 68 },
  { theme: "Bastidores do Congresso", weight: 52 },
  { theme: "Personalidades / celebridades", weight: 29 },
];

export const contactInterest = [
  { contact: "Martha ...", score: 97, classification: "Alta" },
  { contact: "Alexan...", score: 91, classification: "Alta" },
  { contact: "Dias Tof...", score: 74, classification: "Alta" },
  { contact: "Kassio ...", score: 62, classification: "Média" },
  { contact: "Ricardo...", score: 55, classification: "Média" },
  { contact: "Davi Al...", score: 48, classification: "Média" },
  { contact: "Hugo ...", score: 43, classification: "Média" },
  { contact: "Ciro N...", score: 38, classification: "Média" },
  { contact: "Wesley...", score: 29, classification: "Baixa" },
];

export const citationInterest = [
  { entity: "Alexa...", excerpt: "Encontr...", seconds: 87, classification: "Alta" },
  { entity: "Jair Bo...", excerpt: "Chamad...", seconds: 72, classification: "Alta" },
  { entity: "Luiz In...", excerpt: "Reunião ...", seconds: 65, classification: "Alta" },
  { entity: "Minist...", excerpt: "Alerta S...", seconds: 58, classification: "Média" },
  { entity: "Ciro ...", excerpt: "Grande ...", seconds: 41, classification: "Média" },
  { entity: "João ...", excerpt: "Tenho e...", seconds: 34, classification: "Média" },
  { entity: "Hugo ...", excerpt: "Reuniã...", seconds: 27, classification: "Média" },
  { entity: "André...", excerpt: "Banco é...", seconds: 19, classification: "Baixa" },
];

export const visibleContactScore = contactInterest.reduce((total, item) => total + item.score, 0);
export const averageCitationTime = citationInterest.reduce((total, item) => total + item.seconds, 0) / citationInterest.length;

export const researchQuestions = [
  {
    id: "RQ1",
    title: "Concentracao de atencao",
    question: "A atencao agregada segue uma distribuicao de cauda longa entre entidades e temas?",
    method: "Curva de Lorenz, coeficiente de Gini e HHI sobre cliques ou tempo real.",
  },
  {
    id: "RQ2",
    title: "Diversidade de exploracao",
    question: "Usuarios exploram poucos temas em profundidade ou navegam amplamente pelo acervo?",
    method: "Distribuicao por sessao e entropia de Shannon sobre temas visitados.",
  },
  {
    id: "RQ3",
    title: "Estrutura do acervo e navegacao",
    question: "A rede de co-ocorrencia textual corresponde aos caminhos reais de navegacao?",
    method: "Centralidade, comunidades e comparacao com sequencias anonimizadas de paginas visitadas.",
  },
  {
    id: "RQ4",
    title: "Tom e permanencia",
    question: "Conteudo classificado como controverso recebe mais permanencia real?",
    method: "Mann-Whitney ou Kruskal-Wallis, somente apos validar a classificacao de tom.",
  },
];

export const methodAssessment = [
  { method: "Frequencia de temas e mencoes", status: "Aplicavel", scope: "Descricao do acervo" },
  { method: "Gini / HHI", status: "Condicional", scope: "Atencao real por entidade ou tema" },
  { method: "Entropia de Shannon", status: "Condicional", scope: "Diversidade de temas por sessao" },
  { method: "Rede de co-ocorrencia", status: "Aplicavel", scope: "Estrutura textual, nao rede social" },
  { method: "Regressao", status: "Condicional", scope: "Apenas com N suficiente e controles" },
  { method: "Topic modeling", status: "Aplicavel", scope: "Conteudo do acervo, nao intencao do usuario" },
];

export const v2Events = [
  "page_view e impression separados por visibilidade real",
  "dwell_time com foco da aba e atividade de scroll",
  "click, expansao de card, busca e compartilhamento",
  "session_start/end e caminho ordenado de navegacao",
  "entity_view e theme_view para agregacao de atencao",
];

export const ethicalPrinciples = [
  "Nao publicar nomes completos de terceiros nao publicos nem trechos de mensagens.",
  "Reportar apenas agregados com limiar minimo de grupo, como k >= 10.",
  "Nao tratar nomes truncados como anonimizacao suficiente.",
  "Submeter o protocolo a avaliacao etica antes de nova coleta ou publicacao formal.",
  "Separar a pesquisa sobre navegacao da investigacao factual sobre o caso de origem.",
];

export const limitations = [
  "Auditoria baseada na descricao das funcoes, sem acesso ao codigo Python real ou ao dataset.",
  "Interest_score e classificacoes por palavras-chave sao heuristicas sem validacao reportada.",
  "Amostra de conveniencia e autosselecionada, sem base para generalizacao ao publico brasileiro.",
  "Co-ocorrencia textual nao implica relacao real, causalidade ou importancia social.",
  "A origem das visualizacoes e do tempo medio precisa ser confirmada tecnicamente.",
];
