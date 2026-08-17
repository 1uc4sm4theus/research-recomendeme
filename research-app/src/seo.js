import { useEffect } from "react";

export const SITE_URL = "https://research.recomendeme.com.br";
export const SITE_NAME = "RecomendeMe Research";
export const OG_IMAGE = "https://recomendeme.com/pt/logo_header.png";

export const REPORT_SEO = {
  slug: "perfil-usuario-consumo-cultural-recomendeme",
  title: "Perfil de Usuário e Consumo Cultural na RecomendeMe | RecomendeMe Research",
  description:
    "Relatório de consultoria (LEA/UFRN) sobre o perfil comportamental dos usuários e os padrões de consumo cultural na plataforma RecomendeMe, com dados de 2020 a 2025 em séries, livros, jogos e músicas.",
  authors: [
    "Emanuel Carneiro Faustino da Silva",
    "Gabriel Ferreira Trindade de Souza",
    "Lucas Matheus Alves da Silva",
    "Antonio M. B. do Nascimento",
  ],
  keywords: [
    "estatística descritiva",
    "plataforma digital",
    "padrões de consumo cultural",
    "RecomendeMe",
    "perfil de usuário",
    "análise de dados culturais",
  ],
  datePublished: "2026-07-03",
};

/**
 * Atualiza <title>, meta tags, Open Graph, Twitter Card, canonical e JSON-LD.
 * Roda no cliente — cobre crawlers que executam JS (Googlebot atual).
 * IMPORTANTE: para bots que NÃO executam JS (comuns em crawlers de IA/GEO),
 * isso não é suficiente sozinho — a rota precisa ser pré-renderizada no
 * build (ver vite-plugin-ssg / prerender no vite.config.js deste projeto).
 */
export function useSEO(view) {
  useEffect(() => {
    const isDetail = view === "detail";
    const title = isDetail ? REPORT_SEO.title : `Pesquisas | ${SITE_NAME}`;
    const description = isDetail
      ? REPORT_SEO.description
      : "Estudos, relatórios e working papers do RecomendeMe Research & Intelligence sobre comportamento cultural, dados da plataforma e metodologias de recomendação.";
    const canonical = isDetail
      ? `${SITE_URL}/pesquisas/${REPORT_SEO.slug}`
      : `${SITE_URL}/pesquisas`;

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
    setMeta("name", "keywords", REPORT_SEO.keywords.join(", "));
    setMeta("name", "robots", "index, follow");
    setMeta("name", "author", REPORT_SEO.authors.join(", "));

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
          headline:
            "Análise Descritiva do Perfil de Usuário e Padrões de Consumo Cultural na Plataforma RecomendeMe",
          description: REPORT_SEO.description,
          url: canonical,
          image: OG_IMAGE,
          datePublished: REPORT_SEO.datePublished,
          inLanguage: "pt-BR",
          keywords: REPORT_SEO.keywords.join(", "),
          author: REPORT_SEO.authors.map((name) => ({ "@type": "Person", name })),
          publisher: {
            "@type": "Organization",
            name: "RecomendeMe",
            url: "https://recomendeme.com",
            logo: { "@type": "ImageObject", url: OG_IMAGE },
          },
          about: { "@type": "Thing", name: "Consumo cultural na plataforma RecomendeMe" },
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
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                url: `${SITE_URL}/pesquisas/${REPORT_SEO.slug}`,
                name: REPORT_SEO.title,
              },
            ],
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
