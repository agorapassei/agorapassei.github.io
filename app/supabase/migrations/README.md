# supabase/migrations

Migrations do backend do Estudo Certo (projeto Supabase `uwriyzilfyluvdapzorm`).

- `20260814000001_baseline_schema.sql` — baseline retroativo: documenta o
  schema (tabelas, RLS, triggers) que já existia em produção antes de haver
  controle de migrations. **Não rodar cegamente** — é documentação, revise
  antes de reaplicar em um projeto novo.
- `20260814000002_harden_rls_perf_and_revoke_trigger_execute.sql` — fix de
  performance nas políticas de RLS (`(select auth.uid())`) e revogação de
  EXECUTE direto nas funções de trigger, aplicado em 14/08/2026.

Migrations futuras devem ser adicionadas aqui com prefixo de data
(`YYYYMMDDHHMMSS_descricao.sql`) e, sempre que possível, aplicadas via MCP
(`apply_migration`) para já nascerem versionadas nos dois lugares.
