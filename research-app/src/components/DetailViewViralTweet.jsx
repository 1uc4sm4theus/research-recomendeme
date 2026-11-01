import React from "react";
import { ArrowLeft, BarChart3, CalendarDays, Eye, Heart, MessageCircle, Repeat2, ShieldAlert, Users } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { T } from "../tokens";
import { citedReferences, framingClusters, reportedClaims, tweetMetrics } from "../data-viral-tweet";
import { Card, CustomTooltip, Eyebrow, MetaItem, Section, SubHeading, pStyle } from "./ui";

export default function DetailViewViralTweet({ onBack, report }) {
  return (
    <main style={{ maxWidth: 880, margin: "0 auto", padding: "48px 24px 120px" }}>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", color: T.muted, fontSize: ".82rem", fontWeight: 600, cursor: "pointer", padding: 0, marginBottom: 36 }}>
        <ArrowLeft size={15} /> Todas as pesquisas
      </button>

      <Eyebrow>{report.tag} · {report.period}</Eyebrow>
      <h1 style={{ fontSize: "2.05rem", fontWeight: 800, lineHeight: 1.22, color: T.text, margin: "0 0 22px" }}>{report.title}</h1>
      <Card style={{ padding: 24, marginBottom: 24 }}>
        <p style={{ margin: 0, color: T.text, fontSize: ".95rem", lineHeight: 1.75 }}>{report.summary}</p>
        <div style={{ display: "flex", gap: 24, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${T.border}`, flexWrap: "wrap" }}>
          <MetaItem icon={CalendarDays} label="Caso descrito" value="6 de outubro de 2026" />
          <MetaItem icon={Eye} label="Visualizações relatadas" value="1.725.556" />
          <MetaItem icon={MessageCircle} label="Respostas relatadas" value="9.195" />
        </div>
      </Card>

      <Card style={{ padding: 18, marginBottom: 48, borderColor: "rgba(245,158,11,.35)", background: "rgba(245,158,11,.06)" }}>
        <strong style={{ display: "block", color: "#f59e0b", fontSize: ".84rem", marginBottom: 6 }}>Nota de verificação</strong>
        <p style={{ margin: 0, color: T.muted, fontSize: ".86rem", lineHeight: 1.7 }}>{report.readingNote}</p>
      </Card>

      <Section n="01" title="Pergunta e enquadramento">
        <p style={pStyle}>A síntese pergunta como uma publicação viral pode se tornar uma arena de argumentos políticos para pessoas indecisas ou pouco atentas ao debate. Ela conecta esse caso a conceitos de mudanças tardias de preferência, visibilidade algorítmica e enquadramento estratégico.</p>
        <p style={pStyle}>O mecanismo proposto é descritivo: uma pergunta pública e aberta atrairia respostas de grupos distintos, que oferecem argumentos compactos e tentam influenciar a interpretação do leitor. O documento não apresenta um experimento que permita medir se alguém mudou de voto por causa da publicação.</p>
      </Section>

      <Section n="02" title="Contexto e alegações citadas">
        <p style={pStyle}>O documento contextualiza o caso com alegações sobre eleições brasileiras, comunicação digital e campanhas. A tabela registra essas afirmações como foram atribuídas na síntese, não como resultados verificados nesta página.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {reportedClaims.map((item) => (
            <Card key={item.concept} style={{ padding: 16, display: "grid", gridTemplateColumns: "minmax(150px, .75fr) 1.6fr", gap: 14 }}>
              <strong style={{ color: T.text, fontSize: ".84rem" }}>{item.concept}</strong>
              <div>
                <p style={{ margin: 0, color: T.muted, fontSize: ".84rem", lineHeight: 1.6 }}>{item.claim}</p>
                <span style={{ display: "block", color: T.electric, fontSize: ".75rem", marginTop: 7 }}>{item.source}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="03" title="O caso e o volume de interações">
        <p style={pStyle}>Segundo o documento, a publicação pedia que as pessoas convencessem o autor, em uma resposta e sem insultos, a escolher entre os dois candidatos mencionados para o segundo turno. A síntese relata o volume abaixo como métricas observadas na plataforma, sem anexar dados brutos ou método de coleta.</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
          <MetaItem icon={Heart} label="Curtidas" value="9.123" />
          <MetaItem icon={Repeat2} label="Reposts" value="212" />
          <MetaItem icon={Users} label="Citações" value="161" />
        </div>
        <SubHeading icon={BarChart3} title="Interações relatadas no documento" />
        <Card style={{ padding: "20px 20px 8px" }}>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <BarChart data={tweetMetrics} layout="vertical" margin={{ left: 12, right: 18, top: 4, bottom: 4 }}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" horizontal={false} />
                <XAxis type="number" stroke={T.muted} fontSize={11} tickLine={false} axisLine={{ stroke: T.border }} />
                <YAxis type="category" dataKey="metric" width={104} stroke={T.muted} fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,.03)" }} />
                <Bar dataKey="value" name="Interações" fill={T.electric} radius={[0, 4, 4, 0]} maxBarSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </Section>

      <Section n="04" title="Enquadramentos descritos nas respostas">
        <p style={pStyle}>A síntese agrupa os argumentos em duas famílias de enquadramento. Esses rótulos resumem a leitura do documento sobre comentários selecionados; não representam uma codificação independente de todas as respostas.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {framingClusters.map((item) => (
            <Card key={item.frame} style={{ padding: 18 }}>
              <span style={{ color: T.electric, fontSize: ".74rem", fontWeight: 700, textTransform: "uppercase" }}>{item.side}</span>
              <h3 style={{ color: T.text, fontSize: ".95rem", margin: "8px 0 6px" }}>{item.frame}</h3>
              <p style={{ color: T.muted, fontSize: ".84rem", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="05" title="Limites de inferência">
        <Card style={{ padding: 18, borderColor: "rgba(245,158,11,.35)", background: "rgba(245,158,11,.06)" }}>
          <SubHeading icon={ShieldAlert} title="Engajamento não prova persuasão" />
          <p style={{ margin: 0, color: T.muted, fontSize: ".86rem", lineHeight: 1.7 }}>Visualizações e respostas não indicam quantas pessoas estavam indecisas, leram os argumentos ou alteraram sua preferência. A autoseleção de quem viu, respondeu ou compartilhou e fatores não observados impedem atribuir uma mudança de voto à exposição ao tweet sem desenho experimental ou dados apropriados.</p>
        </Card>
        <SubHeading icon={Users} title="Referências mencionadas no documento" />
        <ul style={{ margin: 0, paddingLeft: 20, color: T.muted, fontSize: ".83rem", lineHeight: 1.8 }}>
          {citedReferences.map((reference) => <li key={reference}>{reference}</li>)}
        </ul>
        <p style={{ ...pStyle, marginTop: 14 }}>A síntese não fornece uma bibliografia completa para conferir todas as atribuições. Resultados, percentuais e contexto eleitoral devem ser verificados nas fontes originais antes de serem reutilizados.</p>
      </Section>
    </main>
  );
}