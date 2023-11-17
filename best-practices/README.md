# Contele - The Best Pratice JS

Este artigo é resultado de muita dedicação e trabalho em equipe. Ao longo do tempo notamos pontos relevantes sobre desenvolver um código, além de documentos com grande peso em referencia na tecnologia. Adotamos um novo metodos não em si focado na linguagem propriamente dita, mas em um novo modelo adaptado e eficiente.
Traga para si, o vicio de sempre querer o melhor!

## Melhor prática
> Uma “melhor prática” pode ser considerada como uma prática “geralmente aceita”, que necessita uma comprovação empírica de um resultado específico e é proposto por uma comunidade de prática como um padrão ou o mínimo necessário para ser considerado como uma prática. A “melhor prática” é transformada em “boa prática” através de sua aplicação para ajudar a alcançar um ou mais resultados desejados.
Não sendo necessariamente uma regra imposta.

### Contele e suas tecnologias:

a linguagem de programação principal da Contele é **javascript** junto de suas ramificações, frameworks, bibliotecas e tecnologias complementares:
1. nodejs
1. react
1. react native
1. typescript
1. angular v1
1. nginx 
1. docker
1. html/css 
1. firebase
1. google maps / google apis
1. mysql
1. postgresql
1. figma
1. cypress

as seguintes tecnologias ainda estão presentes apenas para manutenção:

1. php
1. hyperapp
1. gulp
1. go lang
1. python
1. aws lambda
1. shellscript

## Melhores Práticas 
##### O que **nunca** usar?
   1. **function**
   **function** ficou no passado, nao precisamos mais.
```javascript
function(){
 // code
}
```
   2. **var**
   **var** ficou no passado, nao precisamos mais
```javascript
var nome = 'nunca mais'
```
   3. **while** 
   Muito perigoso e pouco beneficio
```javascript
while (condição) {
  rotina
}
```
   4. **lista[index]** 
   Por que acessar um elemento especifico de uma lista? (talvez seja melhor voce desconstruir a lista)
```javascript 
const [myFistElem] = lista;
```
   5. **else**
   O ideal é que sua função tenha um fluxo ideal onde tudo que ocorre dentro dela mira um unico cenario e se algo sair do conforme, um erro pode ser gerado.
```javascript 
if(condição) {
    return ok
}
```
##### O que **sempre** usar?
   1. **const** 
   Uma **constante** é somente leitura. Isso não significa que o valor é imutável e a debugar, previsibilidade do código.
```javascript 
const user_name = 'sempre joão';
```
   2. **async/await** 
   Códigos mais limpos e claros de ler.
```javascript 
const async getUser = ({user_id}) => {
    const users = await knex.select().table('*').where({ user_id });
    return users;
}
```
   3. **Operadores de listas (forEach map filter reduce)** 
   É muito mais facil de ler um codigo que está usando.
```javascript 
    const users_per_ids = users.reduce((idx, user) => {
        idx[user.id] = user;
        return idx;
     }, {});
```
   4. **Early return** 
   O princípio deste conceito diz que você deve se preocupar em retornar o resultado da função o quanto antes, ou seja, você irá estruturar o código da função de forma que retorne o mais rápido possível o valor esperado.
```javascript 
  const formatDate = (date) => {
    if (date instanceof DateTime) {
        return format(date, 'yyyy-mm-dd');
    }
    if (Number.isInteger(date)) {
        return format(new date(date), 'yyyy-mm-dd');
    }
    return date;
}
```
   5. **throw new Error()** 
   Proteja seu código: gere erros. O seu codigo deve fazer uma coisa e apenas uma. Tudo que vier de fora e nao for o que voce espera deve ser tratado como hostil. 
```javascript 
 if (!client_id) {
      throw new Error("missing client_id");
  }
```
   6. **Evitar if's** 
   Utilizando objetos literais para fluxos alternativos e previsiveis.
```javascript
No!
 if (type === 'a') return 'nome';
 if (type === 'b') return 'sobrenome';

Yea!
 const getAttribute = {
     'a': 'nome',
     'b': 'sobrenome';
 }
 return getAttribute[type];
```
   7. o que usar em determinados cenarios:
   **for** Precisar usar, caso tenha necessidade de percorrer mais de uma lista ao mesmo tempo onde todas as listas possuem o mesmo comprimento (diminui a quantidade de iterações no loop)!
   9. **let** 
   Só use caso voce esteja utilizando ela dentro de alguma iteração ou como gatilho (talvez voce possa usar um obj const = {} e alternar o valor das propriedades dele)

#### Deem uma passada por aqui, Nodejs best Practices 
https://github.com/goldbergyoni/nodebestpractices
