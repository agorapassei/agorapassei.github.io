# Estudo Certo

Aplicativo pessoal de acompanhamento de estudos para o concurso da Transpetro
(Ênfase 1: Administração, banca CESGRANRIO). Uso individual — não é um
produto público.

## O que é

Um app single-page em HTML/CSS/JS vanilla (sem build step, sem framework) que:

- organiza o edital em disciplinas → apostilas (aulas) → questões;
- registra sessões de estudo cronometradas, tipadas em `teoria` (leitura) ou
  `questões` (resolução);
- calcula três métricas principais — **Taxa de Domínio** (monotônica, nunca
  regride), **Taxa na 1ª Tentativa** e **Questões Pendentes**;
- agenda revisão espaçada por apostila (padrão 7/15/30 dias, customizável por
  disciplina);
- inclui um motor de Provas Anteriores com 9 cadernos oficiais CESGRANRIO
  (Petrobras e Transpetro), ~600 questões, gabarito oficial;
- sincroniza progresso via Supabase (Postgres + Auth + RLS), com acesso
  restrito a uma lista de e-mails autorizados (`allowed_emails`).

## Estrutura do repositório

```
.
├── index.html          ← landing page de venda (não é o app — ver /app)
├── app/
│   ├── index.html       ← o app em si (single-file, HTML+CSS+JS)
│   ├── curriculo.js      ← definição do currículo (disciplinas/apostilas)
│   ├── provas.js         ← motor de Provas Anteriores
│   ├── provas/            ← imagens das 9 provas oficiais, por concurso/ano
│   ├── question_bank.js  ← banco de questões
│   └── supabase/           ← migrations e config do backend
└── contexto/            ← documentação de apoio (ignorado pelo git; ver .gitignore)
```

Este mesmo repositório serve duas coisas diferentes: a raiz (`index.html`) é
uma landing page de apresentação, e `/app/` é o aplicativo real usado no
dia a dia.

## Rodando localmente

Não há build step. Basta servir os arquivos estaticamente, por exemplo:

```
python3 -m http.server 8000
```

e abrir `http://localhost:8000/app/` no navegador. É necessário configurar
as credenciais do Supabase (URL + chave pública) usadas pelo app — ver
`app/supabase/`.

## Deploy

Deploy automático via **GitHub Pages**: qualquer push para `main` publica o
conteúdo do repositório em `estudocerto.com`. Não há etapa de CI/build —
o push é o deploy.

## Backend (Supabase)

- Autenticação por e-mail, restrita à lista em `allowed_emails` (trigger
  `check_allowed_email()` bloqueia cadastro de e-mails não autorizados).
- Tabela `progress` guarda o estado atual de cada usuário; `progress_history`
  guarda snapshots (trigger `snapshot_progress()` grava um snapshot a cada
  atualização de `progress`).
- RLS habilitado em todas as tabelas — cada usuário só lê/escreve o próprio
  progresso (`auth.uid() = user_id`).
- Migrations em `app/supabase/migrations/` documentam o schema atual.

## Convenções deste repositório

- Fim de linha padronizado em LF (`.gitattributes`); não commitar CRLF.
- `contexto/` é só documentação de apoio local e está no `.gitignore` — não
  deve ir para o repositório remoto.
- **Nenhuma prova, apostila ou material de estudo deve ser apagado** — esse
  material é de uso pessoal e não deve ser removido do computador nem do
  histórico sem decisão explícita do autor.
- Nomenclatura: o app se chama **Estudo Certo**. Menções ao nome antigo
  ("Estudos PETROBRAS" como nome do app) devem ser corrigidas quando
  encontradas.
