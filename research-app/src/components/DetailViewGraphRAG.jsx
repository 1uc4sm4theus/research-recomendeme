import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";
import { ArrowLeft, Zap, DollarSign, TrendingDown, Cpu, ExternalLink } from "lucide-react";
import { T } from "../tokens";
import { Card, Eyebrow, Section, SubHeading, MetaItem, CustomTooltip, pStyle } from "./ui";
import {
  benchmarkTable,
  scoreChartData,
  tokenComparisonData,
  relatedWork,
  limitations,
  futureWork,
  references,
} from "../data-graphrag";

export default function DetailViewGraphRAG({ onBack }) {
  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "48px 24px 120px" }}>
      <button
        onClick={onBack}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "none",
          border: "none",
          color: T.muted,
          fontSize: ".82rem",
          fontWeight: 600,
          cursor: "pointer",
          padding: 0,
          marginBottom: 36,
        }}
      >
        <ArrowLeft size={15} /> Todas as pesquisas
      </button>

      <Eyebrow>Working Paper WP-CI-001 · Intelligence · AI Systems</Eyebrow>
      <h1 style={{ fontSize: "2.05rem", fontWeight: 800, lineHeight: 1.22, color: T.text, margin: "0 0 22px" }}>
        Eficiência de Serialização e Raciocínio em GraphRAG: Uma Prova de Conceito em
        Infraestrutura Descentralizada
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
        {["Lucas Matheus", "Raphael Chagas"].map((name) => (
          <span
            key={name}
            style={{ fontSize: ".76rem", color: T.text, background: T.navyTile, border: `1px solid ${T.border}`, borderRadius: 20, padding: "6px 13px" }}
          >
            {name}
          </span>
        ))}
      </div>

      <Card style={{ padding: 24, marginBottom: 28 }}>
        <p style={{ margin: 0, color: T.text, fontSize: ".95rem", lineHeight: 1.75 }}>
          Este estudo avalia a eficiência e a performance de pipelines de GraphRAG (Retrieval-Augmented
          Generation sobre grafos de conhecimento) em ambientes de computação descentralizada. Foram
          testados três formatos de serialização de subgrafo — Triples, Narrativa em Markdown e JSON
          fiel ao schema — na rede de GPU descentralizada Nosana/Solana, usando hardware de consumo
          (NVIDIA RTX 3090), com o objetivo de demonstrar a viabilidade de executar consultas complexas
          de GraphRAG por menos de US$2 mantendo alta acurácia de raciocínio.
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${T.border}`, flexWrap: "wrap" }}>
          <MetaItem icon={DollarSign} label="Custo total" value="< US$ 2" />
          <MetaItem icon={TrendingDown} label="Economia de tokens (Triples)" value="27–30%" />
          <MetaItem icon={Cpu} label="Hardware" value="RTX 3090 · 24GB" />
        </div>
      </Card>

      <a
        href="https://github.com/RecomendeMe-Intel/graphrag-serialization-bench"
        target="_blank"
        rel="noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: 6, color: T.electric, fontSize: ".82rem", fontWeight: 600, marginBottom: 48, textDecoration: "none" }}
      >
        Repositório do benchmark <ExternalLink size={13} />
      </a>

      <Section n="01" title="Introdução">
        <p style={pStyle}>
          Iniciativas de "IA Soberana" buscam garantir que agências e instituições públicas mantenham
          autonomia digital e cultural sobre seus serviços de IA, migrando de arquiteturas
          cloud-dependentes para modelos descentralizados capazes de operar sob restrições financeiras e
          computacionais modestas.
        </p>
        <p style={pStyle}>
          O GraphRAG enfrenta o "problema de linearização": transformar dados de grafo
          multidimensionais em um formato plano e eficiente em tokens, sem perder contexto relacional.
          Este estudo investiga o impacto do formato de serialização e da escala do modelo na
          sustentabilidade econômica de IA descentralizada — uma lacuna ainda pouco explorada na
          literatura.
        </p>
      </Section>

      <Section n="02" title="Trabalhos Relacionados">
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {relatedWork.map((r) => (
            <Card key={r.ref} style={{ padding: 16, display: "flex", gap: 12 }}>
              <span style={{ color: T.electric, fontWeight: 700, fontSize: ".82rem", flex: "0 0 auto" }}>{r.ref}</span>
              <p style={{ margin: 0, color: T.muted, fontSize: ".85rem", lineHeight: 1.65 }}>
                <strong style={{ color: T.text }}>{r.citation}</strong> {r.note}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="03" title="Metodologia Experimental">
        <p style={pStyle}>
          Benchmarks executados na rede de GPU descentralizada Nosana/Solana, com acesso a nós NVIDIA
          RTX 3090 (24GB VRAM) a uma fração do custo de hyperscalers centralizados.
        </p>
        <SubHeading icon={Cpu} title="Construção do subgrafo" />
        <p style={pStyle}>
          Um subgrafo controlado de 7 nós foi extraído de um ambiente Neo4j, com entidades do tipo
          Pessoa, Organização e Evento, conectadas por 10 arestas tipadas — uma estrutura clara o
          suficiente para uma avaliação isolada de raciocínio.
        </p>
        <SubHeading icon={Zap} title="Formatos de serialização avaliados" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 12, marginBottom: 8 }}>
          {[
            { name: "Triples (A)", desc: "Lista de sentenças sujeito–predicado–objeto (ex: \"Pessoa, trabalha_em, Org\")." },
            { name: "Markdown Narrative (B)", desc: "Resumo em prosa, em linguagem natural, dos fatos do grafo." },
            { name: "JSON Schema-faithful (C)", desc: "Representação JSON aninhada, padrão, dos nós e relações do grafo." },
          ].map((f) => (
            <Card key={f.name} style={{ padding: 16 }}>
              <div style={{ color: T.text, fontWeight: 700, fontSize: ".85rem", marginBottom: 6 }}>{f.name}</div>
              <div style={{ color: T.muted, fontSize: ".8rem", lineHeight: 1.6 }}>{f.desc}</div>
            </Card>
          ))}
        </div>
        <p style={{ ...pStyle, marginTop: 12 }}>
          A performance foi avaliada por um "Score" derivado de quatro métricas de correspondência de
          tokens: citação de nós, citação de arestas, separação de fatos e identificação de lacunas de
          conhecimento — funcionando como proxies externos para as métricas internas PRD e SAS.
        </p>
      </Section>

      <Section n="04" title="Resultados Comparativos">
        <p style={pStyle}>
          A tabela abaixo resume a performance entre os principais modelos e formatos de serialização
          testados.
        </p>

        <Card style={{ padding: 0, marginBottom: 24, overflow: "hidden" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".82rem" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                  {["Modelo", "Formato", "Score", "Latência", "Tokens", "VRAM"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "12px 16px", color: T.muted, fontWeight: 600, fontSize: ".72rem", textTransform: "uppercase", letterSpacing: ".05em" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {benchmarkTable.map((r, i) => (
                  <tr key={i} style={{ borderBottom: i < benchmarkTable.length - 1 ? `1px solid ${T.border}` : "none" }}>
                    <td style={{ padding: "12px 16px", color: T.text, fontWeight: 600 }}>{r.model}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <span
                        style={{
                          fontSize: ".7rem",
                          fontWeight: 600,
                          color: r.format === "Triples" ? T.electric : T.muted,
                          background: r.format === "Triples" ? T.electric06 : "transparent",
                          border: `1px solid ${r.format === "Triples" ? T.electric30 : T.border}`,
                          borderRadius: 5,
                          padding: "2px 8px",
                        }}
                      >
                        {r.format}
                      </span>
                    </td>
                    <td style={{ padding: "12px 16px", color: T.text, fontWeight: 700 }}>{r.score.toFixed(2)}</td>
                    <td style={{ padding: "12px 16px", color: T.muted }}>{r.latency}s</td>
                    <td style={{ padding: "12px 16px", color: T.muted }}>{r.tokens}</td>
                    <td style={{ padding: "12px 16px", color: T.muted }}>{r.vram}GB</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <SubHeading icon={TrendingDown} title="Score por modelo e formato" />
        <Card style={{ padding: "20px 20px 8px", marginBottom: 32 }}>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <BarChart data={scoreChartData} margin={{ left: -12, right: 12, top: 4, bottom: 48 }}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                <XAxis dataKey="label" stroke={T.muted} fontSize={10} tickLine={false} axisLine={{ stroke: T.border }} angle={-28} textAnchor="end" interval={0} />
                <YAxis stroke={T.muted} fontSize={11} tickLine={false} axisLine={false} domain={[0, 1]} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,.03)" }} />
                <Bar dataKey="score" name="Score" radius={[4, 4, 0, 0]} maxBarSize={44}>
                  {scoreChartData.map((d, i) => (
                    <Cell key={i} fill={d.isTriples ? T.electric : T.electric30} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", paddingBottom: 14, fontSize: ".72rem", color: T.muted }}>
            <span><span style={{ display: "inline-block", width: 9, height: 9, borderRadius: 2, background: T.electric, marginRight: 6 }} />Triples</span>
            <span><span style={{ display: "inline-block", width: 9, height: 9, borderRadius: 2, background: T.electric30, marginRight: 6 }} />JSON</span>
          </div>
        </Card>

        <SubHeading icon={Zap} title="Tokens de entrada: Triples vs. JSON" />
        <p style={pStyle}>
          O formato Triples consumiu de 27% a 30% menos tokens que o JSON equivalente, sem perda de
          acurácia — redução direta de custo operacional.
        </p>
        <Card style={{ padding: "20px 20px 8px", marginBottom: 8 }}>
          <div style={{ width: "100%", height: 240 }}>
            <ResponsiveContainer>
              <BarChart data={tokenComparisonData} margin={{ left: -12, right: 12, top: 4, bottom: 4 }}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                <XAxis dataKey="model" stroke={T.muted} fontSize={11.5} tickLine={false} axisLine={{ stroke: T.border }} />
                <YAxis stroke={T.muted} fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip unit=" tokens" />} cursor={{ fill: "rgba(255,255,255,.03)" }} />
                <Legend wrapperStyle={{ fontSize: ".75rem", color: T.muted }} />
                <Bar dataKey="triples" name="Triples" fill={T.electric} radius={[4, 4, 0, 0]} maxBarSize={44} />
                <Bar dataKey="json" name="JSON" fill={T.electric30} radius={[4, 4, 0, 0]} maxBarSize={44} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card style={{ padding: 20, marginTop: 24, background: T.navyTile }}>
          <div style={{ color: T.electric, fontWeight: 700, fontSize: ".88rem", marginBottom: 8 }}>O Paradoxo da Eficiência</div>
          <p style={{ margin: 0, color: T.muted, fontSize: ".85rem", lineHeight: 1.7 }}>
            O Qwen2.5-3B superou modelos de 7B e 8B em 7 de 9 execuções comparativas — um modelo
            pequeno, mas bem treinado, alcançando maior conformidade de formato e grounding do que
            arquiteturas maiores quando o escopo da tarefa é suficientemente restrito. Isso o torna ideal
            para nós descentralizados limitados em VRAM.
          </p>
        </Card>
      </Section>

      <Section n="05" title="Discussão: Eficiência, Raciocínio e Conformidade de Formato">
        <p style={pStyle}>
          A "Vantagem do Triple" foi evidente: o formato usou de 27% a 30% menos tokens que o JSON
          mantendo scores iguais ou superiores, permitindo processar subgrafos mais densos dentro de
          janelas de contexto fixas.
        </p>
        <Card style={{ padding: 20, background: T.navyTile, marginBottom: 8 }}>
          <div style={{ color: T.electric, fontWeight: 700, fontSize: ".88rem", marginBottom: 8 }}>O Paradoxo do DeepSeek-R1</div>
          <p style={{ margin: 0, color: T.muted, fontSize: ".85rem", lineHeight: 1.7 }}>
            O raciocínio em cadeia (Chain-of-Thought) do modelo foi logicamente impecável, mas seus
            scores finais foram mais baixos por "não conformidade de formato" — as métricas atuais de
            correspondência de tokens subestimam modelos que priorizam raciocínio interno sobre esquemas
            de saída rígidos. Nenhuma alucinação foi observada em nenhuma execução, atribuída ao alto
            grounding semântico dos subgrafos podados de 7 nós.
          </p>
        </Card>
      </Section>

      <Section n="06" title="Implicações para IA Soberana">
        <p style={pStyle}>
          O experimento demonstrou que operações complexas de GraphRAG podem ser executadas por menos
          de US$2 usando computação descentralizada — um marco simbólico e prático de autonomia digital.
          Usando a rede Solana/Nosana e modelos abertos como o Qwen 3B, agências públicas podem
          implantar serviços de IA "viáveis e acessíveis", mitigando riscos de interrupções geopolíticas
          e dependência de fornecedores proprietários.
        </p>
      </Section>

      <Section n="07" title="Limitações e Trabalhos Futuros">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          <div>
            <div style={{ fontSize: ".78rem", fontWeight: 700, color: T.text, marginBottom: 10, textTransform: "uppercase", letterSpacing: ".04em" }}>Limitações</div>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: T.muted, fontSize: ".84rem", lineHeight: 1.8 }}>
              {limitations.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: ".78rem", fontWeight: 700, color: T.text, marginBottom: 10, textTransform: "uppercase", letterSpacing: ".04em" }}>Próximos passos</div>
            <ul style={{ margin: 0, padding: "0 0 0 18px", color: T.muted, fontSize: ".84rem", lineHeight: 1.8 }}>
              {futureWork.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section n="08" title="Conclusão">
        <p style={pStyle}>
          A otimização da camada de serialização em pipelines GraphRAG é essencial para a implantação
          sustentável de IA em ambientes soberanos e de baixo recurso. Os resultados confirmam o Triples
          como o formato mais eficiente, com economia substancial de tokens sem degradação de
          performance — e provam que o caminho para a autonomia em IA é, ao mesmo tempo, acessível e de
          alta performance.
        </p>
      </Section>

      <Section n="09" title="Referências">
        <ol style={{ margin: 0, padding: "0 0 0 20px", color: T.muted, fontSize: ".85rem", lineHeight: 1.9 }}>
          {references.map((r, i) => (
            <li key={i}>
              {r.text}{" "}
              {r.url && (
                <a href={r.url} target="_blank" rel="noreferrer" style={{ color: T.electric, textDecoration: "none" }}>
                  {r.url}
                </a>
              )}
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
