# 📚 Projeto: Gestão de Matrículas (NestJS)

## 🚀 Comandos de Inicialização
| Ação | Comando |
| :--- | :--- |
| **Instalação do CLI** | `npm install -g @nestjs/cli` |
| **Criar Novo Projeto** | `nest new gestao-de-matricula` |
| **Gerar Módulo (CRUD)** | `nest generate resource matriculas` |
| **Executar (Produção)** | `npm run start` |
| **Executar (Watch Mode)** | `npm run start:dev` |

---

## 🛠️ Requisitos e Regras de Negócio

### 1. Estrutura do Recurso (`Aluno`)
* `codigo_matricula` (String) - **Obrigatório**
* `nome_completo` (String) - **Obrigatório**
* `situacao` (String) - **Opcional no JSON**
* `acompanhamento` (String)

### 2. Lógica da Entidade (Construtor)
* **Comportamento Padrão:** Ao instanciar, `situacao` deve ser definida automaticamente como **"Cursando"**.
* **Sobrescrita:** Se o JSON de entrada contiver **"Evadido Desistente"**, o sistema deve aceitar e sobrescrever o valor padrão.

### 3. Validação e Endpoint
* **Validação:** Garantir que nome e matrícula não sejam enviados vazios.
* **Endpoint:** `POST /alunos` para criação e retorno do objeto instanciado.

---

## 🏁 Entrega
* Link público no **GitHub**.
* Print de testes via **Insomnia**.
* (Opcional) Deploy no **Render.com**.