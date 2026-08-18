import { useEffect } from "react";
import { REPORTS, getReport } from "./reports";

export const SITE_URL = "https://research.recomendeme.com.br";
export const SITE_NAME = "RecomendeMe Research";
export const OG_IMAGE = "https://recomendeme.com/pt/logo_header.png";

/**
 * Atualiza <title>, meta tags, Open Graph, Twitter Card, canonical e JSON-LD.
 * `view` é 'list' ou o slug de uma pesquisa registrada em src/reports.js.
 * Roda no cliente — cobre crawlers que executam JS (Googlebot atual).
 * IMPORTANTE: para bots que NÃO executam JS (comuns em crawlers de IA/GEO),
 * isso não é suficiente sozinho — a rota precisa ser pré-renderizada no build.
 */
export function useSEO(view) {
  useEffect(() => {
    const report = view === "list" ? null : getReport(view);
    const isDetail = !!report;

    const title = isDetail ? `${report.title} | ${SITE_NAME}` : `Pesquisas | ${SITE_NAME}`;
    const description = isDetail
      ? report.seoDescription
      : "Estudos, relatórios e working papers do RecomendeMe Research & Intelligence sobre comportamento cultural, dados da plataforma e metodologias de recomendação.";
    const canonical = isDetail ? `${SITE_URL}/pesquisas/${report.slug}` : `${SITE_URL}/pesquisas`;

    document.title = title;

    const setMeta = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "keywords", isDetail ? report.keywords.join(", ") : "");
    setMeta("name", "robots", "index, follow");
    setMeta("name", "author", isDetail ? report.authors.join(", ") : "RecomendeMe");

    setMeta("property", "og:type", isDetail ? "article" : "website");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "pt_BR");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", OG_IMAGE);

    let linkCanonical = document.head.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical);

    const jsonLd = isDetail
      ? {
          "@context": "https://schema.org",
          "@type": "Report",
          headline: report.title,
          description: report.seoDescription,
          url: canonical,
          image: OG_IMAGE,
          datePublished: report.datePublished,
          inLanguage: "pt-BR",
          keywords: report.keywords.join(", "),
          author: report.authors.map((name) => ({ "@type": "Person", name })),
          publisher: {
            "@type": "Organization",
            name: "RecomendeMe",
            url: "https://recomendeme.com",
            logo: { "@type": "ImageObject", url: OG_IMAGE },
          },
          isPartOf: { "@type": "CreativeWorkSeries", name: SITE_NAME, url: `${SITE_URL}/pesquisas` },
        }
      : {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Pesquisas | ${SITE_NAME}`,
          description,
          url: canonical,
          isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: REPORTS.map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}/pesquisas/${r.slug}`,
              name: r.title,
            })),
          },
        };

    let script = document.getElementById("rm-jsonld");
    if (!script) {
      script = document.createElement("script");
      script.id = "rm-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [view]);
}
