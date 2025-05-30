let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];
console.table(tarefas);

// Adicionando mais tarefas à lista
tarefas.push('Fazer Duolingo','Checar Emails');
console.table(tarefas);

// Removendo último elemento da lista
let itemRemovido = tarefas.pop();
console.log(`\n o item removido foi ${itemRemovido} \n`);

// Adicionando um elemento ao ínicio da lista
tarefas.unshift('Fazer Almoço');
console.table(tarefas);

// Removendo a Primeira Tarefa da lista
let segundoItemRemovido = tarefas.shift();
console.log(`\n O segundo item removido da lista foi ${segundoItemRemovido} \n`);

// Verificando se uma Tarefa Existe
console.log("A lista inclui 'Ir à academia?'", tarefas.includes('Ir à academia'));
console.table(tarefas);

// Transformando a Lista em String
console.log("\n Minha lista de tarefas é", tarefas.join(", "));

// Extrai parte da lista
let maisElementosRemovidos = tarefas.splice(2, 2);
console.log('\n', maisElementosRemovidos, '\n');
console.table(tarefas);
