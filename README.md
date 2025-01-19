<p align="center">
  <a href="https://wutai-news.onrender.com/" target="_blank">
    <img src="./readme_assets/wutai-news-logo.png" width="200" alt="Wutai News Logo" />
  </a>
</p>

<p align="center">O projeto <a href="https://wutai-news.onrender.com/" target="_blank">Wutai News</a> é um aplicativo web de notícias desenvolvido com React no frontend e Node.js com MongoDB no backend, oferecendo aos usuários uma plataforma intuitiva para explorar, buscar e interagir com conteúdos relevantes.</p>

## Descrição

O backend do **Wutai News** foi construído com Node.js e Express.js, é responsável por gerenciar dados de usuários, notícias e autenticação através de uma API RESTful, utilizando MongoDB para a persistência dos dados.



## 💻 Principais Tecnologias

*   **Node.js:** Ambiente de execução JavaScript para o servidor.
*   **Express.js:** Framework web para Node.js que facilita a criação de APIs RESTful.
*   **MongoDB:** Banco de dados NoSQL utilizado para a persistência dos dados.
*   **Mongoose:** ODM (Object Data Modeling) para facilitar a interação com o MongoDB.
*   **JSON Web Tokens (JWT):** Utilizados para autenticação e autorização de usuários.
*   **Bcrypt:** Biblioteca para hashing seguro de senhas.
*   **Dotenv:** Biblioteca para o gerenciamento de variáveis de ambiente.
*   **Cors:** Biblioteca para permitir o acesso a recursos de diferentes domínios.

**Funcionalidades:**

*   **Gerenciamento de Usuários:**

    *   Cadastro de novos usuários.
    *   Login de usuários existentes com geração de token JWT.
    *   Busca de usuários por ID (protegida por autenticação).
    *   Atualização de dados de usuários (protegida por autenticação).
*   **Gerenciamento de Notícias:**

    *   Criação de novas notícias (protegida por autenticação).
    *   Listagem de todas as notícias com paginação.
    *   Listagem das notícias em destaque.
    *   Busca de notícias por título.
    *   Busca de notícias por usuário (protegida por autenticação).
    *   Busca de notícias por ID (protegida por autenticação).
    *   Atualização de notícias (protegida por autenticação).
    *   Exclusão de notícias (protegida por autenticação).
    *   Adição de likes em notícias (protegida por autenticação).
    *   Adição de comentários em notícias (protegida por autenticação).
    *   Exclusão de comentários em notícias (protegida por autenticação).

*   **Autenticação:**

    *   Validação de tokens JWT para proteger rotas.
    *   Geração de tokens JWT após o login.

## 🚀 Começando

<div align=center>

<span style="font-size: 1.8em">Pré-requisitos</span>

  <img src="./readme_assets/git-logo.png" width="200" alt="Git Logo" />
  <img src="./readme_assets/nodejs-logo.svg" width="200" alt="Node JS Logo" />
</div>

## Instalação

Para executar localmente, siga os seguintes passos:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/0nF1REy/wutai-news.git
    ```
2.  **Entre no diretório:**

    ```bash
    cd wutai-news
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Crie um arquivo `.env` na raiz do projeto:**

    *   Adicione as variáveis de ambiente necessárias (sua string de conexão com o MongoDB e sua secret key para o jwt):

        ```yaml
        MONGODB_URI=mongodb+srv://<seu usuario>:<sua senha>@<seu cluster>/<nome do seu banco de dados>?retryWrites=true&w=majority

        SECRET_JWT=<seu secret jwt>

        PORT=3000
        ```

## Rodando

Para iniciar, use o comando:

```bash
npm run dev
```
Resposta:
```bash
Server running on port: 3000
```

## 📍 Rotas da API

As seguintes rotas estão disponíveis na API:

### Autenticação

| Rota                   | Método | Descrição                                                                              |
| ---------------------- | ------ | -------------------------------------------------------------------------------------- |
| `/auth`                | `POST` | Autentica um usuário e retorna um token JWT.                                     |

### Usuários

| Rota                   | Método | Descrição                                                                                       |
| ---------------------- | ------ | ----------------------------------------------------------------------------------------------- |
| `/user/create`         | `POST` | Cria um novo usuário.                                                                       |
| `/user/`              | `GET`  | Lista todos os usuários (pode ser usado para propósitos de teste, se for usado apenas com auth).    |
| `/user/findById`        | `GET`  | Busca os dados do usuário logado (protegida por autenticação). |
| `/user/:id`            | `PATCH`| Atualiza um usuário (protegida por autenticação).                                              |

### Notícias

| Rota                          | Método | Descrição                                                                                               |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| `/news`                       | `POST` | Cria uma nova notícia (protegida por autenticação).                                                      |
| `/news`                       | `GET`  | Lista todas as notícias.                                                                                   |
| `/news/top`                   | `GET`  | Lista as notícias em destaque.                                                                           |
| `/news/search`                | `GET`  | Busca notícias por título.                                                                               |
| `/news/byUser`                | `GET`  | Busca notícias do usuário logado (protegida por autenticação).                                             |
| `/news/:id`                   | `GET`  | Busca uma notícia por ID (protegida por autenticação).                                              |
| `/news/:id`                   | `PATCH`| Atualiza uma notícia (protegida por autenticação).                                                         |
| `/news/:id`                   | `DELETE`| Exclui uma notícia (protegida por autenticação).                                                         |
| `/news/like/:id`              | `PATCH`| Adiciona/remove um like de uma notícia (protegida por autenticação).                                      |
| `/news/comment/:id`           | `PATCH`| Adiciona um comentário em uma notícia (protegida por autenticação).                                     |
| `/news/comment/:idNews/:idComment` | `PATCH`| Remove um comentário de uma notícia (protegida por autenticação). |

## 🤝 Autor

    [Alan Ryan] - Desenvolvedor do projeto.

## 📫 Contribuir

* **Se você quiser contribuir com o projeto, sinta-se à vontade para:**

    *    Fazer um fork do repositório.

    *    Criar uma branch com a sua funcionalidade: git checkout -b feature/minha-funcionalidade.
    
    *    Fazer as mudanças necessárias.

    *    Fazer um commit com suas alterações: git commit -m "Adicionado minha funcionalidade".

    *    Fazer um push para a sua branch: git push origin feature/minha-funcionalidade.

    *    Abrir um pull request para a branch main do projeto original.
