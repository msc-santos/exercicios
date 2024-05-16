# 1 - Javascript Strict Mode

### "use strict";Define que o código JavaScript deve ser executado em "modo estrito".

- Exemplo

```bash
"use strict"
x = 3.14;       // This will cause an error because x is not declared
```

# 2 - Call Stack e Memory Heap

### Em JavaScript, "Call Stack" e "Memory Heap" são dois componentes fundamentais da sua arquitetura de execução.

#### Call Stack (Pilha de Chamadas):

- A Call Stack é uma estrutura de dados que rastreia a execução do código.
- Funciona de forma semelhante a uma pilha de pratos, onde o último prato adicionado é o primeiro a ser retirado (LIFO - Last In, First Out).
- Cada vez que uma função é chamada, um novo registro de ativação (conhecido como frame) é empilhado na Call Stack.
- Quando uma função é concluída, seu frame é removido da pilha, permitindo que o controle retorne para a função que a chamou.
- Se a pilha ficar muito grande (devido a chamadas recursivas profundas ou a uma execução longa), pode ocorrer um estouro de pilha (stack overflow), o que resultará em um erro.

#### Memory Heap (Pilha de Memória):

- A Memory Heap é a região onde são alocadas dinamicamente as variáveis de objetos, strings, closures, etc.
- Ao contrário da Call Stack, a Memory Heap é uma área de memória grande e não estruturada, onde os dados são alocados de forma não sequencial.
- As variáveis são alocadas na Memory Heap quando são criadas e desalocadas quando não são mais necessárias.
- O JavaScript possui um mecanismo de coleta de lixo (garbage collection) que monitora a alocação de memória e desaloca automaticamente a memória que não está mais sendo usada evitando vazamentos de memória.
- Em resumo, a Call Stack gerencia a execução do código, enquanto a Memory Heap gerencia a alocação dinâmica de memória durante a execução do programa em JavaScript.

#### In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:

- string
- number
- bigint
- boolean
- undefined
- symbol
- null

Mais detalhes nos links a baixo:

- https://levelup.gitconnected.com/understanding-call-stack-and-heap-memory-in-js-e34bf8d3c3a4
- https://medium.com/@allansendagi/javascript-fundamentals-call-stack-and-memory-heap-401eb8713204
- https://www.mattzeunert.com/2017/03/29/v8-object-size.html
- https://developer.mozilla.org/en-US/docs/Glossary/Primitive

# 3 - Valor vs. Referência

- Detalhes no link: https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
- Explicação também na pasta "ref-vs-valor"
