# Móvel Plan — V1 Portfolio-First Website

Este é o website V1 da **Móvel Plan**, redesenhado como uma experiência focada exclusivamente em portfolio. O objetivo é demonstrar autoridade através de projetos reais concluídos, utilizando mídia extraída diretamente do perfil oficial da marca.

## 🚀 Status V1 (2026-05-19)

- **Portfolio-First:** Removidas seções de marketing genérico (depoimentos, estatísticas não verificadas, textos longos).
- **Mídia Real:** Integrados reels e imagens reais do Instagram em alta qualidade.
- **Minimalismo:** Design focado na visualização do produto com cópia funcional e curta.
- **Performance:** Build de produção verificado com `npm run build` (Next.js 16.2.6).

## ✨ Funcionalidades Principais

- **Hero Cinemático:** Background em vídeo (reel) com headline de impacto e CTA direto para o portfolio.
- **Grade de Portfolio Dinâmica:** Filtros por categoria (Salas, Quartos, Cozinhas, Banheiros) e suporte nativo a vídeo no grid.
- **Visualização de Detalhes:** Modal expandido com materiais utilizados e link direto para o post original no Instagram.
- **ConversãoWhatsApp:** CTA de orçamento simplificado e persistente.

## 🛠️ Como Customizar

### Conteúdo e Portfolio

A fonte de verdade para o conteúdo e os itens do portfolio é o arquivo:
`lib/content/movel-plan.ts`

Cada item do portfolio suporta:
- `video`: URL para o arquivo MP4.
- `poster`: Imagem de fallback/capa.
- `materials`: Lista de materiais/acabamentos (ex: MDF Ares, Off White).
- `instagramUrl`: Link de procedência para o post original.

### Atendimento

Os links de WhatsApp e Telefone estão centralizados nos componentes `Header`, `Footer` e `Contact`.

## 📦 Verificação Técnica

O template atende aos critérios de:
1. **Instalação:** `npm install` sem erros.
2. **Desenvolvimento:** `npm run dev` funcional.
3. **Build:** `npm run build` gerando estáticos otimizados com sucesso.
4. **Responsividade:** Testado em resoluções mobile e desktop.

---

Desenvolvido com foco em excelência e performance pela equipe da **4virtue**.
