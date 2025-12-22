# Integração Backend - Mapeamento de Dados

Este documento mapeia as informações que atualmente estão "hardcoded" no frontend e sugere como elas devem ser estruturadas para recebimento via Backend (API).

## 1. Jogos (Games)
**Componente:** `components/sections/Games.tsx`
**Dados Atuais:**
```json
[
    {
        "id": 1,
        "title": "Project: Limbo",
        "tag": "PROTÓTIPO",
        "desc": "Um platformer melancólico sobre perder o ônibus.",
        "playable": true
    }
]
```

**Sugestão de Payload (Backend):**
```json
{
  "games": [
    {
      "id": "uuid",
      "slug": "project-limbo",
      "title": "Project: Limbo",
      "short_description": "Um platformer melancólico sobre perder o ônibus.",
      "status": "PROTOTYPE", // Enum: PROTOTYPE, DEMO, IN_PRODUCTION, CONCEPT, RELEASED
      "is_playable": true,
      "thumbnail_url": "https://...",
      "game_url": "https://..." // URL para o jogo/iframe
    }
  ]
}
```

## 2. Loja (Shop)
**Componente:** `components/sections/Shop.tsx`
**Dados Atuais:**
```json
[
    { "id": 1, "name": "T-Shirt \"Traço Vivo\"", "price": "R$ 89,90", "type": "Camiseta" }
]
```

**Sugestão de Payload (Backend):**
```json
{
  "products": [
    {
      "id": "uuid",
      "name": "T-Shirt \"Traço Vivo\"",
      "price": 89.90, // Decimal/Float, frontend formata a moeda
      "category": "APPAREL", // Enum: APPAREL, ACCESSORY, STICKERS, HOME
      "category_label": "Camiseta", // Label amigável ou derivado do Enum
      "image_url": "https://...",
      "purchase_url": "https://..." // Link para gateway de pagamento ou página do produto
    }
  ]
}
```

## 3. Projetos (Projects/Bastidores)
**Componente:** `components/sections/Projects.tsx`
**Dados Atuais:**
```json
[
    { "date": "21 DEZ", "title": "Experimento de engine em JS", "type": "DEVLOG" }
]
```

**Sugestão de Payload (Backend):**
```json
{
  "projects": [
    {
      "id": "uuid",
      "title": "Experimento de engine em JS",
      "type": "DEVLOG", // Enum: DEVLOG, ART, MILESTONE, FASHION
      "published_at": "2023-12-21T00:00:00Z", // ISO Date
      "url": "https://..." // Link para detalhes se houver
    }
  ]
}
```
*Motivo:* Datas devem vir em formato ISO padrão para garantir ordenação e formatação flexível no frontend.

## 4. Posts (Caderno de Notas)
**Componente:** `components/sections/Posts.tsx`
**Dados Atuais:**
```json
[
    {
        "id": 1,
        "title": "Por que escolhemos não usar cores?",
        "date": "21/12/2025",
        "tags": ["#manifesto", "#design"],
        "content": "..."
    }
]
```

**Sugestão de Payload (Backend):**
```json
{
  "posts": [
    {
      "id": "uuid",
      "slug": "por-que-escolhemos-nao-usar-cores",
      "title": "Por que escolhemos não usar cores?",
      "published_at": "2025-12-21T00:00:00Z",
      "tags": ["manifesto", "design"],
      "content": "Markdown ou HTML sanitizado...",
      "excerpt": "Acreditamos que a ausência de cor..." // Resumo para listagem
    }
  ]
}

## 5. Contato (Contact)
**Componente:** `components/sections/Contact.tsx`
**Dados Atuais:**
```
Links de Instagram e GitHub hardcoded.
```

**Sugestão de Payload (Backend):**
```json
{
  "social_links": [
    {
      "platform": "INSTAGRAM",
      "url": "https://www.instagram.com/purosuco.indie/",
      "label": "INSTAGRAM"
    },
    {
      "platform": "GITHUB",
      "url": "https://github.com/Purosuco-indie",
      "label": "GITHUB"
    }
  ],
  "contact_info": {
     "email_recipient": "contato@purosuco.indie", // Para onde o formulário deve enviar
     "form_endpoint": "https://api.purosuco.indie/contact" // Endpoint de submissão
  }
}
```

## 6. Sobre (About)
**Componente:** `components/sections/About.tsx`
**Dados Atuais:**
```
Textos estáticos sobre a empresa.
```

**Sugestão de Payload (Backend):**
```json
{
  "about_page": {
    "mission_text": "Puro Suco Indie é um estúdio brasileiro...",
    "team_photo_url": "https://...",
    "values": [
      { "title": "Gameplay com alma", "description": "Toda escolha de design..." },
      { "title": "Moda com história", "description": "Cada roupa carrega..." }
    ]
  }
}
```

---

## Sugestões e Justificativas de Injeção

### Por que injetar esses dados pelo Backend?

1.  **Desacoplamento de Conteúdo e Código:**
    *   **Atualização em Tempo Real:** Permitir que administradores (ou você mesmo via CMS) adicionem novos jogos, produtos ou posts sem precisar fazer um novo deploy da aplicação inteira.
    *   **Gestão de Estoque/Status:** Para a loja e jogos, status como "Esgotado" ou "Em Manutenção" mudam frequentemente e devem ser refletidos instantaneamente.

2.  **Formatação de Dados:**
    *   **Preços:** O backend deve enviar valores numéricos (float/inteiro em centavos) para evitar problemas de cálculo. O frontend decide como formatar (R$, USD, etc.).
    *   **Datas:** Enviar sempre em ISO 8601 (`YYYY-MM-DDTHH:mm:ssZ`). Isso permite que o frontend formate a data corretamente baseada no local do usuário ("21 DEZ" vs "DEC 21") e ordene cronologicamente com facilidade.

3.  **Imagens e Multimídia:**
    *   Links de imagens (`image_url`) devem vir do backend (CDN/Bucket S3). Isso evita que o bundle do site fique pesado com assets estáticos e permite otimização dinâmica de imagens.
    *   Atualmente o código usa placeholders. Integrar com backend resolve a gestão desses assets.

4.  **Escalabilidade e Internacionalização:**
    *   Se no futuro o site tiver versão em inglês, o backend pode servir o conteúdo (`title`, `desc`) baseado no header `Accept-Language`, sem duplicar componentes no frontend.
