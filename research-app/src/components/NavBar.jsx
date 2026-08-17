import React from "react";
import { T } from "../tokens";

export default function NavBar({ view, onHome }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(6,13,30,.92)",
        borderBottom: `1px solid ${T.border}`,
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={onHome}
          style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <img src="https://recomendeme.com/pt/logo_header.png" alt="RecomendeMe" style={{ height: 28, width: "auto" }} />
          <span style={{ width: 1, height: 18, background: T.border }} />
          <span style={{ fontWeight: 700, fontSize: ".95rem", color: T.text, letterSpacing: ".01em" }}>Research</span>
        </button>

        <nav style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <span style={{ fontSize: ".78rem", color: view === "list" ? T.electric : T.muted, fontWeight: 600 }}>Pesquisas</span>
          <span style={{ fontSize: ".78rem", color: T.muted, fontWeight: 500 }}>Metodologia</span>
          <span style={{ fontSize: ".78rem", color: T.muted, fontWeight: 500 }}>Sobre</span>
        </nav>
      </div>
    </header>
  );
}
