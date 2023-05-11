function geradorDeSenhas(tamanho) {
  // function geradorDeSenhas(tamanho) { - Aqui estamos definindo uma função chamada geradorDeSenhas que recebe um parâmetro chamado tamanho para indicar o tamanho da senha que será gerada.

  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //  - Aqui estamos definindo uma constante caracteres que contém todos os caracteres que serão usados para gerar a senha. Neste caso, são letras maiúsculas, letras minúsculas e dígitos de 0 a 9.

  let senha = ""; // Aqui estamos definindo uma variável senha como uma string vazia para armazenar a senha gerada.

  for (let i = 0; i < tamanho; i++) {
    //Aqui estamos iniciando um loop for que será executado tamanho vezes (o valor do tamanho que foi passado como parâmetro para a função).

    const indice = Math.floor(Math.random() * caracteres.length); //  Aqui estamos adicionando um caractere aleatório da string caracteres na variável senha. Isso é feito usando o método charAt e gerando um número aleatório usando Math.random(), que é multiplicado pelo tamanho da string caracteres e arredondado para baixo com Math.floor.
    senha += caracteres[indice];
  } //  Fechamos o loop for.

  return senha; // Aqui estamos retornando a senha gerada.
} // Fechamos a função geradorDeSenhas.

module.exports = geradorDeSenhas; //  Aqui estamos exportando a função geradorDeSenhas para que possa ser usada em outros arquivos com o require.
