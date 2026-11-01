import React from "react";
import { ArrowLeft, Brain, CircleDollarSign, Eye, Layers3, Users } from "lucide-react";
import { T } from "../tokens";
import { advertisingModels, engagementSignals, platformHistory } from "../data-algoritmos-redes";
import { Card, Eyebrow, MetaItem, Section, SubHeading, pStyle } from "./ui";

function DataTable({ headings, rows, renderRow }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".82rem", minWidth: 620 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${T.border}` }}>
            {headings.map((heading) => (
              <th key={heading} style={{ textAlign: "left", padding: "12px 14px", color: T.muted, fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".05em", verticalAlign: "top" }}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows.map(renderRow)}</tbody>
      </table>
    </div>
  );
}

export default function DetailViewAlgoritmosRedes({ onBack, report }) {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "48px 24px 120px" }}>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", color: T.muted, fontSize: ".82rem", fontWeight: 600, cursor: "pointer", padding: 0, marginBottom: 36 }}>
        <ArrowLeft size={15} /> Todas as pesquisas
      </button>

      <Eyebrow>{report.tag} · {report.period}</Eyebrow>
      <h1 style={{ fontSize: "2.05rem", fontWeight: 800, lineHeight: 1.22, color: T.text, margin: "0 0 22px" }}>{report.title}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
        {report.authors.map((name) => <span key={name} style={{ fontSize: ".76rem", color: T.text, background: T.navyTile, border: `1px solid ${T.border}`, borderRadius: 20, padding: "6px 13px" }}>{name}</span>)}
      </div>

      <Card style={{ padding: 24, marginBottom: 48 }}>
        <p style={{ margin: 0, color: T.text, fontSize: ".95rem", lineHeight: 1.75 }}>{report.summary}</p>
        <div style={{ display: "flex", gap: 24, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${T.border}`, flexWrap: "wrap" }}>
          <MetaItem icon={Layers3} label="Escopo" value="6 plataformas" />
          <MetaItem icon={Brain} label="Período abordado" value="2006–2025" />
          <MetaItem icon={Users} label="Autoria" value="RecomendeMe Research" />
        </div>
      </Card>

      <Section n="01" title="Como funciona a curadoria algorítmica">
        <p style={pStyle}>As plataformas ordenam e recomendam publicações a partir de sinais sobre conteúdo, atividade e contexto de cada pessoa. O estudo descreve uma transição de feeds cronológicos ou guiados por popularidade para sistemas personalizados de aprendizado de máquina.</p>
        <p style={pStyle}>Essa personalização não usa uma regra única: diferentes áreas de um mesmo serviço, como busca, feed, vídeos curtos e notificações, podem aplicar objetivos e sinais distintos. A relevância prevista e a permanência na plataforma aparecem como objetivos recorrentes no panorama apresentado.</p>
      </Section>

      <Section n="02" title="Evolução das plataformas">
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <DataTable
            headings={["Plataforma", "Ponto de partida e evolução", "Sinais em destaque"]}
            rows={platformHistory}
            renderRow={(item, index) => (
              <tr key={item.platform} style={{ borderBottom: index < platformHistory.length - 1 ? `1px solid ${T.border}` : "none" }}>
                <td style={{ padding: "14px", color: T.text, fontWeight: 700, verticalAlign: "top" }}>{item.platform}<div style={{ color: T.muted, fontWeight: 400, lineHeight: 1.55, marginTop: 6 }}>{item.origin}</div></td>
                <td style={{ padding: "14px", color: T.muted, lineHeight: 1.6, verticalAlign: "top" }}>{item.evolution}</td>
                <td style={{ padding: "14px", color: T.muted, lineHeight: 1.6, verticalAlign: "top" }}>{item.focus}</td>
              </tr>
            )}
          />
        </Card>
      </Section>

      <Section n="03" title="Sinais de engajamento e formatos">
        <p style={pStyle}>O relatório destaca que “engajamento” não significa a mesma coisa em todas as redes: conversas, salvamentos, tempo assistido e leitura podem funcionar como sinais diferentes de interesse.</p>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <DataTable
            headings={["Plataforma", "Sinais citados", "Formatos destacados"]}
            rows={engagementSignals}
            renderRow={(item, index) => (
              <tr key={item.platform} style={{ borderBottom: index < engagementSignals.length - 1 ? `1px solid ${T.border}` : "none" }}>
                <td style={{ padding: "14px", color: T.text, fontWeight: 700, verticalAlign: "top" }}>{item.platform}</td>
                <td style={{ padding: "14px", color: T.muted, lineHeight: 1.6, verticalAlign: "top" }}>{item.signals}</td>
                <td style={{ padding: "14px", color: T.muted, lineHeight: 1.6, verticalAlign: "top" }}>{item.formats}</td>
              </tr>
            )}
          />
        </Card>
      </Section>

      <Section n="04" title="Publicidade e alcance pago">
        <p style={pStyle}>A pesquisa separa distribuição orgânica de compra de mídia. Nos modelos descritos, anunciantes escolhem objetivos e públicos e participam de leilões em que lance, relevância e desempenho esperado influenciam a entrega.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {advertisingModels.map((item) => (
            <Card key={item.platform} style={{ padding: 16, display: "grid", gridTemplateColumns: "minmax(150px, .7fr) 1.8fr", gap: 14 }}>
              <strong style={{ color: T.text, fontSize: ".84rem" }}>{item.platform}</strong>
              <span style={{ color: T.muted, fontSize: ".84rem", lineHeight: 1.6 }}>{item.model}</span>
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", gap: 24, marginTop: 18, flexWrap: "wrap" }}>
          <MetaItem icon={CircleDollarSign} label="Distribuição" value="Orgânica e patrocinada" />
          <MetaItem icon={Eye} label="Critério geral" value="Objetivo + relevância" />
        </div>
      </Section>

      <Section n="05" title="Efeitos sobre percepção e comportamento">
        <SubHeading icon={Eye} title="O que o estudo discute" />
        <p style={pStyle}>O texto relaciona personalização a experiências informativas diferentes entre usuários e discute bolhas de conteúdo, polarização, desinformação, economia da atenção e estímulos de uso contínuo, como rolagem infinita e notificações.</p>
        <p style={pStyle}>Também aborda como criadores e usuários adaptam o que publicam ao desempenho esperado, e como recomendações e anúncios podem influenciar descoberta de produtos e consumo. O próprio documento ressalta que escolhas individuais e contextos sociais também participam desses efeitos.</p>
        <Card style={{ padding: 18, borderColor: T.electric30, background: T.electric06 }}>
          <strong style={{ display: "block", color: T.electric, fontSize: ".84rem", marginBottom: 6 }}>Leitura e limites</strong>
          <p style={{ margin: 0, color: T.muted, fontSize: ".86rem", lineHeight: 1.7 }}>Este é um panorama baseado em referências secundárias citadas no documento. Regras de recomendação mudam com frequência, e efeitos sobre opinião, saúde e comportamento variam conforme contexto e método; descrições gerais não devem ser lidas como auditoria atual dos sistemas das plataformas.</p>
        </Card>
      </Section>
    </main>
  );
}