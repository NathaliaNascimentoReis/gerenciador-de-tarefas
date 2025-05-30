let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

// Adicionando mais tarefas à lista
tarefas.push('Fazer Duolingo','Checar Emails');
console.table(tarefas);

// Removendo último elemento da lista
let itemRemovido = tarefas.pop();
console.log(`\n o item removido foi ${itemRemovido} \n`);

// Adicionando um elemento ao ínicio da lista
tarefas.unshift('Fazer almoço');
console.table(tarefas);

