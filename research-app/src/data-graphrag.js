// Tabela 1 do paper — Score, latência, tokens de entrada e VRAM por modelo/formato
export const benchmarkTable = [
  { model: "Qwen2.5-3B", format: "Triples", score: 0.89, latency: 1.2, tokens: 342, vram: 4.2 },
  { model: "Qwen2.5-3B", format: "JSON", score: 0.84, latency: 1.5, tokens: 488, vram: 4.2 },
  { model: "Llama-3-8B", format: "Triples", score: 0.86, latency: 2.1, tokens: 355, vram: 16.0 },
  { model: "Llama-3-8B", format: "JSON", score: 0.82, latency: 2.4, tokens: 510, vram: 16.0 },
  { model: "DeepSeek-R1", format: "Triples", score: 0.74, latency: 8.4, tokens: 342, vram: 22.0 },
];

// Score por combinação modelo+formato, para o gráfico de barras
export const scoreChartData = benchmarkTable.map((r) => ({
  label: `${r.model} · ${r.format}`,
  score: r.score,
  isTriples: r.format === "Triples",
}));

// Comparação de tokens de entrada: Triples vs JSON, por modelo (só onde há os dois formatos)
export const tokenComparisonData = [
  { model: "Qwen2.5-3B", triples: 342, json: 488 },
  { model: "Llama-3-8B", triples: 355, json: 510 },
];

export const relatedWork = [
  {
    ref: "[1]",
    citation: "Li et al. (2025)",
    note:
      "propõe duas métricas de interpretabilidade para detectar alucinação em GraphRAG: grau de dependência de caminho (PRD) e escore de alinhamento semântico (SAS).",
  },
  {
    ref: "[2]",
    citation: "Kaplan et al. (2025) — HubLink",
    note:
      "organiza grafos de conhecimento em 'hubs' conceituais para permitir inferência com reconhecimento de fonte, agnóstica a schema.",
  },
  {
    ref: "[3]",
    citation: "Nandakishore (2026) — JTON",
    note:
      "propõe uma codificação tabular ('Zen Grid') que reduz o desperdício de tokens do JSON tradicional mantendo seu sistema de tipos.",
  },
];

export const limitations = [
  "Escopo sintético: o subgrafo de 7 nós pode não capturar a complexidade de datasets densos do mundo real.",
  "Homogeneidade de consulta: o benchmark usou um único tipo de query, limitando a avaliação de raciocínio multi-hop.",
  "Variabilidade de quantização: o estudo não comparou níveis de quantização (4-bit vs. 8-bit) em nós descentralizados.",
];

export const futureWork = [
  "Escalar o pipeline para grafos de conhecimento densos, com milhares de nós.",
  "Aplicar métricas RAGAS (Faithfulness e Context Recall) para avaliação qualitativa.",
  "Comparar o throughput de vLLM vs. Ollama em nós de hardware descentralizado.",
];

export const references = [
  {
    text: "Li, S. et al. (2025). Detecting Hallucinations in Graph Retrieval-Augmented Generation via Attention Patterns and Semantic Alignment.",
    url: "https://doi.org/10.1145/3706598",
  },
  {
    text: "Kaplan, A. et al. (2025). HubLink: A Novel Question Answering Retrieval Approach over Knowledge Graphs.",
    url: "https://doi.org/10.1145/3706599",
  },
  {
    text: "Nandakishore, G. (2026). JTON: A Token-Efficient JSON Superset with Zen Grid Tabular Encoding for Large Language Models.",
    url: "https://doi.org/10.1145/3706600",
  },
  { text: "Branco, A. et al. (2026). Sovereign AI-based Public Services are Viable and Affordable." },
  {
    text: "GitHub Repository (2025). graphrag-serialization-bench.",
    url: "https://github.com/RecomendeMe-Intel/graphrag-serialization-bench",
  },
];
