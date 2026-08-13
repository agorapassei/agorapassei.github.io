-- Restringe criação de conta (e, por consequência, login) no Estudo Certo a uma
-- lista de e-mails autorizados. Rode este script uma vez no SQL Editor do painel
-- do Supabase (projeto do app -> SQL Editor -> New query -> colar -> Run).
--
-- Como funciona:
--   1. Tabela public.allowed_emails guarda os e-mails autorizados.
--   2. Um trigger em auth.users barra a criação de QUALQUER conta cujo e-mail não
--      esteja nessa tabela, ANTES mesmo do Supabase Auth terminar o cadastro.
--   3. Como só existe conta pra e-mail autorizado, login (signInWithPassword)
--      fica automaticamente restrito também: sem conta, não tem como entrar.
--
-- Para autorizar um novo e-mail no futuro, basta:
--   insert into public.allowed_emails (email, note) values ('outro@email.com', 'quem é');
--
-- Para revogar um e-mail que já tem conta, apagar o e-mail daqui NÃO apaga a conta
-- existente (o trigger só olha pra criação de conta nova) - pra bloquear alguém que
-- já tem conta, seria preciso também deletar o usuário em Authentication -> Users.

create table if not exists public.allowed_emails (
  email text primary key,
  created_at timestamptz not null default now(),
  note text
);

insert into public.allowed_emails (email, note)
values ('bruno.salda@gmail.com', 'dono do app')
on conflict (email) do nothing;

create or replace function public.check_allowed_email()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from public.allowed_emails
    where lower(email) = lower(new.email)
  ) then
    raise exception 'E-mail não autorizado a criar conta neste app.';
  end if;
  return new;
end;
$$;

drop trigger if exists trg_check_allowed_email on auth.users;
create trigger trg_check_allowed_email
  before insert on auth.users
  for each row
  execute function public.check_allowed_email();
