export const categoryStats = [
  { key: "jogos", name: "Jogos", icon: "Gamepad2", registros: 88, mediaViews: 14.42, medianaViews: 14.0, mediaLikes: 0.56, totalLikes: 49 },
  { key: "livros", name: "Livros", icon: "BookOpen", registros: 248, mediaViews: 65.05, medianaViews: 56.5, mediaLikes: 0.18, totalLikes: 45 },
  { key: "musicas", name: "Músicas", icon: "Music", registros: 56, mediaViews: 100.98, medianaViews: 102.0, mediaLikes: 4.23, totalLikes: 237 },
  { key: "series", name: "Séries", icon: "Tv", registros: 138, mediaViews: 91.55, medianaViews: 89.0, mediaLikes: 3.86, totalLikes: 532 },
];

export const geoData = [
  { city: "Recife", count: 6 },
  { city: "São Paulo", count: 5 },
  { city: "Natal", count: 2 },
  { city: "Rio de Janeiro", count: 2 },
  { city: "Fortaleza", count: 1 },
  { city: "Goiás", count: 1 },
  { city: "Goiânia", count: 1 },
  { city: "Lisboa", count: 1 },
  { city: "Minas Gerais", count: 1 },
  { city: "Novo México", count: 1 },
  { city: "Parnamirim", count: 1 },
];

export const topLists = {
  jogos: {
    label: "Jogos",
    icon: "Gamepad2",
    items: [
      { title: "Naruto - Ultimate Ninja 5", tag: "Ação", likes: 2, views: 35, score: 1.52 },
      { title: "League of Legends", tag: "Moba", likes: 2, views: 18, score: 1.29 },
      { title: "Dead Space", tag: "Terror", likes: 2, views: 18, score: 1.29 },
      { title: "Dragon Ball - Budokai 3", tag: "Luta", likes: 1, views: 33, score: 0.85 },
      { title: "Persona", tag: "RPG", likes: 1, views: 22, score: 0.80 },
    ],
  },
  livros: {
    label: "Livros",
    icon: "BookOpen",
    items: [
      { title: "As 48 Leis do Poder", tag: "Não-ficção", likes: 0, views: 111, score: 0.09 },
      { title: "Controle Cerebral e Emocional", tag: "Não-ficção", likes: 0, views: 112, score: 0.09 },
      { title: "Sherlock Holmes - Um Escândalo na Boêmia", tag: "Ficção", likes: 0, views: 114, score: 0.09 },
      { title: "Dos Delitos e Das Leis", tag: "Não-ficção", likes: 0, views: 115, score: 0.09 },
      { title: "Soren Kierkegaard - O Conceito de Angústia", tag: "Filosofia", likes: 0, views: 117, score: 0.09 },
    ],
  },
  musicas: {
    label: "Músicas",
    icon: "Music",
    items: [
      { title: "All The Things She Said — t.A.T.u", tag: "Pop", likes: 9, views: 114, score: 6.63 },
      { title: "Gabor Szabo — Dreams", tag: "Jazz", likes: 6, views: 116, score: 5.13 },
      { title: "Thousand Foot Krutch", tag: "Rock", likes: 0, views: 113, score: 2.11 },
    ],
  },
  series: {
    label: "Séries",
    icon: "Tv",
    items: [
      { title: "O Mundo Sombrio de Sabrina", tag: "Comédia", likes: 7, views: 121, score: 5.49 },
      { title: "The Boys", tag: "Aventura", likes: 7, views: 121, score: 5.49 },
      { title: "Westworld", tag: "Fantasia", likes: 6, views: 127, score: 4.99 },
      { title: "Ozark", tag: "Drama", likes: 6, views: 114, score: 4.94 },
      { title: "Mulher Gato", tag: "Aventura", likes: 5, views: 122, score: 4.45 },
    ],
  },
};

export const totalRegistros = categoryStats.reduce((a, c) => a + c.registros, 0);
export const totalCities = geoData.length;
