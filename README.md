# Facilita Serviços

Facilita Serviços é uma plataforma web desenvolvida com [Quasar Framework](https://quasar.dev/) para conectar clientes e profissionais autônomos (self-employed) de diversas áreas, facilitando a contratação de serviços, agendamento, gerenciamento de perfis e comunicação via chat.

## Funcionalidades

- Cadastro e login de usuários (cliente e self-employed)
- Edição de perfil com foto e dados pessoais
- Cadastro e listagem de serviços por profissionais
- Filtros por categoria, profissão e preço
- Agendamento de serviços com confirmação, rejeição e finalização
- Histórico de agendamentos para clientes e profissionais
- Sistema de avaliações (mockadas)
- Chat entre cliente e profissional
- Proteção de rotas para usuários autenticados

## Tecnologias Utilizadas

- [Quasar Framework (Vue.js)](https://quasar.dev/)
- [Node.js + Express (backend)](https://nodejs.org/)
- Axios para requisições HTTP
- MongoDB (backend)
- JWT para autenticação

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/facilita-servicos.git
   cd facilita-servicos/a3/a3
   ```

2. Instale as dependências:
   ```bash
   yarn
   # ou
   npm install
   ```

3. Inicie o app em modo desenvolvimento:
   ```bash
   quasar dev
   ```

## Scripts Úteis

- **Lint:**  
  `yarn lint` ou `npm run lint`

- **Formatar código:**  
  `yarn format` ou `npm run format`

- **Build para produção:**  
  `quasar build`

## Configuração

- Configure as variáveis de ambiente e endpoints da API conforme necessário.
- Veja [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js) para personalizações.

## Estrutura de Pastas

```
src/
  pages/           # Páginas principais (Login, Register, Profile, Jobs, History, Chat, etc)
  components/      # Componentes reutilizáveis (Header, Footer, etc)
  services/        # Serviços (auth, api)
  router/          # Rotas da aplicação
  assets/          # Imagens e arquivos estáticos
```

## Observações

- O backend deve estar rodando e acessível para autenticação, cadastro, agendamento e chat funcionarem.
- Algumas funcionalidades de avaliação estão mockadas para demonstração.

## Licença

Este projeto é apenas para fins acadêmicos.

---
