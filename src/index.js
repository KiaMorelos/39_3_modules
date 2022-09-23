import foods from './foods';
import {choice, remove} from './helpers';

const food = choice(foods);
const leftovers = remove(food, foods);

console.log(`I'd like one ${food}, please`);
console.log(`Here you go: ${food}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${leftovers.length} other fruits left: ${leftovers}`);
