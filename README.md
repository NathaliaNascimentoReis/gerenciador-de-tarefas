# ᯓ★ Gerenciando Tarefas com JavaScript 💫

## Criando lista de tarefas 📝

#### ⊹ ࣪ ˖ Abrindo um array
* let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

#### ⊹ ࣪ ˖ Adicionando novas tarefas com método push
* tarefas.push('Fazer Duolingo','Checar Emails');

#### ⊹ ࣪ ˖ Removendo último elemento da lista de tarefas com método Pop e registrando-o
* let itemRemovido = tarefas.pop();

#### ⊹ ࣪ ˖ Adicionando um elemento ao início da lista com método unshift
* tarefas.unshift('Fazer almoço');

#### ⊹ ࣪ ˖ Removendo o primeiro elemento da lista cok método shift
* let segundoItemRemovido = tarefas.shift();

#### ⊹ ࣪ ˖ Verificando se uma Tarefa Existe com método Includes
* console.log("A lista inclui 'Ir à academia?'", tarefas.includes('Ir à academia'));