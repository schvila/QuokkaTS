const fetchData = callback => {
  setTimeout(()=> {
    callback('done.')
  }, 1500)
};

setTimeout(()=>{
  console.log('2 sec timeout');
  fetchData(text => {
    console.log(text);
  })
}, 2000)
console.log('Before timer 1');
console.log('Before timer 2');