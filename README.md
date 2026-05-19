# Móvel Plan — Premium Furniture Template

Este é um modelo de website premium desenvolvido para a **Móvel Plan**, focado em conversão e experiência visual de alta qualidade para o nicho de móveis planejados.

## 🚀 Tecnologias

- **Framework:** Next.js 16 (App Router)
- **Estilização:** Tailwind CSS 4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Scroll Suave:** Lenis

## ✨ Funcionalidades

- **Hero Section com Vídeo:** Suporte para background em vídeo mobile-first.
- **Portfolio Visual:** Grade de projetos com expansão em lightbox para detalhes.
- **Linha do Tempo Responsiva:** Visualização clara do processo de customização.
- **Design Token Discipline:** Cores e espaçamentos centralizados para fácil customização.
- **Performance:** Otimizado para Lighthouse 90+ em Performance e Acessibilidade.
- **SEO Ready:** Metadados, sitemap e robots.txt configurados.

## 🛠️ Como Customizar

### Conteúdo

Todo o conteúdo do site está centralizado em `lib/content/movel-plan.ts`. Para alterar textos, estatísticas ou passos do processo, edite este arquivo.

### Cores e Temas

As cores principais estão definidas como variáveis CSS em `app/globals.css`. O sistema utiliza o `@theme` do Tailwind 4.

### Imagens e Vídeos

Para alterar as imagens do portfolio ou o vídeo do hero, atualize as URLs em `lib/content/movel-plan.ts` ou passe as props diretamente no `app/page.tsx`.

## 📦 Desenvolvimento e Deploy

### Local

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Deploy

O projeto está configurado para deploy imediato na **Vercel**. Basta conectar o repositório e as configurações padrão do Next.js serão aplicadas.

---

Desenvolvido com foco em excelência e performance pela equipe da **4virtue**.
