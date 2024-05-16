# Informações sobre o módulo de NPM

## Comandos NPM

- NPM I -> Instala as dependências olhando para o pakcage.json ( não olha diretamente para a versão )
- NPM CI -> Instala as dependências olhanda para o pakcage-lock.json ( olhando diretamente para as versões de cada pacote )
- NPM T -> Executa os testes
- NPM LOGIN -> para se logar na conta do NPM
- NPM PUBLISH --ACCESS=PUBLIC -> para publicar o pacote publico
- NPM OUTDATE -> Mostra informações do projeto e das versões
- NPM UPDATE -> Atualiza os pacotes
- NPM VERSION PATCH -> Para alterar a versão quando resolve algum bug
- NPM VERSION MINOR -> Para alterar a versão quando existe novas features
- NPM VERSION MAJOR -> Para alterar a versão quando grandes atualizações forem feitas

OBS: o comando "npm update" não altualiza versões major em nossos projetos, por segurança, caso precise, rode o "npm install"

[https://snyk.io/pt-BR/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/](Melhorando a segurança das aplicações olhando para o package-lock.json)
[https://github.com/lirantal/lockfile-lint](para segurança de lockfiles) -> package-lock.json ou yarn-lock.json
