class Monster {
  constructor(name) {
    this.name = name;
  }
  attack() {
    console.log(`${this.name} attacked.`);
  }
  walk() {
    console.log(`${this.name} walked.`);
  }
}
class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} flew.`);
  }
}

class SwimmingMonster extends Monster {
  swim() {
    console.log(`${this.name} swam.`);
  }
}
const bear = new Monster('bear');
// bear.attack() 
// bear.walk()

const orel = new FlyingMonster('orel');
// orel.attack();
// orel.walk();
// orel.fly();

// composition
function swimmer({name}){
  return {
    swim:() => console.log(`${name} swam.`)
  }
}
function swimmingMonsterCreator(val){
  const monster = {name: val}
  return {
    ...monster,
    ...swimmer(monster),
    ...attackerAndWalker(monster)
  }
}
function flyer({name}){
  return {
    fly:() => console.log(`${name} flew.`)
  }
}
function attackerAndWalker({name}){
  return {
    attack:() => console.log(`${name} attacked.`),
    walk:() => console.log(`${name} walked.`)
  }
}


function swimmingFlyingMonsterCreator(val){
  const monster = {name: val}
  return {
    ...monster,
    ...swimmer(monster),
    ...flyer(monster),
    ...attackerAndWalker(monster)
  }
}

const shark = swimmer({name: 'shark'});
shark.swim(); 

const tuna  = swimmingMonsterCreator('tuna');
tuna.swim(); 

const monster = swimmingFlyingMonsterCreator('monstrum');
monster.fly();
monster.attack();
monster.walk();