const randomPromise = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 2);
  if (rand === 0)
  {
    resolve('Success random is Zero');
  } else {
    reject('Failed not zero');
  }
});
randomPromise
  .then(msg => console.log(msg))
  .catch(msg => console.error(msg))
