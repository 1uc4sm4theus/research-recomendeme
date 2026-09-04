import React from "react";
import { ArrowLeft, BookOpen, Database, GitBranch, ShieldCheck, Target, Workflow } from "lucide-react";
import { T } from "../tokens";
import { Card, Eyebrow, Section, SubHeading, MetaItem, pStyle } from "./ui";
import {
  evidenceLevels,
  researchQuestions,
  methodAssessment,
  v2Events,
  ethicalPrinciples,
  limitations,
} from "../data-masterzap";

const levelColors = {
  "A/B": T.electric,
  "B/C": "#f59e0b",
  C: T.danger,
};

export default function DetailViewMasterZap({ onBack }) {
  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "48px 24px 120px" }}>
      <button
        onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", color: T.muted, fontSize: ".82rem", fontWeight: 600, cursor: "pointer", padding: 0, marginBottom: 36 }}
      >
        <ArrowLeft size={15} /> Todas as pesquisas
      </button>

      <Eyebrow>Pesquisa metodológica · Auditoria e proposta</Eyebrow>
      <h1 style={{ fontSize: "2.05rem", fontWeight: 800, lineHeight: 1.22, color: T.text, margin: "0 0 22px" }}>
        Exploração de Acervos Digitais de Comunicações de Alto Interesse Público: Estrutura de Conteúdo, Arquitetura de Descoberta e Limites Metodológicos na Mensuração de Atenção
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
        {["Lucas Matheus Alves da Silva", "Raphael Chagas da Silva"].map((name) => (
          <span key={name} style={{ fontSize: ".76rem", color: T.text, background: T.navyTile, border: `1px solid ${T.border}`, borderRadius: 20, padding: "6px 13px" }}>
            {name}
          </span>
        ))}
      </div>

      <Card style={{ padding: 24, marginBottom: 28 }}>
        <p style={{ margin: 0, color: T.text, fontSize: ".95rem", lineHeight: 1.75 }}>
          Auditoria metodológica preliminar do MasterZap Analytics e proposta de pesquisa sobre exploração de grandes acervos digitais de conteúdo controverso. O estudo separa descrição do acervo, métricas derivadas e interpretações, além de propor uma instrumentação de segunda geração para medir navegação e atenção com maior validade.
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${T.border}`, flexWrap: "wrap" }}>
          <MetaItem icon={Database} label="Base auditada" value="MasterZap Analytics" />
          <MetaItem icon={ShieldCheck} label="Status" value="Proposta exploratória" />
          <MetaItem icon={BookOpen} label="Evidência" value="Sem código ou dataset anexado" />
        </div>
      </Card>

      <Card style={{ padding: 18, marginBottom: 48, borderColor: T.electric30, background: T.electric06 }}>
        <strong style={{ display: "block", color: T.electric, fontSize: ".84rem", marginBottom: 6 }}>Nota de escopo</strong>
        <p style={{ margin: 0, color: T.muted, fontSize: ".86rem", lineHeight: 1.7 }}>
          Esta análise foi produzida a partir da documentação e dos resultados relatados pelos autores. Sem inspeção do código Python e do dataset, as conclusões sobre as funções de coleta, classificação e score permanecem condicionais e devem ser confirmadas antes de qualquer publicação.
        </p>
      </Card>

      <Section n="01" title="Problema e contribuição">
        <p style={pStyle}>
          Como caracterizar cientificamente a exploração de um grande acervo digital quando a instrumentação disponível é heurística e não validada? A contribuição proposta é metodológica: oferecer um framework para distinguir estrutura do conteúdo, sinais agregados de alcance e comportamento de navegação, evitando transformar uma métrica de produto em evidência de atenção, leitura ou compreensão.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 12 }}>
          {[
            [Target, "Objeto principal", "Estrutura do acervo e arquitetura de descoberta."],
            [GitBranch, "Camada comportamental", "Somente eventos reais, anonimizados e validados."],
            [ShieldCheck, "Contribuição", "Auditoria reproduzível de métricas heurísticas."],
          ].map(([Icon, title, text]) => (
            <Card key={title} style={{ padding: 16 }}>
              <Icon size={17} color={T.electric} />
              <div style={{ color: T.text, fontWeight: 700, fontSize: ".86rem", margin: "10px 0 5px" }}>{title}</div>
              <div style={{ color: T.muted, fontSize: ".8rem", lineHeight: 1.6 }}>{text}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="02" title="Evidência, derivação e interpretação">
        <p style={pStyle}>A classificação abaixo impede que resultados derivados de heurísticas sejam apresentados como observações diretas do comportamento dos usuários.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {evidenceLevels.map((item) => (
            <Card key={item.result} style={{ padding: 16, display: "grid", gridTemplateColumns: "minmax(145px, .8fr) 58px 1.8fr", gap: 14, alignItems: "start" }}>
              <strong style={{ color: T.text, fontSize: ".84rem" }}>{item.result}</strong>
              <span style={{ color: levelColors[item.level], fontWeight: 800, fontSize: ".8rem" }}>{item.level}</span>
              <span style={{ color: T.muted, fontSize: ".82rem", lineHeight: 1.55 }}>{item.note}</span>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="03" title="Perguntas de pesquisa">
        <p style={pStyle}>As perguntas abaixo são respondíveis apenas na medida em que os eventos e identificadores necessários existirem e forem validados.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {researchQuestions.map((item) => (
            <Card key={item.id} style={{ padding: 18 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
                <span style={{ color: T.electric, fontWeight: 800, fontSize: ".8rem" }}>{item.id}</span>
                <strong style={{ color: T.text, fontSize: ".92rem" }}>{item.title}</strong>
              </div>
              <p style={{ margin: "10px 0 7px", color: T.text, fontSize: ".86rem", lineHeight: 1.6 }}>{item.question}</p>
              <span style={{ color: T.muted, fontSize: ".79rem", lineHeight: 1.55 }}>Método: {item.method}</span>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="04" title="Metodologia quantitativa">
        <SubHeading icon={Workflow} title="Métodos condicionados aos dados disponíveis" />
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".82rem" }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${T.border}` }}>
                {["Método", "Aplicabilidade", "Escopo"].map((heading) => (
                  <th key={heading} style={{ textAlign: "left", padding: "11px 12px", color: T.muted, fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".05em" }}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {methodAssessment.map((item, index) => (
                <tr key={item.method} style={{ borderBottom: index < methodAssessment.length - 1 ? `1px solid ${T.border}` : "none" }}>
                  <td style={{ padding: "11px 12px", color: T.text, fontWeight: 600 }}>{item.method}</td>
                  <td style={{ padding: "11px 12px", color: item.status === "Condicional" ? "#f59e0b" : T.electric }}>{item.status}</td>
                  <td style={{ padding: "11px 12px", color: T.muted }}>{item.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ ...pStyle, marginTop: 18 }}>
          A rede de co-ocorrência pode descrever a estrutura textual do acervo, mas não deve ser interpretada como rede de relações reais, poder, culpa ou importância social das pessoas mencionadas.
        </p>
      </Section>

      <Section n="05" title="Instrumentação v2">
        <p style={pStyle}>Para estudar atenção e navegação de forma defensável, a próxima versão deve separar alcance, impressão e interação, com identificadores anonimizados e documentação de schema.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))", gap: 10 }}>
          {v2Events.map((event) => (
            <Card key={event} style={{ padding: 15, color: T.muted, fontSize: ".82rem", lineHeight: 1.55 }}>{event}</Card>
          ))}
        </div>
      </Section>

      <Section n="06" title="Considerações éticas">
        <p style={pStyle}>O acervo pode conter dados pessoais, terceiros não públicos e comunicações de origem sensível. A publicação deve reduzir o risco de reidentificação e de amplificação indevida do material de origem.</p>
        <ul style={{ margin: 0, paddingLeft: 19, color: T.muted, fontSize: ".86rem", lineHeight: 1.8 }}>
          {ethicalPrinciples.map((principle) => <li key={principle}>{principle}</li>)}
        </ul>
      </Section>

      <Section n="07" title="Limitações e conclusão">
        <Card style={{ padding: 20, marginBottom: 20, background: T.navyTile }}>
          <strong style={{ display: "block", color: T.electric, fontSize: ".88rem", marginBottom: 8 }}>Conclusão provisória</strong>
          <p style={{ margin: 0, color: T.muted, fontSize: ".86rem", lineHeight: 1.7 }}>
            O resultado mais defensável neste estágio é uma caracterização do acervo e de sua arquitetura de descoberta, acompanhada de uma auditoria explícita dos limites do interest_score. Não é possível afirmar que usuários leram, compreenderam ou demonstraram maior interesse por pessoas específicas sem eventos comportamentais reais e validação ética.
          </p>
        </Card>
        <ul style={{ margin: 0, paddingLeft: 19, color: T.muted, fontSize: ".86rem", lineHeight: 1.8 }}>
          {limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
        </ul>
      </Section>
    </div>
  );
}
