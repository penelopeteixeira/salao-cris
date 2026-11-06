# Prompt de commit para repositórios GitHub

Use este prompt sempre que eu pedir para registrar e enviar alterações de um repositório Git já conectado a um repositório remoto no GitHub.

## Versão curta

Analise as alterações do repositório atual e execute o fluxo completo de commit e push.

Quero que você:
- verifique `git status` e `git diff`;
- proponha uma mensagem no padrão Conventional Commits;
- faça stage apenas dos arquivos relacionados;
- crie o commit;
- faça push para a branch atual no remoto.

Regras:
- use Conventional Commits;
- escreva a mensagem com linguagem técnica clara e objetiva;
- não use `git add .` sem necessidade;
- se faltar autenticação, `user.name` ou `user.email`, me avise antes;
- se houver arquivos indevidos, mudanças não relacionadas ou risco de subir algo errado, pare e sinalize.

## Versão completa

Analise as alterações do repositório atual e faça o fluxo completo de commit com boas práticas de Git.

Passos:
1. Verifique o estado do repositório com `git status`.
2. Inspecione as mudanças com `git diff` e, se existir algo staged, também com `git diff --staged`.
3. Resuma o que mudou em linguagem técnica clara.
4. Proponha uma mensagem de commit no padrão Conventional Commits, escolhendo o tipo mais adequado, como `feat`, `fix`, `docs`, `style`, `refactor`, `test` ou `chore`.
5. Faça stage apenas dos arquivos relacionados à alteração.
6. Crie o commit.
7. Faça push para a branch atual do repositório remoto.
8. Confirme no final qual commit foi criado e para qual branch ele foi enviado.

Regras:
- siga o padrão `tipo(escopo): descrição`;
- priorize mensagens curtas, específicas e profissionais;
- não inclua arquivos não relacionados;
- não use comandos destrutivos;
- se houver problema de autenticação, identidade Git ou conflito, me avise antes de continuar;
- se a alteração estiver melhor em uma branch separada em vez de `main`, sinalize isso.

## Exemplos de Conventional Commits

- `feat(hero): adiciona botão de agendamento`
- `fix(testimonials): corrige o nome exibido no depoimento`
- `style(header): ajusta espaçamento do menu`
- `docs(readme): atualiza instruções de deploy`
- `refactor(form): simplifica validação do formulário`

## Linguagem correta no contexto

Algumas formas comuns e adequadas de pedir isso:

- "Faça commit e push para o repositório remoto"
- "Envie as alterações para o GitHub"
- "Crie um commit em Conventional Commits e faça push para a branch atual"
- "Analise as mudanças do repositório local e publique no remoto"

## Explicação rápida

- `repositório local`: a cópia do projeto na sua máquina
- `repositório remoto`: a versão hospedada no GitHub
- `commit`: o registro versionado de uma mudança
- `push`: o envio dos commits locais para o remoto
- `branch`: uma linha de trabalho, como `main` ou uma branch de feature
