
const funcao = (a, b, c) => {
  const aB = a + b;
  const result = aB * c;
  return new Promise((resolve, reject) => {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number') {
      return reject('Informe apenas numeros');
    }
    if(result < 50) return reject('valor muito baixo');
    resolve(result);
  })
}

funcao(5, 4, 5)
  .then((content) => {
    console.log(content);
  })
  .catch((err) => {
    console.error(err);
  });

