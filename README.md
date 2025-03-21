# meu-portifolio
 
## Portfolio Backend API

Este é o backend para um site de portfólio pessoal, construído com Node.js, Express e PostgreSQL.

### Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- Cloudinary (armazenamento de imagens)
- Zod (validação de dados)
- Dotenv (variáveis de ambiente)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/luizgusmao07/backend-portifolio.git

# Entre no diretório
cd meu-portifolio

# Instale as dependências
npm install
```

### Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    ```
    PORT = 3000
    DB_HOST = 'seu-host'
    DB_USER = 'seu-usuario'
    DB_PASSWORD = 'sua-senha'
    DB_NAME = 'nome-do-banco'
    DB_PORT = 5432
    
    CLOUDINARY_NAME = 'seu-cloud-name'
    CLOUDINARY_API_KEY = 'sua-api-key'
    CLOUDINARY_API_SECRET = 'seu-api-secret'
    ```

2. Configure seu banco de dados PostgreSQL

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

### Estrutura do Projeto

O projeto segue uma arquitetura baseada em API RESTful para gerenciar os dados do portfólio.

### Contribuição

1. Faça um fork do projeto
2. Crie sua feature branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
6. 

## Portfolio Backend API

This is the backend for a personal portfolio website, built with Node.js, Express, and PostgreSQL.

### Technologies Used

- Node.js  
- Express.js  
- PostgreSQL  
- Cloudinary (image storage)  
- Zod (data validation)  
- Dotenv (environment variables)  

### Installation

```bash
# Clone the repository
git clone https://github.com/luizgusmao07/backend-portifolio.git

# Navigate to the directory
cd my-portfolio

# Install dependencies
npm install
```

### Environment Configuration

1. Create a `.env` file in the root directory with the following variables:
    ```
    PORT = 3000
    DB_HOST = 'your-host'
    DB_USER = 'your-username'
    DB_PASSWORD = 'your-password'
    DB_NAME = 'your-database-name'
    DB_PORT = 5432
    
    CLOUDINARY_NAME = 'your-cloud-name'
    CLOUDINARY_API_KEY = 'your-api-key'
    CLOUDINARY_API_SECRET = 'your-api-secret'
    ```

2. Set up your PostgreSQL database.

### Development

```bash
# Start the development server
npm run dev
```

### Project Structure

The project follows a RESTful API architecture to manage portfolio data.

### Contribution

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/new-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/new-feature`)  
5. Open a Pull Request  
