const fs = require('fs');

const loadFile = async () => {
  try{
    const data = await fs.promises.readFile('./test.txt', {
      encoding: 'utf-8'
      
    } );
    console.log(data);
  } catch(err) {
    console.error(err);
  }  
}

loadFile();