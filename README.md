# Mapa do Burnout — Facunicamps

## Configuração obrigatória antes de publicar

1. No Firebase Console, habilite **Authentication → Google** e **Authentication → Anônimo**. Cadastre `contato@aequipe.com.br` como a conta administrativa e autorize o domínio GitHub Pages em **Authentication → Settings → Authorized domains**.
2. Em **Configurações do projeto → Seus apps → Web**, copie `apiKey` e `appId` para `firebase-config.js`. Esses valores de configuração Web são públicos; nunca coloque senhas, chaves de conta de serviço ou credenciais privadas nesse arquivo.
3. Faça backup dos dados atuais do Realtime Database antes de publicar as regras. Em **Realtime Database → Rules**, publique o conteúdo de `database.rules.json`. As regras restringem respostas e grupos à conta Google administrativa; participantes podem enviar novas respostas e grupos, sem ler dados existentes. Turmas e relatórios agregados têm leitura pública.
4. Teste cadastro, preenchimento do questionário, login Google e acesso negado a dados privados em uma janela anônima. Não colete dados reais enquanto as regras não estiverem publicadas e verificadas.

O Firebase ainda pode conter dados submetidos sob as regras antigas. Publicar regras novas não apaga cópias já acessíveis nem substitui uma revisão das regras anteriores e dos dados existentes.

## Operação

- O cadastro de turma permite preparar as turmas de Psicologia do Trabalho do segundo semestre de 2026 nos turnos matutino e noturno.
- O cadastro do grupo gera um link do questionário com turma e código já preenchidos. O WhatsApp abre com a mensagem pronta; o usuário precisa confirmar o envio.
- O painel só libera o resumo agregado quando houver pelo menos 10 respostas. O PDF é gerado pelo navegador usando **Imprimir → Salvar como PDF**. O WhatsApp não permite anexar o PDF automaticamente por um link comum; anexe o arquivo manualmente após baixá-lo.
- O resumo inclui objetivo, público-alvo, metodologia, síntese descritiva dos resultados e considerações finais, além das médias por fase. O texto explicita as limitações da amostra voluntária e não apresenta o questionário como diagnóstico ou instrumento validado.
- O link do relatório funciona como link de acesso: qualquer pessoa que o receber pode ver as estatísticas agregadas. O conteúdo não tem dados pessoais e só é liberado a partir de 10 respostas.
- O questionário é uma ferramenta psicoeducacional; seus resultados não constituem diagnóstico clínico.