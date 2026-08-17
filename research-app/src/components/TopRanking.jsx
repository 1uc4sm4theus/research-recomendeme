import React, { useState } from "react";
import { T } from "../tokens";
import { Card } from "./ui";
import { topLists } from "../data";

export default function TopRanking() {
  const keys = Object.keys(topLists);
  const [active, setActive] = useState("series");
  const list = topLists[active];
  const maxScore = Math.max(...list.items.map((i) => i.score));

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {keys.map((k) => {
          const L = topLists[k];
          const Icon = L.icon;
          const isActive = active === k;
          return (
            <button
              key={k}
              onClick={() => setActive(k)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "9px 16px",
                borderRadius: 8,
                border: `1px solid ${isActive ? T.electric : T.border}`,
                background: isActive ? T.electric : "rgba(255,255,255,.04)",
                color: isActive ? "#fff" : T.muted,
                fontSize: ".82rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background .15s, border-color .15s, color .15s",
              }}
            >
              {L.label}
            </button>
          );
        })}
      </div>

      <Card style={{ padding: "6px 0" }}>
        {list.items.map((item, i) => (
          <div
            key={item.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 22px",
              borderBottom: i < list.items.length - 1 ? `1px solid ${T.border}` : "none",
            }}
          >
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: i === 0 ? T.electric : T.muted, width: 26, flex: "0 0 auto" }}>
              {String(i + 1).padStart(2, "0")}
            </div>

            <div style={{ flex: "1 1 auto", minWidth: 0 }}>
              <div style={{ color: T.text, fontWeight: 600, fontSize: ".92rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {item.title}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                <span style={{ fontSize: ".68rem", color: T.muted, border: `1px solid ${T.border}`, borderRadius: 5, padding: "2px 7px" }}>
                  {item.tag}
                </span>
                <span style={{ fontSize: ".72rem", color: T.muted }}>
                  {item.views} views · {item.likes} curtidas
                </span>
              </div>
              <div style={{ marginTop: 8, height: 4, borderRadius: 2, background: "rgba(255,255,255,.06)", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(item.score / maxScore) * 100}%`, background: T.electric, borderRadius: 2 }} />
              </div>
            </div>

            <div style={{ flex: "0 0 auto", textAlign: "right", minWidth: 46, color: T.electric, fontWeight: 700, fontSize: ".92rem" }}>
              {item.score.toFixed(2)}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
