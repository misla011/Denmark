Denmark - Projeto de Demonstração de Versionamento

Este repositório foi criado como parte de uma atividade para demonstrar os conceitos e a importância do versionamento de código, seguindo o roteiro da apresentação "Introdução ao Versionamento".
Roteiro da Apresentação – “Introdução ao Versionamento”

1. Abertura

Olá a todos! Somos David Lima, Kauã Filipy e Misla Ribeiro.

Pergunta Provocativa:

Vocês já passaram pela frustração de perder um arquivo importante por terem salvado por cima sem querer?

Introdução do Tema:

Hoje, vamos apresentar uma solução poderosa para evitar esse tipo de problema e muito mais: o versionamento. Ele atua como um histórico completo do seu projeto, garantindo que nenhuma mudança se perca, facilitando a colaboração e organizando o fluxo de desenvolvimento.

2. Conceito de Versionamento

O que é Versionamento?

Versionamento é como ter um histórico completo do seu projeto. Cada alteração que você faz é registrada, como um "snapshot" no tempo. Isso permite que você revise o que mudou, compare diferentes estados do seu projeto e, se necessário, volte para uma versão anterior.

O que o Versionamento Permite:

    Salvar diferentes versões (commits): Cada vez que você faz uma mudança significativa, você salva essa versão com uma descrição do que foi alterado.
    Voltar no tempo: Se algo der errado ou você precisar desfazer uma modificação, pode facilmente retornar a uma versão anterior e segura.
    Trabalhar em equipe sem conflitos: Várias pessoas podem trabalhar no mesmo projeto simultaneamente sem sobrescrever o trabalho umas das outras.

Exemplos Práticos:

Imagine editar um documento de texto com várias pessoas. Sem versionamento, salvar as alterações de um pode apagar o trabalho do outro. Com versionamento, cada um trabalha em sua cópia, e depois as mudanças podem ser combinadas de forma inteligente. O mesmo acontece com o código de um projeto!

3. Importância em Projetos Colaborativos

Em projetos onde várias pessoas contribuem, o versionamento se torna essencial:

    Evita sobrescrever o trabalho: Cada desenvolvedor trabalha em sua própria cópia, e o sistema de versionamento garante que as alterações sejam integradas de forma segura.
    Trabalho em paralelo com branches: É possível criar "ramificações" (branches) do projeto principal para desenvolver novas funcionalidades isoladamente. Isso permite que diferentes partes do projeto evoluam simultaneamente sem interferir umas nas outras.
    Visibilidade e rastreabilidade: O versionamento registra quem fez qual alteração, quando e por quê. Isso facilita o entendimento do histórico do projeto e a identificação de responsáveis por mudanças específicas.
    Facilita revisões e correções: As mudanças podem ser revisadas antes de serem integradas ao projeto principal, garantindo a qualidade do código. Se um erro for introduzido, é fácil identificar o commit responsável e reverter a alteração.

Exemplo Prático: "3 pessoas editando o mesmo arquivo"

Sem versionamento, se três pessoas editarem o mesmo arquivo e salvarem, apenas a última versão será mantida, perdendo o trabalho dos outros. Com o versionamento (usando o processo de "merge"), o sistema tenta combinar as alterações de forma inteligente. Se houver conflitos (mudanças na mesma linha), o sistema avisa, e os desenvolvedores podem resolver manualmente, garantindo que nenhum trabalho seja perdido.

4. Controle de Mudanças

Vamos entender alguns conceitos chave do controle de mudanças:

    Commit: Um "commit" é como um salvamento no histórico do seu projeto. Cada commit representa um conjunto de alterações feitas em um determinado momento, acompanhado de uma descrição que explica o que foi mudado. Pense nisso como um ponto na linha do tempo do seu projeto.
    Branch: Uma "branch" é uma linha de desenvolvimento separada do projeto principal. É como criar uma cópia do projeto onde você pode trabalhar em novas funcionalidades ou correções sem afetar a versão principal. Depois que as mudanças na branch estiverem prontas, elas podem ser unidas (merged) de volta à branch principal.
    Merge: "Merge" é o processo de juntar o conteúdo de uma branch de volta a outra (geralmente a branch principal). O sistema de versionamento tenta fazer isso automaticamente, mas em alguns casos, pode ser necessário resolver conflitos se houverem mudanças na mesma parte do código em ambas as branches.

