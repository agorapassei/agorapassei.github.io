-- BASELINE RETROATIVO — documenta o schema já existente em produção em
-- 14/08/2026. Este arquivo NÃO deve ser reaplicado cegamente: as tabelas,
-- triggers e políticas abaixo já existem no projeto Supabase (id
-- uwriyzilfyluvdapzorm) desde antes de existir controle de migrations.
-- Ele serve como documentação/reprodutibilidade, não como script de setup.
--
-- Se for recriar o projeto do zero, revise cada bloco antes de rodar
-- (em especial os `create table` — hoje não há coluna-a-coluna documentada
-- aqui, só o que foi possível confirmar via list_tables/advisors).

-- Tabelas (estrutura completa de colunas não foi extraída neste baseline;
-- ver dashboard do Supabase para o detalhamento coluna a coluna caso precise
-- recriar do zero):
--   public.progress          (1 linha em 14/08/2026) — estado atual de progresso por usuário
--   public.progress_history  (60 linhas em 14/08/2026) — snapshots de progresso
--   public.allowed_emails    (1 linha em 14/08/2026) — lista de e-mails autorizados a criar conta

alter table public.progress enable row level security;
alter table public.progress_history enable row level security;
alter table public.allowed_emails enable row level security;

create policy "cada usuario le so o proprio progresso" on public.progress
  for select
  using (auth.uid() = user_id);

create policy "cada usuario cria so o proprio progresso" on public.progress
  for insert
  with check (auth.uid() = user_id);

create policy "cada usuario atualiza so o proprio progresso" on public.progress
  for update
  using (auth.uid() = user_id);

create policy "cada usuario le so o proprio historico" on public.progress_history
  for select
  using (auth.uid() = user_id);

-- allowed_emails: RLS habilitado, propositalmente sem policy nenhuma
-- (ninguém lê/escreve via API pública; só acessada por trigger SECURITY DEFINER).

-- Trigger: bloqueia criação de conta com e-mail fora de allowed_emails
create or replace function public.check_allowed_email()
returns trigger
language plpgsql
security definer
set search_path to 'public'
as $$
begin
  if not exists (select 1 from public.allowed_emails where lower(email) = lower(new.email)) then
    raise exception 'E-mail nao autorizado a criar conta neste app.';
  end if;
  return new;
end;
$$;

-- Trigger: grava um snapshot em progress_history a cada mudança em progress
create or replace function public.snapshot_progress()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.progress_history (user_id, data, captured_at)
  values (new.user_id, new.data, now());
  return new;
end;
$$;

-- (Os triggers que chamam essas funções, e a FK/estrutura exata das tabelas,
-- não foram extraídos neste baseline — confirmar no dashboard antes de
-- recriar o ambiente do zero.)
