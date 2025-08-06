# 🎓 CodeLab

_Plataforma de cursos interativa com gestão avançada._

[![Deploy - Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://gabrieldani-codelab.vercel.app/) [![Next.js](https://img.shields.io/badge/Framework-Next.js-000?logo=nextdotjs)](https://nextjs.org/) [![React](https://img.shields.io/badge/Library-React-61DAFB?logo=react&logoColor=000)](https://reactjs.org/)

<p align="center">
  <img src="./public/images/codelab-preview.png" alt="CodeLab Preview" width="70%"/>
</p>

---

## ✨ Visão Geral

**CodeLab** é uma plataforma moderna de cursos online, desenvolvida com foco em acessibilidade, usabilidade e uma gestão completa para administradores. O objetivo é tornar o aprendizado de tecnologia mais prático, interativo e eficiente — tanto para quem está começando quanto para quem já tem experiência na área.

Pensada especialmente para quem quer aprender programação, a plataforma oferece cursos com preços acessíveis e recursos que realmente fazem diferença na jornada de aprendizado. O CodeLab combina uma interface intuitiva com funcionalidades como acompanhamento de progresso, sistema de comentários por aula e compra integrada via PIX ou cartão.

Além disso, conta com uma **área administrativa completa**, ideal para quem deseja gerenciar cursos, usuários e métricas estratégicas de forma profissional.

> ⚠️ **Avisos Importantes**
>
> - Os cursos exibidos na plataforma são **fictícios** e utilizam vídeos públicos do YouTube.
> - Os valores e o sistema de pagamento são apenas demonstrativos, utilizando ambiente **sandbox** da ASAAS — **nenhuma cobrança real é feita**.

---

## 💡 Funcionalidades Detalhadas

### 🚀 Para Todos

- **📚 Acesso aos Cursos**  
  Mesmo sem login, qualquer visitante pode explorar os cursos disponíveis na plataforma, visualizar detalhes como descrição e estrutura, e conhecer os conteúdos oferecidos.

- **🏆 Ranking de Usuários**  
  Um ranking dinâmico que mostra os usuários mais engajados — incentivando o aprendizado através de uma competição saudável e divertida.

---

### 🔑 Para Usuários Logados

- **🔐 Sistema de Autenticação**  
  Sistema de autenticação com persistência de sessão, garantindo uma navegação protegida e sem complicações.

- **💳 Compra de Cursos**  
  Integração com pagamento via **PIX** e **Cartão de Crédito** para aquisição de cursos (ambiente sandbox).

- **📈 Progresso nas Aulas**  
  A plataforma registra automaticamente as aulas assistidas e mostra seu progresso em tempo real, ajudando você a se organizar melhor.

- **🎒 Área "Meus Cursos"**  
  Acesse facilmente os cursos adquiridos, retome de onde parou e continue aprendendo no seu ritmo.

- **💬 Comentários nos Cursos**  
  Cada aula permite a troca de ideias através de comentários, incentivando a comunidade de aprendizado.

---

### ⚙️ Para Administradores

> **Acesso controlado via flag de ambiente**  
> 🔐 _Acesso restrito via variável de ambiente — modo administrador não está disponível publicamente._

- **📊 Dashboard de Estatísticas**  
  Gráficos interativos mostrando:

  - Novos usuários nos últimos 7 dias
  - Cursos comprados por dia

- **🎓 Gestão de Cursos (CRUD)**

  - Criar, editar e excluir cursos
  - Publicar ou arquivar conteúdos

- **👥 Gerenciamento de Usuários**

  - Visualização de todos os usuários cadastrados
  - Envio de notificações para todos os alunos (ex: "Novo curso disponível!")

- **🔍 Moderação de Comentários**  
  Visualize e exclua comentários inapropriados facilmente.

Abaixo estão algumas capturas de tela da área administrativa da plataforma (acesso restrito):

<p align="center">
  
| ![Dashboard Admin](./public/images/admin-dashboard.png) | ![Gestão de Cursos](./public/images/admin-courses.png) |
|:----------------------------------------------:|:---------------------------------------------:|
| 📊 Dashboard com métricas                       | 🎓 Interface de criação/edição de cursos      |

| ![Gestão de Usuários](./public/images/admin-users.png) | ![Moderação](./public/images/admin-comments.png) |
| :----------------------------------------------------: | :----------------------------------------------: |
|                  👥 Lista de usuários                  |           💬 Moderação de comentários            |

</p>

---

## 🛠️ Stack Tecnológica

### 🎨 Frontend

- **[Next.js](https://nextjs.org/)** — Framework React fullstack, responsável por toda estrutura da aplicação, rotas e SSR.
- **[React.js](https://reactjs.org/)** — Biblioteca base para construção da interface.
- **[Shadcn/UI](https://ui.shadcn.dev/)** + **[Radix UI](https://www.radix-ui.com/)** — Sistema de design moderno, acessível e componetizado com base em Tailwind CSS.
- **[Tailwind CSS](https://tailwindcss.com/)** — Utilizado para estilização rápida e responsiva.
- **[React Hook Form](https://react-hook-form.com/)** + **Zod** — Gerenciamento de formulários com validação declarativa.
- **[TanStack React Query](https://tanstack.com/query/latest)** — Gerenciamento de cache e requisições assíncronas.
- **[Recharts](https://recharts.org/)** + **Chart.js** — Visualização de dados com gráficos interativos.
- **[Vidstack Player](https://vidstack.io/)** — Player de vídeo moderno para exibição das aulas.
- **[Tiptap Editor](https://tiptap.dev/)** — Editor de texto avançado para descrição de cursos e conteúdos.
- **[Clerk](https://clerk.com/)** — Sistema de autenticação completo com suporte a sessão, usuários e proteção de rotas.
- **Outras libs:** Zustand (estado global), Lucide (ícones), Date-fns (datas), React Dropzone (upload), etc.

---

### ⚙️ Backend (via API Routes do Next.js)

- **API integrada ao Next.js** — Backend e frontend no mesmo projeto com rotas server-side.
- **[Prisma ORM](https://www.prisma.io/)** — ORM moderno para acesso ao banco de dados (PostgreSQL).
- **Banco de Dados:** PostgreSQL
- **[ASAAS Sandbox](https://asaas.com/)** — Integração com API de pagamentos (PIX e Cartão de Crédito).
- **Cloudflare R2 (via AWS SDK)** — Upload e entrega de imagens de forma escalável.
- **[Svix](https://www.svix.com/)** — Gerenciamento de Webhooks confiável.
- **Validação e segurança:** Zod + CUID2 para geração de IDs únicos e seguros.

---

### 🚀 DevOps & Deploy

- **[Vercel](https://vercel.com/)** — Deploy contínuo, preview automático de branches e hospedagem global.
- **CI/CD automatizado:** cada push na main ou PR gera preview e build automático.
- **Postinstall com Prisma Migrate:** garante que a aplicação esteja sempre sincronizada com o banco em produção.

---

## 📦 Instalação & Configuração

A seguir, você encontrará um guia completo para executar o CodeLab localmente e também realizar o deploy em produção. Este projeto utiliza tecnologias modernas como **Next.js**, **Prisma**, **Clerk**, **Cloudflare R2**, **ASAAS** e **Vercel**, e é recomendado para quem deseja estudar ou contribuir com um projeto real de plataforma de cursos online.

---

### ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js 18+](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- Conta nas seguintes plataformas:
  - [Clerk](https://clerk.dev/) — Autenticação
  - [ASAAS](https://asaas.com/) — Pagamentos (modo sandbox)
  - [Cloudflare R2](https://developers.cloudflare.com/r2/) — Upload de arquivos
  - [Vercel](https://vercel.com/) — Hospedagem e deploy contínuo
  - [Neon](https://neon.tech/) — Banco de dados PostgreSQL (ou alternativa)

---

### 🚀 Passo a Passo (Local)

1. **Clone o repositório**

```bash
git clone https://github.com/GabrielDani/codelab.git
cd codelab
```

2. **Instale as dependências**

```bash
yarn install
```

3. **Configure o banco de dados**

Crie um banco PostgreSQL. Recomendo usar o [Neon](https://neon.tech/) pela facilidade e plano gratuito.

4. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Clerk (https://clerk.com)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=clerk_publishable_key
CLERK_SECRET_KEY=clerk_secret_key
CLERK_WEBHOOK_SECRET=clerk_webhook_secret

# PostgreSQL via Neon (ou local)
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public

# ASAAS (https://asaas.com) - modo sandbox
ASAAS_API_KEY=seu_token_sandbox
ASAAS_API_URL=https://api-sandbox.asaas.com/v3
ASAAS_WEBHOOK_TOKEN=token_webhook_asaas

# Cloudflare R2 (https://dash.cloudflare.com)
CLOUDFLARE_ACCOUNT_ID=seu_account_id
CLOUDFLARE_ACCESS_ID=seu_access_id
CLOUDFLARE_ACCESS_KEY=seu_access_key
CLOUDFLARE_R2_BUCKET_NAME=nome_do_bucket
CLOUDFLARE_FILE_BASE_PATH=https://<bucket_name>.<account_id>.r2.cloudflarestorage.com
```

5. **Rode as migrações e gere o client Prisma**

```bash
npx prisma migrate dev
npx prisma generate
```

6. **Dados de Teste**
   Se quiser popular o banco local com dados iniciais (cursos, usuários, etc), você pode executar o seed:

```bash
yarn prisma db seed
```

7. **Inicie o projeto em modo desenvolvimento**

```bash
yarn dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

### ☁️ Deploy em Produção (Vercel)

1. **Faça login no Vercel e crie um novo projeto**

   - Link com seu GitHub
   - Escolha o repositório `codelab`

2. **Configure as variáveis de ambiente no painel da Vercel**

   - Copie as mesmas do seu `.env.local`
   - Vá em _Project Settings > Environment Variables_ e adicione todas

3. **Banco de dados (PostgreSQL em produção)**

   - Recomendado: [Neon](https://neon.tech/)
   - Após criar o banco, copie a `DATABASE_URL` e adicione na Vercel

4. **Autenticação Clerk**

   - Crie um projeto em [https://clerk.com](https://clerk.com)
   - Configure os domínios permitidos (ex: vercel.app e domínio customizado)
   - Copie suas chaves `PUBLISHABLE_KEY`, `SECRET_KEY` e `WEBHOOK_SECRET`

5. **Configuração ASAAS (sandbox)**

   - Crie uma conta em [https://asaas.com](https://asaas.com)
   - Vá em _API > Sandbox_ e copie sua chave de API
   - Configure o webhook com a URL do seu projeto e um token secreto

6. **Cloudflare R2**

   - Acesse [Cloudflare > R2](https://dash.cloudflare.com/)
   - Crie um bucket e uma chave de acesso (Access ID + Access Key)
   - Copie o `Account ID` e configure as variáveis de ambiente

7. **Deploy automático**
   - A cada push na `main`, o Vercel faz deploy automaticamente
   - Commits em branches criam preview deploys

---

### ✅ Testes de Produção

- Use um e-mail real para testar o fluxo de autenticação pelo Clerk
- Simule compras com o ASAAS em modo sandbox
- Faça upload de imagens nas páginas de criação de curso
- Valide o recebimento de webhooks (Clerk e ASAAS)

---

### 🧠 Dicas

- O modo **admin** é ativado para usuários com a role `admin`.  
  Para isso, acesse o [Clerk Dashboard](https://clerk.com/), selecione o usuário desejado, vá até a aba **Metadata > Public**, edite como JSON e adicione:

  ```json
  {
    "role": "admin"
  }
  ```

- Utilize logs da Vercel ou da aba _Network_ para debugar erros de deploy.
- Você pode usar [Ngrok](https://ngrok.com/) localmente para simular webhooks durante desenvolvimento.

---

### 📚 Referências Oficiais

- [Clerk Docs](https://clerk.com/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [ASAAS API Docs](https://asaasv3.docs.apiary.io/)
- [Cloudflare R2 Docs](https://developers.cloudflare.com/r2/)
- [Vercel Docs](https://vercel.com/docs)
- [Neon Docs](https://neon.tech/docs)
