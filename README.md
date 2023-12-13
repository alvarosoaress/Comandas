<h1 align="center">Comandas</h1>

 <blockquote>
     <p align="center">Aplicação mobile para gerencia de estabelecimentos alimentícios desenvolvido como parte do Projeto do Eixo 03 PUC Minas ADS 2023.2</p>
 </blockquote>

<div align="center">
    <image src="https://github.com/alvarosoaress/Comandas/assets/13721147/04d8504e-bfed-48a3-ab57-2a412966ef4a" width=500/>
</div>

> Esse é um projeto acadêmico realizado em grupo para o Projeto do Eixo 03 PUC Minas ADS 2023.2. Não possuo total crédito sobre o projeto. [Repositório Original](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t2-g3-comandas)

## 🧠 Descrição do Projeto

Aplicativo que visa simplificar e aprimorar experiência em estabelecimentos alimentícios, oferecendo como principal função a possibilidade de cardápio virtual e gerenciamento de espaço via dispositivo móvel, com aplicativos únicos, tanto para clientes, quanto para estabelecimentos, com integração dos dois via API externa.

Resolvendo problemas como demora no atendimento, erros em cardápios físicos, equívocos em pedidos e dificuldade organização interna, o aplicativo oferece sugestões geográficas de estabelecimento baseado na localização do usuário, cardápios através escaneamento de QR-codes, gerenciamento de espaço dos estabelecimentos baseado em pedidos ativos e muito mais.

## 💻 Tecnologias

![JavaScript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript)
![ReactNative](https://img.shields.io/badge/ReactNative-20232A?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-20232A?style=for-the-badge&logo=expo)
![Android](https://img.shields.io/badge/Android-20232A?style=for-the-badge&logo=android)
![iOS](https://img.shields.io/badge/iOS-20232A?style=for-the-badge&logo=ios)

## ✨ Funcionalidades

- `Visualização de cardápio via QrCode`: O cliente consegue visualizar todo cardápio do estabelecimento atual ao ler um QrCode via aplicativo, economizando tempo do garçom, e ainda já atribuindo o número da sua mesa atual ao pedido.

- `Pesquisa de estabelecimentos`: O cliente pode pesquisar por estabelecimentos cadastrados em nosso aplicativo, pesquisa ainda oferece filtros de locais e categorias de estabelecimentos, levando em conta quais existem em nossa base de dados.

- `Realizar pedidos facilmente`: O cliente pode pesquisar por estabelecimentos, analisar todos detalhes do item, escolher o que deseja e realizar o pedido baseado no número de mesa contido no QrCode lido, caso não tenha lido algum, será solicitado o número de mesa atual.

- `Gestão de Cardápio`: O estabelecimento conta com uma tela que o permite adicionar, editar e excluir items do seu cardápio virtual a vontade.

- `Gestão de QrCodes`: Todos QrCodes são automaticamente atrelados a um número de mesa, e também sua quantidade é gerada a partir do total de mesas do estabelecimento.

- `Gestão de Mesas`: Estabelecimento tem controle geral sobre informações das mesas que possui, mostrando se estão ocupadas e qual o pedido atual está ocupando elas.

- `Gestão de Pedidos`: Lista todos os pedidos que o estabelecimento já recebeu, detalhando os items pedidos, informações do cliente, podendo atualizar e acompanhar o status do pedido.

## 🚀 Executando

- Esse é um projeto realizado usando `Expo`, você irá precisar do aplicativo `Expo Go` em seu dispositivo móvel, ou um emulador android/ios local em seu computador.

- <kbd>1</kbd> Entrar na pasta de qual app deseja executar, `src/appCustomer` ou `src/appShop`, e instalar as dependências do projeto,

> use seu gerenciador de pacotes de preferência.

```sh
yarn install
```

- <kbd>2</kbd> Logo após rode o projeto.

```sh
yarn start
```

> Saída:
>> `QrCode Image`
› Metro waiting on exp://192.168.1.198:8080
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

- <kbd>3</kbd> Pronto! Agora já é possível visualizar o projeto, se quiser ver pelo mobile, basta escanear o QrCode usando o `Expo Go`, caso tenha um emulador, apenas digite <kbd>a</kbd> no terminal.

<!--
Comandas
3
https://github.com/alvarosoaress/Comandas/blob/main/docs/12-Apresenta%C3%A7%C3%A3o%20do%20Projeto.md
JavaScript;ReactNative;Expo;Android;iOS
https://github.com/alvarosoaress/Comandas/assets/13721147/04d8504e-bfed-48a3-ab57-2a412966ef4a
Solução mobile que visa simplificar e aprimorar experiência em estabelecimentos alimentícios, oferecendo como principal função a possibilidade de cardápio virtual e gerenciamento de espaço via dispositivo móvel. Com aplicativos únicos tanto para clientes quanto para estabelecimentos, com integração dos dois via API externa.
available
-->
