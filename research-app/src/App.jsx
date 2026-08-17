import React, { useState, Suspense, lazy } from "react";
import { T } from "./tokens";
import { useSEO } from "./seo";
import NavBar from "./components/NavBar";
import ListView from "./components/ListView";

// DetailView carrega recharts — code-split para não pesar a listagem inicial
const DetailView = lazy(() => import("./components/DetailView"));

function DetailFallback() {
  return (
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "48px 24px", color: T.muted, fontSize: ".85rem" }}>
      Carregando pesquisa…
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("list");
  useSEO(view);

  return (
    <div style={{ background: T.navy, minHeight: "100vh", fontFamily: "'Figtree', ui-sans-serif, system-ui, sans-serif", color: T.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .rm-fade { animation: rmFadeIn .45s ease both; }
        @keyframes rmFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .rm-fade { animation: none; } }
        @media (max-width: 640px) { .rm-cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <NavBar view={view} onHome={() => setView("list")} />

      <div key={view} className="rm-fade">
        {view === "list" ? (
          <ListView onOpen={() => setView("detail")} />
        ) : (
          <Suspense fallback={<DetailFallback />}>
            <DetailView onBack={() => setView("list")} />
          </Suspense>
        )}
      </div>

      <footer style={{ borderTop: `1px solid ${T.border}`, padding: "28px 24px", textAlign: "center" }}>
        <span style={{ fontSize: ".74rem", color: T.muted }}>
          RecomendeMe Research &amp; Intelligence — Ecossistema Cultural Independente
        </span>
      </footer>
    </div>
  );
}
