import { lazy } from "react";
import { totalRegistros } from "./data";

/**
 * Registro central de pesquisas. Para adicionar uma nova:
 * 1. Crie src/data-<slug>.js com os dados extraídos do PDF/relatório.
 * 2. Crie src/components/DetailView<Nome>.jsx (pode copiar um existente de base).
 * 3. Adicione uma entrada aqui — ListView, App e o SEO se atualizam sozinhos.
 */
export const REPORTS = [
  {
    slug: "perfil-usuario-consumo-cultural-recomendeme",
    tag: "Ciência de Dados",
    period: "2020–2025",
    title:
      "Análise Descritiva do Perfil de Usuário e Padrões de Consumo Cultural na Plataforma RecomendeMe",
    summary:
      "Perfil comportamental dos usuários e padrões de consumo cultural, mapeando preferências em séries, livros, jogos e músicas e sua relação com o engajamento real da comunidade.",
    metaLabel: `LEA · UFRN`,
    metaExtra: `${totalRegistros} registros`,
    authors: [
      "Emanuel Carneiro Faustino da Silva",
      "Gabriel Ferreira Trindade de Souza",
      "Lucas Matheus Alves da Silva",
      "Antonio M. B. do Nascimento",
    ],
    keywords: [
      "estatística descritiva",
      "plataforma digital",
      "padrões de consumo cultural",
      "RecomendeMe",
      "perfil de usuário",
    ],
    datePublished: "2026-07-03",
    seoDescription:
      "Relatório de consultoria (LEA/UFRN) sobre o perfil comportamental dos usuários e os padrões de consumo cultural na plataforma RecomendeMe, com dados de 2020 a 2025 em séries, livros, jogos e músicas.",
    component: lazy(() => import("./components/DetailViewPerfilUsuario")),
  },
  {
    slug: "eficiencia-serializacao-graphrag",
    tag: "Intelligence · AI Systems",
    period: "2026",
    title:
      "Eficiência de Serialização e Raciocínio em GraphRAG: Uma Prova de Conceito em Infraestrutura Descentralizada",
    summary:
      "Benchmark de três formatos de serialização de subgrafos (Triples, Markdown Narrative e JSON) em pipelines GraphRAG rodando em GPU descentralizada, comparando eficiência de tokens e acurácia de modelos pequenos vs. grandes.",
    metaLabel: "RecomendeMe Intelligence Lab",
    metaExtra: "5 modelos/formatos testados",
    authors: ["Lucas Matheus", "Raphael Chagas"],
    keywords: [
      "GraphRAG",
      "computação descentralizada",
      "IA soberana",
      "grafos de conhecimento",
      "eficiência de serialização",
    ],
    datePublished: "2026-06-15",
    seoDescription:
      "Working paper WP-CI-001: benchmark experimental de formatos de serialização de subgrafos (Triples, Markdown, JSON) em pipelines GraphRAG na rede descentralizada Nosana/Solana, com custo total inferior a US$2.",
    component: lazy(() => import("./components/DetailViewGraphRAG")),
  },
  {
    slug: "exploracao-acervos-comunicacoes-alto-interesse-publico",
    tag: "Pesquisa Metodológica",
    period: "2026",
    title:
      "Exploração de Acervos Digitais de Comunicações de Alto Interesse Público: Estrutura de Conteúdo, Arquitetura de Descoberta e Limites Metodológicos na Mensuração de Atenção",
    summary:
      "Auditoria metodológica do MasterZap Analytics e proposta de pesquisa sobre acervos digitais controversos, distinguindo estrutura textual, alcance agregado e comportamento de navegação real.",
    metaLabel: "MasterZap Analytics",
    metaExtra: "Auditoria preliminar",
    authors: ["Lucas Matheus Alves da Silva", "Raphael Chagas da Silva"],
    keywords: [
      "MasterZap Analytics",
      "arquitetura de informação",
      "atenção do usuário",
      "acervos digitais",
      "auditoria metodológica",
    ],
    datePublished: "2026-09-04",
    seoDescription:
      "Auditoria metodológica preliminar do MasterZap Analytics e proposta de pesquisa sobre estrutura de acervos digitais, sinais agregados de atenção, ética e instrumentação de navegação.",
    component: lazy(() => import("./components/DetailViewMasterZap")),
  },
  {
    slug: "algoritmos-e-redes-sociais",
    tag: "Pesquisa · Redes Sociais",
    period: "2006–2025",
    title: "Algoritmos e Redes Sociais",
    summary:
      "Panorama de seis plataformas: evolução dos sistemas de recomendação, sinais de alcance e engajamento, formatos, publicidade paga e possíveis efeitos da curadoria algorítmica sobre hábitos e percepção.",
    metaLabel: "RecomendeMe Research",
    metaExtra: "6 plataformas analisadas",
    authors: ["Lucas Matheus Alves da Silva"],
    keywords: [
      "algoritmos de recomendação",
      "redes sociais",
      "engajamento",
      "alcance",
      "publicidade digital",
    ],
    seoDescription:
      "Pesquisa do RecomendeMe Research sobre a evolução dos algoritmos de redes sociais, fatores de alcance e engajamento, publicidade paga e impactos no comportamento dos usuários.",
    component: lazy(() => import("./components/DetailViewAlgoritmosRedes")),
  },
  {
    slug: "viral-tweet-e-intencao-de-voto-no-brasil-2026",
    tag: "Síntese exploratória · Comunicação Política",
    period: "Eleições 2026",
    title:
      "Can a Viral Tweet Change Minds? A Arena dos Indecisos e a Racionalização do Voto no 2º Turno das Eleições de 2026",
    summary:
      "Síntese em inglês que analisa um caso de tweet viral, estratégias de enquadramento político e visibilidade algorítmica durante o segundo turno, discutindo também os limites de inferência causal a partir de dados observacionais.",
    metaLabel: "Gemini Notebook Research Synthesis Series",
    metaExtra: "Documento em inglês · 3 páginas",
    authors: [],
    keywords: [
      "comunicação política",
      "redes sociais",
      "eleições brasileiras",
      "tweets virais",
      "inferência causal",
    ],
    datePublished: "2026-11-01",
    seoDescription:
      "Síntese exploratória em inglês sobre um caso de tweet viral e enquadramentos políticos no segundo turno brasileiro de 2026, com ressalvas sobre verificação das alegações e inferência causal.",
    readingNote:
      "Esta página organiza uma síntese exploratória e reproduz alegações e métricas relatadas no documento, sem verificação independente. Dados observacionais de visualizações e interações não demonstram mudança de intenção ou decisão de voto; as referências citadas também não vêm acompanhadas de uma bibliografia completa no arquivo.",
    component: lazy(() => import("./components/DetailViewViralTweet")),
  },
];

export function getReport(slug) {
  return REPORTS.find((r) => r.slug === slug) || null;
}
