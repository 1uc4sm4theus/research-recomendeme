import React from "react";
import { ArrowRight } from "lucide-react";
import { T } from "../tokens";
import { Card, Eyebrow } from "./ui";
import { totalRegistros } from "../data";

export default function ListView({ onOpen }) {
  return (
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "64px 24px 100px" }}>
      <div style={{ maxWidth: 620, marginBottom: 56 }}>
        <Eyebrow>RecomendeMe · Research &amp; Intelligence</Eyebrow>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 800, lineHeight: 1.15, margin: "0 0 16px", color: T.text }}>
          Pesquisas
        </h1>
        <p style={{ color: T.muted, fontSize: "1.02rem", lineHeight: 1.65, margin: 0 }}>
          Estudos, relatórios e working papers produzidos por consultores parceiros e pelo laboratório interno
          sobre comportamento cultural, dados da plataforma e metodologias de recomendação.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }} className="rm-grid">
        <Card style={{ padding: 28, cursor: "pointer", display: "flex", flexDirection: "column", gap: 18 }}>
          <div onClick={onOpen} style={{ display: "flex", flexDirection: "column", gap: 18, cursor: "pointer" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <span
                style={{
                  fontSize: ".65rem",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: T.electric,
                  background: T.electric06,
                  border: `1px solid ${T.electric30}`,
                  padding: "5px 10px",
                  borderRadius: 6,
                }}
              >
                Ciência de Dados
              </span>
              <span style={{ color: T.muted, fontSize: ".72rem" }}>2020–2025</span>
            </div>

            <h2 style={{ fontSize: "1.28rem", fontWeight: 700, lineHeight: 1.35, color: T.text, margin: 0 }}>
              Análise Descritiva do Perfil de Usuário e Padrões de Consumo Cultural na Plataforma RecomendeMe
            </h2>

            <p style={{ color: T.muted, fontSize: ".88rem", lineHeight: 1.6, margin: 0 }}>
              Perfil comportamental dos usuários e padrões de consumo cultural, mapeando preferências em séries,
              livros, jogos e músicas e sua relação com o engajamento real da comunidade.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 8, color: T.electric, fontSize: ".85rem", fontWeight: 600, marginTop: 4 }}>
              Ver pesquisa completa <ArrowRight size={15} />
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 14, display: "flex", gap: 18, flexWrap: "wrap" }}>
            <span style={{ fontSize: ".74rem", color: T.muted }}>LEA · UFRN</span>
            <span style={{ fontSize: ".74rem", color: T.muted }}>Relatório de Consultoria</span>
            <span style={{ fontSize: ".74rem", color: T.muted }}>{totalRegistros} registros</span>
          </div>
        </Card>

        {["Grafo de investigação e perfis comportamentais", "Benchmark de serialização GraphRAG"].map((title, i) => (
          <Card key={i} style={{ padding: 28, opacity: 0.5, display: "flex", flexDirection: "column", gap: 18, justifyContent: "space-between" }}>
            <div>
              <span
                style={{
                  fontSize: ".65rem",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: T.muted,
                  border: `1px solid ${T.border}`,
                  padding: "5px 10px",
                  borderRadius: 6,
                }}
              >
                Em breve
              </span>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: T.text, margin: "16px 0 0", lineHeight: 1.35 }}>{title}</h2>
            </div>
            <span style={{ fontSize: ".78rem", color: T.muted }}>Publicação em preparação</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
