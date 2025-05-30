# ᯓ★ Gerenciando Tarefas com JavaScript 💫

## Criando lista de tarefas 📝

#### ⊹ ࣪ ˖ Abrindo um array
* let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

#### 𖹭.ᐟ Adicionando novas tarefas com método Push
* tarefas.push('Fazer Duolingo','Checar Emails');

#### ⊹ ࣪ ˖ Removendo último elemento da lista de tarefas com método Pop e registrando-o
* let itemRemovido = tarefas.pop();

#### 𖹭.ᐟ Adicionando um elemento ao início da lista com método Unshift
* tarefas.unshift('Fazer almoço');

#### ⊹ ࣪ ˖ Removendo o primeiro elemento da lista cok método Shift e registrando-o
* let segundoItemRemovido = tarefas.shift();

#### 𖹭.ᐟ Verificando se uma Tarefa Existe com método Includes
* console.log("A lista inclui 'Ir à academia?'", tarefas.includes('Ir à academia'));

#### Transformando a Lista em String com método Join
* console.log("Minha lista de tarefas é", tarefas.join(", "));