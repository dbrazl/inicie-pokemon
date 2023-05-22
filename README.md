# Inicie Pokemon

Projeto teste para a vaga de Desenvolvedor Front-end Sênior da Inicie Educação.

[![Inicie Educação](https://inicie.digital/wp-content/uploads/2022/02/Group-1699-1.png)](https://inicie.digital/sobre-nos/)

## Iniciar o projeto

### Local sem docker

Para iniciar o projeto, você deve:

- Clonar o projeto;
- Instalar os pacotes com o seu gerenciador de pacotes favorito (Ex: yarn, rnpm ou npm);
- Executar o script de iniciação com o seu gerenciador de pacote;
- E acessar URL do servidor local.

#### Exemplo:

##### Clonando

```cmd 
git clone git@github.com:dbrazl/inicie-pokemon.git
```

##### Instalando pacotes

```cmd
yarn
```

##### Inciando o projeto

```cmd
yarn start
```

##### Acessando a URL do servidor local

![Log do servidor web](https://github.com/dbrazl/inicie-pokemon/assets/52254578/800abcbc-f390-416f-b8cd-2560f54b463f)

### Local com docker

Para iniciar o projeto, você deve:

- Clonar o projeto;
- Instalar os pacotes com o seu gerenciador de pacotes favorito (Ex: yarn, rnpm ou npm);
- Buildar o projeto;
- Criar imagem da aplicação no Docker;
- Inicializar um container com a imagem criada;
- E acessar URL do servidor local;

#### Exemplo:

##### Clonando

```cmd 
git clone git@github.com:dbrazl/inicie-pokemon.git
```

##### Instalando pacotes

```cmd
yarn
```

##### Buildando a aplicação

```cmd 
yarn build
```

##### Criando imagem da aplicação

```cmd
docker build -t inicie-pokemon .
```

##### Criando e executando container da aplicação

```cmd
docker run inicie-pokemon
```

##### Acessando a URL do servidor local

![Log do servidor web](https://github.com/dbrazl/inicie-pokemon/assets/52254578/962a3a4f-cfaa-4323-95ec-009d88163898)


## Testes automatizados

Para iniciar a bateria de testes e verificar o log de testes, você deve:

- Executar o script de testes
- Verificar o log de testes na página do karma que abrirá automaticamente

#### Exemplo:

##### Rodando testes

```cmd 
yarn test
```

##### Verificar log

![Página do Karma](https://github.com/dbrazl/inicie-pokemon/assets/52254578/5f28adc8-1091-4866-ade7-5bd101140965)

## Cobertura de testes

Para verificar a cobertura de teste, você deve:

- Executar o script de cobertura de testes
- Verificar a cobertura de testes na página que se abrirá automaticamente

#### Exemplo:

##### Executar script de cobertura

```cmd 
yarn coverage
```

##### Verificar cobertura de testes

![Página de cobertura de testes](https://github.com/dbrazl/inicie-pokemon/assets/52254578/8d165930-7bbd-4e86-8eb0-3a1f2917b9bc)

A cobertura de testes é atualizada automaticamente ao ser incluso novos testes enquanto os testes automatizados estiverem rodando.

**ATENÇÃO:** Foram realizados testes unitários com foco em implementação. Detalhes de implementações como funcionalidades foram deixados de lados para que os testes sejam manuteníveis.

## Contribuidores

#### Desenvolvedor
<a href="https://github.com/dbrazl" style="text-decoration: none; display:  color: black;">
  <img src="https://github.com/dbrazl.png" width="150px" height="150px" alt="Daniel Braz" />
</a>

[Daniel Braz](https://github.com/dbrazl)

