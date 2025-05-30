# ᯓ★ Gerenciando Tarefas com JavaScript 💫

## Criando lista de tarefas 📝

### ⊹ ࣪ ˖ Abrindo um array
* let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

### 𖹭.ᐟ Adicionando novas tarefas com método Push
* tarefas.push('Fazer Duolingo','Checar Emails');

### ⊹ ࣪ ˖ Removendo último elemento da lista de tarefas com método Pop e registrando-o
* let itemRemovido = tarefas.pop();

### 𖹭.ᐟ Adicionando um elemento ao início da lista com método Unshift
* tarefas.unshift('Fazer almoço');

#### ⊹ ࣪ ˖ Removendo o primeiro elemento da lista cok método Shift e registrando-o
* let segundoItemRemovido = tarefas.shift();

### 𖹭.ᐟ Verificando se uma Tarefa Existe com método Includes
* console.log("A lista inclui 'Ir à academia?'", tarefas.includes('Ir à academia'));

### ⊹ ࣪ ˖ Transformando a Lista em String com método Join
* console.log("Minha lista de tarefas é", tarefas.join(", "));

### 𖹭.ᐟ Extraindo parte da lista (do índice 2 ao 4 da lista) com método Splice
* let maisElementosRemovidos = tarefas.splice(2, 2);

### ⊹ ࣪ ˖ Alterando lista substituindo elementos com método Splice
* tarefas.splice(3, 1, "lavar o cabelo")

### 𖹭.ᐟ Concatenando Tarefas (unindo arrays) com método Concat
* let tarefas2 = ["Continuar escrevendo roteiro do RPG","Entregar ficha do RPG"];
* console.table(tarefas.concat(tarefas2)); 

### ⊹ ࣪ ˖ Transformando as Tarefas adicionando "Fazer:" no início com método 
* transformandoTarefas = novatarefas.map(novatarefas => "Fazer: " + novatarefas);