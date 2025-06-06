let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Fazer revisão para o teste', 'Limpar o quarto', 'Ler um livro', 'Estudar para concurso', 'Organizar o computador'];
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

// Substitui elementos
tarefas.splice(3, 1, "Lavar o cabelo");
console.table(tarefas);

// Concatenando Tarefas
let tarefas2 = ["Continuar escrevendo roteiro do RPG","Entregar ficha do RPG"];
let novatarefas = tarefas.concat(tarefas2);
console.table(novatarefas);

// Transformando as Tarefas
transformandoTarefas = novatarefas.map(novatarefas => "Fazer: " + novatarefas);
console.table(transformandoTarefas);

// Filtrando Tarefas
let tarefasComMaisDe15Caracteres = transformandoTarefas.filter(tarefa => tarefa.length > 15);
console.table(tarefasComMaisDe15Caracteres);

// Ordenando as Tarefas
let tarefasOrdenadas = transformandoTarefas.sort();
console.table(tarefasOrdenadas);

// Invertendo a Ordem das Tarefas
let tarefasInvertidas = tarefasOrdenadas.reverse();
console.table(tarefasInvertidas);