import React, { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { MapPin, ArrowLeft, Users, CalendarRange, FlaskConical, Trophy, Gamepad2, BookOpen, Music, Tv } from "lucide-react";
import { T } from "../tokens";
import { Card, Eyebrow, Section, SubHeading, MetaItem, StatRow, CustomTooltip, pStyle } from "./ui";
import TopRanking from "./TopRanking";
import { categoryStats, geoData, totalRegistros, totalCities } from "../data";

const ICONS = { Gamepad2, BookOpen, Music, Tv };

export default function DetailViewPerfilUsuario({ onBack }) {
  const geoSorted = useMemo(() => [...geoData].sort((a, b) => b.count - a.count), []);

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

      <Eyebrow>Relatório de Consultoria · Ciência de Dados</Eyebrow>
      <h1 style={{ fontSize: "2.15rem", fontWeight: 800, lineHeight: 1.2, color: T.text, margin: "0 0 22px" }}>
        Análise Descritiva do Perfil de Usuário e Padrões de Consumo Cultural na Plataforma RecomendeMe
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
        {["Emanuel Carneiro Faustino da Silva", "Gabriel Ferreira Trindade de Souza", "Lucas Matheus Alves da Silva", "Antonio M. B. do Nascimento"].map((name) => (
          <span key={name} style={{ fontSize: ".76rem", color: T.text, background: T.navyTile, border: `1px solid ${T.border}`, borderRadius: 20, padding: "6px 13px" }}>
            {name}
          </span>
        ))}
      </div>

      <Card style={{ padding: 24, marginBottom: 48 }}>
        <p style={{ margin: 0, color: T.text, fontSize: ".95rem", lineHeight: 1.75 }}>
          Investigação do perfil comportamental dos usuários e dos padrões de consumo cultural na plataforma
          RecomendeMe. A Análise Exploratória de Dados mapeia as preferências predominantes em múltiplas mídias —
          séries, livros, jogos e músicas — e a relação entre a oferta de conteúdo e o engajamento real (curtidas,
          visualizações e tempo de permanência) da comunidade.
        </p>
        <div style={{ display: "flex", gap: 24, marginTop: 20, paddingTop: 20, borderTop: `1px solid ${T.border}`, flexWrap: "wrap" }}>
          <MetaItem icon={CalendarRange} label="Período" value="2020 – 2025" />
          <MetaItem icon={Users} label="Cidades mapeadas" value={String(totalCities)} />
          <MetaItem icon={FlaskConical} label="Registros analisados" value={String(totalRegistros)} />
        </div>
      </Card>

      <Section n="01" title="Objetivos">
        <p style={pStyle}>
          Plataformas de recomendação cultural mediam o acesso a conteúdos diversos, do entretenimento à formação
          intelectual. Este relatório descreve os registros da RecomendeMe acumulados entre 2020 e 2025, explorando
          a localização geográfica dos usuários, a distribuição de gêneros nas quatro mídias da plataforma e as
          métricas quantitativas de interação, com o objetivo de diagnosticar os padrões de engajamento e mapear as
          preferências consolidadas da comunidade.
        </p>
      </Section>

      <Section n="02" title="Metodologia">
        <p style={pStyle}>
          Pesquisa quantitativa descritiva sobre uma base de 54 tabelas fragmentadas, exportadas em CSV do banco de
          dados original e unificadas em R. A ausência de chaves íntegras entre tabelas impediu a automação
          completa dos relacionamentos, restringindo o cruzamento entre preferências culturais e dados demográficos
          mais profundos, como faixa etária.
        </p>
        <p style={pStyle}>
          Para ranquear os itens de destaque, foi aplicada uma métrica de recomendação por filtragem demográfica:
          uma média ponderada que evita o viés de itens com poucas visualizações mas proporções perfeitas de
          aprovação.
        </p>

        <Card style={{ padding: 22, marginTop: 18, background: T.navyTile }}>
          <div style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: "1rem", color: T.electric, textAlign: "center", marginBottom: 16 }}>
            W = (v / (v + m)) · R + (m / (v + m)) · C
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10 }}>
            {[
              ["W", "pontuação ponderada final"],
              ["v", "visualizações do item"],
              ["m", "ponto de corte mínimo"],
              ["R", "curtidas do item"],
              ["C", "média de curtidas da categoria"],
            ].map(([sym, desc]) => (
              <div key={sym} style={{ fontSize: ".78rem", color: T.muted }}>
                <strong style={{ color: T.text }}>{sym}</strong> — {desc}
              </div>
            ))}
          </div>
        </Card>
        <p style={{ ...pStyle, marginTop: 16 }}>
          Diferente de escalas fixas como a do IMDb, a pontuação usa o volume absoluto de curtidas como variável de
          aprovação — não possui teto predefinido e serve como escala comparativa dentro de cada categoria.
        </p>
      </Section>

      <Section n="03" title="Resultados">
        <SubHeading icon={MapPin} title="Distribuição geográfica dos usuários" />
        <p style={pStyle}>
          A maioria dos usuários está concentrada no Nordeste e no Sudeste. Recife e São Paulo são as cidades mais
          representadas na base analisada.
        </p>
        <Card style={{ padding: "20px 20px 8px", marginBottom: 36 }}>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <BarChart data={geoSorted} layout="vertical" margin={{ left: 8, right: 24, top: 4, bottom: 4 }}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" horizontal={false} />
                <XAxis type="number" stroke={T.muted} fontSize={11} tickLine={false} axisLine={{ stroke: T.border }} allowDecimals={false} />
                <YAxis type="category" dataKey="city" stroke={T.muted} fontSize={11.5} tickLine={false} axisLine={false} width={110} />
                <Tooltip content={<CustomTooltip unit=" usuários" />} cursor={{ fill: "rgba(255,255,255,.03)" }} />
                <Bar dataKey="count" name="Usuários" radius={[0, 4, 4, 0]} maxBarSize={16}>
                  {geoSorted.map((_, i) => (
                    <Cell key={i} fill={i < 2 ? T.electric : T.electric30} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <SubHeading icon={FlaskConical} title="Volume e engajamento por categoria" />
        <p style={pStyle}>
          Músicas e Séries concentram o maior consumo real: Músicas têm a maior média de visualizações (100,98) e
          Séries acumulam o maior total de curtidas da plataforma (532). Livros é a categoria com mais registros
          salvos (248), mas apresenta a menor interação proporcional.
        </p>

        <div className="rm-cat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 22 }}>
          {categoryStats.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <Card key={c.key} style={{ padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: T.electric15, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
                    <Icon size={16} color={T.electric} />
                  </div>
                  <span style={{ color: T.text, fontWeight: 700, fontSize: ".92rem" }}>{c.name}</span>
                </div>
                <StatRow label="Registros" value={c.registros} />
                <StatRow label="Média de visualizações" value={c.mediaViews.toFixed(2)} />
                <StatRow label="Média de curtidas" value={c.mediaLikes.toFixed(2)} />
                <StatRow label="Total de curtidas" value={c.totalLikes} last />
              </Card>
            );
          })}
        </div>

        <Card style={{ padding: "20px 20px 8px", marginBottom: 36 }}>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <BarChart data={categoryStats} margin={{ left: -12, right: 12, top: 4, bottom: 4 }}>
                <CartesianGrid stroke="rgba(255,255,255,.06)" vertical={false} />
                <XAxis dataKey="name" stroke={T.muted} fontSize={11.5} tickLine={false} axisLine={{ stroke: T.border }} />
                <YAxis stroke={T.muted} fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip unit=" views" />} cursor={{ fill: "rgba(255,255,255,.03)" }} />
                <Bar dataKey="mediaViews" name="Média de visualizações" radius={[4, 4, 0, 0]} maxBarSize={54} fill={T.electric} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <SubHeading icon={Trophy} title="Rankings por pontuação ponderada" />
        <p style={pStyle}>
          Top 5 de cada categoria segundo a fórmula de filtragem demográfica descrita na metodologia. Em Músicas,
          apenas três faixas romperam o ponto de corte mínimo de visualizações.
        </p>
        <div style={{ marginBottom: 36 }}>
          <TopRanking />
        </div>

        <p style={pStyle}>
          Nas Séries, <strong style={{ color: T.text }}>O Mundo Sombrio de Sabrina</strong> e{" "}
          <strong style={{ color: T.text }}>The Boys</strong> empataram na liderança, ambas com 121 visualizações e
          7 curtidas. Já em Livros, os líderes reúnem alto volume de tráfego — todos acima de 110 visualizações —
          mas nenhum registrou curtidas, puxando a pontuação de toda a categoria para baixo.
        </p>
      </Section>

      <Section n="04" title="Conclusões">
        <Card style={{ padding: 22, borderStyle: "dashed", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ width: 8, height: 8, borderRadius: 4, background: T.electric, flex: "0 0 auto" }} />
          <p style={{ margin: 0, color: T.muted, fontSize: ".88rem" }}>
            Conclusões consolidadas do relatório original ainda não publicadas pelos autores — esta página será
            atualizada assim que a versão final for disponibilizada.
          </p>
        </Card>
      </Section>

      <Section n="05" title="Referências">
        <ol style={{ margin: 0, padding: "0 0 0 20px", color: T.muted, fontSize: ".85rem", lineHeight: 1.9 }}>
          <li>R Core Team (2017). <em>R: A Language and Environment for Statistical Computing.</em> R Foundation for Statistical Computing, Vienna, Áustria.</li>
          <li>DataCamp (2024). <em>Sistemas de Recomendação em Python.</em> Acesso em 03 jul. 2026.</li>
        </ol>
      </Section>
    </div>
  );
}
