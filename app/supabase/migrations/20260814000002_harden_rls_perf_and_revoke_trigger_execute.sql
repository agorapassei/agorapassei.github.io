-- Aplicada em produção em 14/08/2026 via MCP (mcp__Supabase__apply_migration).
-- Este arquivo espelha exatamente o que foi rodado, para manter o histórico
-- de migrations do repositório sincronizado com o que existe no projeto.

-- Performance: evita reavaliação de auth.uid() por linha, envolvendo em um
-- scalar subselect (recomendação do linter de performance do Supabase).
alter policy "cada usuario le so o proprio progresso" on public.progress
  using ((select auth.uid()) = user_id);

alter policy "cada usuario cria so o proprio progresso" on public.progress
  with check ((select auth.uid()) = user_id);

alter policy "cada usuario atualiza so o proprio progresso" on public.progress
  using ((select auth.uid()) = user_id);

alter policy "cada usuario le so o proprio historico" on public.progress_history
  using ((select auth.uid()) = user_id);

-- Seguranca: check_allowed_email() e snapshot_progress() sao funcoes
-- SECURITY DEFINER usadas apenas por trigger. Nao devem ser chamaveis
-- diretamente pela API publica (anon/authenticated).
revoke execute on function public.check_allowed_email() from anon, authenticated;
revoke execute on function public.snapshot_progress() from anon, authenticated;
