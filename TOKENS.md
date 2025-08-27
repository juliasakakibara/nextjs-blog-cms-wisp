# 🎨 Sistema de Tokens - Geek Wisp

Este documento descreve o sistema completo de tokenização do projeto, permitindo personalizar facilmente qualquer aspecto visual e funcional do blog.

## 📋 Índice

- [Instalação e Configuração](#instalação-e-configuração)
- [Tokens Disponíveis](#tokens-disponíveis)
- [Exemplos de Uso](#exemplos-de-uso)
- [Customização Avançada](#customização-avançada)
- [Troubleshooting](#troubleshooting)

## 🚀 Instalação e Configuração

### Passo 1: Configurar Environment Variables

1. Copie o arquivo template:
```bash
cp .env.template .env.local
```

2. Configure as variáveis obrigatórias:
```env
NEXT_PUBLIC_BLOG_ID=8f050144-c250-4342-b909-00d1febf9138
```

3. Personalize os tokens conforme sua necessidade.

### Passo 2: Verificar Configuração

Execute o projeto e verifique se tudo está funcionando:
```bash
npm run dev
```

## 🎯 Tokens Disponíveis

### 📱 Configuração Básica

| Token | Padrão | Descrição |
|-------|--------|-----------|
| `NEXT_PUBLIC_BLOG_DISPLAY_NAME` | "Travel." | Nome exibido no cabeçalho |
| `NEXT_PUBLIC_BLOG_COPYRIGHT` | "Samantha" | Nome no copyright do rodapé |
| `NEXT_DEFAULT_METADATA_DEFAULT_TITLE` | "Travel with Samantha" | Título padrão para SEO |
| `NEXT_PUBLIC_BLOG_DESCRIPTION` | "Blog about travel and lifestyle." | Descrição para SEO |
| `NEXT_PUBLIC_BASE_URL` | "http://localhost:3000" | URL base do site |

### 🎨 Layout e Design

| Token | Padrão | Opções | Descrição |
|-------|--------|--------|-----------|
| `NEXT_PUBLIC_MAX_WIDTH` | "6xl" | xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl | Largura máxima do container |
| `NEXT_PUBLIC_CONTAINER_PADDING` | "2rem" | Qualquer valor CSS | Padding interno do container |
| `NEXT_PUBLIC_FONT_FAMILY` | "Inter" | Qualquer fonte Google | Fonte principal |
| `NEXT_PUBLIC_LANGUAGE` | "en" | Códigos ISO | Idioma do site |

### 🧭 Navegação

| Token | Padrão | Descrição |
|-------|--------|-----------|
| `NEXT_PUBLIC_MENU_ITEMS` | `[{"name":"Blog","href":"/"},{"name":"About","href":"/about"}]` | Itens do menu (JSON) |
| `NEXT_PUBLIC_RSS_ENABLED` | "true" | Habilitar link RSS |

### 📄 Conteúdo

| Token | Padrão | Descrição |
|-------|--------|-----------|
| `NEXT_PUBLIC_POSTS_PER_PAGE` | "10" | Posts por página |
| `NEXT_PUBLIC_PAGINATION_SIBLINGS` | "2" | Páginas vizinhas na paginação |
| `NEXT_PUBLIC_PLACEHOLDER_IMAGE` | "/images/placeholder.webp" | Imagem padrão |
| `NEXT_PUBLIC_LOADING_TEXT` | "Loading..." | Texto de carregamento |

### 💬 Comentários

| Token | Padrão | Descrição |
|-------|--------|-----------|
| `NEXT_PUBLIC_COMMENTS_TITLE_ADD` | "Add Comments" | Título seção adicionar comentário |
| `NEXT_PUBLIC_COMMENTS_TITLE_LIST` | "Comments" | Título lista de comentários |

### 📏 Cabeçalho

| Token | Padrão | Opções | Descrição |
|-------|--------|--------|-----------|
| `NEXT_PUBLIC_HEADER_TITLE_SIZE_MOBILE` | "text-4xl" | text-sm até text-6xl | Tamanho título mobile |
| `NEXT_PUBLIC_HEADER_TITLE_SIZE_DESKTOP` | "text-6xl" | text-sm até text-6xl | Tamanho título desktop |
| `NEXT_PUBLIC_HEADER_MARGIN_TOP_MOBILE` | "mt-8" | Qualquer classe Tailwind | Margem superior mobile |
| `NEXT_PUBLIC_HEADER_MARGIN_TOP_DESKTOP` | "mt-16" | Qualquer classe Tailwind | Margem superior desktop |
| `NEXT_PUBLIC_HEADER_MARGIN_BOTTOM` | "mb-12" | Qualquer classe Tailwind | Margem inferior |

### 🦶 Rodapé

| Token | Padrão | Opções | Descrição |
|-------|--------|--------|-----------|
| `NEXT_PUBLIC_FOOTER_MARGIN_TOP_MOBILE` | "mt-8" | Qualquer classe Tailwind | Margem superior mobile |
| `NEXT_PUBLIC_FOOTER_MARGIN_TOP_DESKTOP` | "mt-16" | Qualquer classe Tailwind | Margem superior desktop |
| `NEXT_PUBLIC_FOOTER_MARGIN_BOTTOM` | "mb-12" | Qualquer classe Tailwind | Margem inferior |
| `NEXT_PUBLIC_FOOTER_SHOW_YEAR` | "true" | true/false | Mostrar ano no copyright |

### 🎯 Hero Section

| Token | Padrão | Opções | Descrição |
|-------|--------|--------|-----------|
| `NEXT_PUBLIC_HERO_ENABLED` | "true" | true/false | Habilitar seção hero na página inicial |
| `NEXT_PUBLIC_HERO_TITLE` | "hacker space." | Qualquer texto | Título principal da seção hero |
| `NEXT_PUBLIC_HERO_SUBTITLE` | "Building lasting connections..." | Qualquer texto | Subtítulo/descrição da seção hero |
| `NEXT_PUBLIC_HERO_PADDING_Y_MOBILE` | "py-20" | Qualquer classe Tailwind | Padding vertical mobile |
| `NEXT_PUBLIC_HERO_PADDING_Y_DESKTOP` | "py-40" | Qualquer classe Tailwind | Padding vertical desktop |

### 🔍 SEO

| Token | Padrão | Descrição |
|-------|--------|-----------|
| `NEXT_PUBLIC_OG_IMAGE_WIDTH` | "1200" | Largura imagem Open Graph |
| `NEXT_PUBLIC_OG_IMAGE_HEIGHT` | "630" | Altura imagem Open Graph |

## 💡 Exemplos de Uso

### Blog Corporativo
```env
NEXT_PUBLIC_BLOG_DISPLAY_NAME=TechCorp Blog
NEXT_PUBLIC_BLOG_COPYRIGHT=TechCorp Inc.
NEXT_DEFAULT_METADATA_DEFAULT_TITLE=TechCorp - Insights and Innovation
NEXT_PUBLIC_BLOG_DESCRIPTION=Latest insights from our technology experts
NEXT_PUBLIC_MAX_WIDTH=4xl
NEXT_PUBLIC_HEADER_TITLE_SIZE_DESKTOP=text-5xl
```

### Blog Pessoal Minimalista
```env
NEXT_PUBLIC_BLOG_DISPLAY_NAME=João Silva
NEXT_PUBLIC_BLOG_COPYRIGHT=João Silva
NEXT_DEFAULT_METADATA_DEFAULT_TITLE=João Silva - Thoughts and Ideas
NEXT_PUBLIC_BLOG_DESCRIPTION=Personal blog about life, technology and philosophy
NEXT_PUBLIC_MAX_WIDTH=2xl
NEXT_PUBLIC_HEADER_TITLE_SIZE_MOBILE=text-3xl
NEXT_PUBLIC_HEADER_TITLE_SIZE_DESKTOP=text-4xl
NEXT_PUBLIC_POSTS_PER_PAGE=5
```

### Blog de Culinária
```env
NEXT_PUBLIC_BLOG_DISPLAY_NAME=Sabores do Mundo
NEXT_PUBLIC_BLOG_COPYRIGHT=Chef Maria
NEXT_DEFAULT_METADATA_DEFAULT_TITLE=Sabores do Mundo - Receitas Especiais
NEXT_PUBLIC_BLOG_DESCRIPTION=Receitas autênticas de todos os cantos do mundo
NEXT_PUBLIC_MENU_ITEMS=[{"name":"Receitas","href":"/"},{"name":"Sobre","href":"/about"},{"name":"Contato","href":"/contact"}]
NEXT_PUBLIC_COMMENTS_TITLE_ADD=Compartilhe sua Experiência
NEXT_PUBLIC_COMMENTS_TITLE_LIST=Experiências dos Leitores
NEXT_PUBLIC_HERO_TITLE=Sabores Autênticos.
NEXT_PUBLIC_HERO_SUBTITLE=Descubra receitas tradicionais de todo o mundo, com ingredientes frescos e técnicas milenares que transformam cada refeição em uma experiência única.
```

### Blog Tech/Startup
```env
NEXT_PUBLIC_BLOG_DISPLAY_NAME=TechVision
NEXT_PUBLIC_BLOG_COPYRIGHT=TechVision Inc.
NEXT_DEFAULT_METADATA_DEFAULT_TITLE=TechVision - Innovation & Insights
NEXT_PUBLIC_BLOG_DESCRIPTION=Leading insights on technology trends and startup culture
NEXT_PUBLIC_HERO_TITLE=Building Tomorrow.
NEXT_PUBLIC_HERO_SUBTITLE=We explore cutting-edge technologies and share insights that drive innovation, helping entrepreneurs and developers stay ahead of the curve.
```

## 🔧 Customização Avançada

### Adicionando Novos Tokens

1. **Adicione no `src/config.ts`:**
```typescript
// No objeto de retorno da função buildConfig
myCustomToken: process.env.NEXT_PUBLIC_MY_CUSTOM_TOKEN || "default_value"
```

2. **Use nos componentes:**
```typescript
import { config } from "@/config";

// Em qualquer componente
<div className={config.myCustomToken}>
```

3. **Documente no `.env.template`:**
```env
# Meu token customizado
NEXT_PUBLIC_MY_CUSTOM_TOKEN=valor_exemplo
```

### Menu Personalizado Avançado

Para menus mais complexos:
```env
NEXT_PUBLIC_MENU_ITEMS=[
  {"name":"Home","href":"/"},
  {"name":"Blog","href":"/blog"},
  {"name":"Portfólio","href":"/portfolio"},
  {"name":"LinkedIn","href":"https://linkedin.com/in/user","openInNewTab":true}
]
```

### Cores Personalizadas

Para personalizar cores, edite `src/app/globals.css`:
```css
:root {
  --primary: 210 40% 20%; /* Azul escuro */
  --secondary: 210 40% 90%; /* Azul claro */
}
```

## 🐛 Troubleshooting

### Problema: Tokens não aparecem
**Solução:** Verifique se:
1. O arquivo `.env.local` existe
2. As variáveis começam com `NEXT_PUBLIC_`
3. O servidor foi reiniciado após mudanças

### Problema: Estilos não aplicam
**Solução:** Para classes Tailwind dinâmicas, adicione no `tailwind.config.ts`:
```typescript
safelist: [
  'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
  'mt-4', 'mt-8', 'mt-12', 'mt-16',
  // Adicione outras classes que usa nos tokens
]
```

### Problema: Menu JSON inválido
**Solução:** Valide o JSON em [jsonlint.com](https://jsonlint.com/) antes de usar.

## 📚 Referências

- [Tailwind CSS Classes](https://tailwindcss.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [Wisp CMS Documentation](https://wisp.blog/docs)

---

**💡 Dica:** Mantenha este arquivo atualizado conforme adiciona novos tokens ao projeto!
