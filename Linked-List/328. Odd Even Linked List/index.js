/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  // Verifica se a lista está vazia ou tem apenas um ou dois elementos,
  // pois nesse caso não precisamos fazer nada e podemos retornar a lista original
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  // Inicializa os ponteiros para os nós ímpares e pares
  let odd = head; // Ponteiro para o primeiro nó ímpar
  let even = head.next; // Ponteiro para o primeiro nó par

  // Guarda uma referência para o primeiro nó par, que será usado posteriormente
  let evenHead = even;

  // Percorre a lista, ajustando os ponteiros para os nós ímpares e pares
  while (even && even.next) {
    // Conecta o nó ímpar ao próximo nó ímpar
    odd.next = even.next;
    // Move o ponteiro para o próximo nó ímpar
    odd = odd.next;
    // Conecta o nó par ao próximo nó par
    even.next = odd.next;
    // Move o ponteiro para o próximo nó par
    even = even.next;
  }

  // Conecta a lista de nós ímpares à lista de nós pares
  odd.next = evenHead;

  // Retorna a lista rearranjada
  return head;
};
