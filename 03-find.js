/**
 * ==============================================================================
 * 📌 MÉTODO: find()
 * ==============================================================================
 * Função: Percorre o array e retorna o PRIMEIRO ELEMENTO que satisfar a condição.
 * Se nenhum for encontrado, retorna undefined.
 * ==============================================================================
 */

console.log('--- 🎯 EXEMPLOS COM find() ---\n');

// ----------------------------------------------------------------------------------
// Exemplo 1 (Básico): Primeiro número acima da média
// ----------------------------------------------------------------------------------
console.log('--- Exemplo 1: Primeira nota aprovada (Básico) ---');

const notas = [4.5, 5.8, 7.5, 9.0, 6.0];

const primeiraNotaAprovada = notas.find((nota) => nota >= 7.0);

console.log('Primeira nota >= 7.0:', primeiraNotaAprovada);
console.log('\n');

// ----------------------------------------------------------------------------------
// Exemplo 2 (Intermediário): Buscar usuário por nome
// ----------------------------------------------------------------------------------
console.log('--- Exemplo 2: Buscar cliente por nome (Intermediário) ---');

const clientes = [
    { id: 1, nome: 'Marcos Vinicius', plano: 'Free' },
    { id: 2, nome: 'Juliana Mendes', plano: 'Premium' },
    { id: 3, nome: 'Carlos Eduardo', plano: 'Pro' },
];

const clienteEncontrado = clientes.find((c) => c.nome === 'Juliana Mendes');