Tudo isso forma um histórico organizado e rastreável de todas as modificações do seu projeto. E o mais importante: em caso de erro, você sempre pode reverter para um commit anterior, desfazendo as alterações problemáticas.

5. Ferramentas de Versionamento

A ferramenta de versionamento mais popular e amplamente utilizada é o Git. E para hospedar e colaborar em projetos Git online, a plataforma mais conhecida é o GitHub.

(Mostrar um print do GitHub com histórico de commits do repositório "Denmark")

Como vocês podem ver neste print do GitHub, cada alteração (commit) fica registrada com uma mensagem, o autor e a data. Isso nos dá uma visão clara de como o projeto evoluiu ao longo do tempo.

6. Demonstração Prática

Neste repositório (https://github.com/kaua-filiy/Denmark), vocês podem observar alguns commits visíveis. Vamos analisar o que foi alterado em cada um deles (explicar brevemente as mudanças introduzidas em cada commit presente no repositório).

Os comandos básicos do Git que usamos para criar esses commits incluem:

    git add .: Adiciona as alterações do seu diretório de trabalho para a área de staging (preparação para o commit).
    git commit -m "Descrição da alteração": Salva as alterações na história do repositório com uma mensagem descritiva.
    git push origin main: Envia os commits locais para o repositório remoto no GitHub (na branch principal, geralmente chamada de "main").

Extras – Por que Versionamento Vai Muito Além? (opcional)

O versionamento, impulsionado por ferramentas como Git e plataformas como o GitHub, tem um impacto muito maior do que apenas evitar a perda de arquivos:

    Base para DevOps e CI/CD: É fundamental para automatizar testes e a implantação de software (Continuous Integration/Continuous Deployment) com ferramentas como o GitHub Actions.
    Desenvolvimento remoto/global: Permite que equipes distribuídas geograficamente colaborem de forma eficiente no mesmo projeto.
    Rastreabilidade e documentação natural: O histórico de commits serve como uma forma de documentação das mudanças e do raciocínio por trás delas, sendo útil até para auditorias técnicas e legais.
    Inovação com segurança: A possibilidade de criar branches isoladas permite experimentar novas ideias e funcionalidades sem arriscar a estabilidade da versão principal do projeto.
    Open source: Git e GitHub são a espinha dorsal de inúmeros projetos de código aberto de grande escala, como o kernel Linux e o editor de código VS Code, facilitando a colaboração de milhares de desenvolvedores ao redor do mundo.

8. Atividade Interativa

Vamos agora testar o que aprendemos com um breve quiz! (Utilizar Kahoot, Google Forms ou similar com as seguintes perguntas):

    O que é versionamento?
    Qual a principal função do comando git commit?
    Qual dessas ferramentas permite versionamento? a) WhatsApp b) GitHub ✅ c) Paint d) Zoom
    Cite uma vantagem de usar versionamento em equipe.
    O que é uma branch e para que ela serve?

9. Encerramento

Hoje, exploramos os fundamentos do versionamento:

    Vimos que o versionamento é um sistema que registra as mudanças ao longo do tempo, permitindo que você volte a versões anteriores e entenda a evolução do seu projeto.
    Entendemos como ele funciona, através de conceitos como commits, branches e merges.
    Discutimos por que ele é crucial, especialmente em projetos colaborativos, para evitar perdas, facilitar o trabalho em equipe e organizar o desenvolvimento.
    Destacamos os benefícios práticos, como segurança, colaboração eficiente e rastreabilidade.

Lembrem-se:

    “Com versionamento, a gente não perde trabalho — a gente ganha segurança e colaboração.”
    “Saber versionar é o primeiro passo para atuar de forma profissional em projetos reais.”

Obrigado pela atenção! Alguma pergunta?
