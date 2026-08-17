import React from "react";
import { T } from "../tokens";

export function Eyebrow({ children }) {
  return (
    <div
      style={{
        textTransform: "uppercase",
        letterSpacing: ".18em",
        fontSize: ".68rem",
        fontWeight: 600,
        color: T.electric,
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}

export function SectionNumber({ n }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        borderRadius: 8,
        border: `1px solid ${T.border}`,
        background: T.navyTile,
        color: T.electric,
        fontSize: ".78rem",
        fontWeight: 700,
        marginRight: 12,
        flex: "0 0 auto",
      }}
    >
      {n}
    </span>
  );
}

export function Card({ children, style, className }) {
  return (
    <div
      className={className}
      style={{ background: T.navyPanel, border: `1px solid ${T.border}`, borderRadius: 14, ...style }}
    >
      {children}
    </div>
  );
}

export function CustomTooltip({ active, payload, label, unit }) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div
      style={{
        background: T.navyTile,
        border: `1px solid ${T.border}`,
        borderRadius: 10,
        padding: "10px 14px",
        fontSize: ".8rem",
        color: T.text,
      }}
    >
      <div style={{ color: T.muted, marginBottom: 4, fontSize: ".72rem" }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: T.text }}>
          {p.name}: <strong>{p.value}{unit || ""}</strong>
        </div>
      ))}
    </div>
  );
}

export const pStyle = { color: T.muted, fontSize: ".92rem", lineHeight: 1.75, margin: "0 0 16px" };

export function Section({ n, title, children }) {
  return (
    <section style={{ marginBottom: 56 }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <SectionNumber n={n} />
        <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: T.text, margin: 0 }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function SubHeading({ icon: Icon, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, marginTop: 8 }}>
      <Icon size={15} color={T.electric} />
      <h3 style={{ fontSize: ".98rem", fontWeight: 700, color: T.text, margin: 0 }}>{title}</h3>
    </div>
  );
}

export function MetaItem({ icon: Icon, label, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          background: T.navyTile,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={14} color={T.electric} />
      </div>
      <div>
        <div style={{ fontSize: ".68rem", color: T.muted, textTransform: "uppercase", letterSpacing: ".08em" }}>{label}</div>
        <div style={{ fontSize: ".88rem", color: T.text, fontWeight: 600 }}>{value}</div>
      </div>
    </div>
  );
}

export function StatRow({ label, value, last }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "6px 0",
        borderBottom: last ? "none" : `1px solid ${T.border}`,
      }}
    >
      <span style={{ fontSize: ".76rem", color: T.muted }}>{label}</span>
      <span style={{ fontSize: ".8rem", color: T.text, fontWeight: 600 }}>{value}</span>
    </div>
  );
}
