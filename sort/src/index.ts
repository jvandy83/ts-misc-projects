import { CharactersCollection } from './CharactersCollection';
// import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
// import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([-2, 4, 34, 44]);

numbersCollection.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('zzaaddgghhkkmmee');

charactersCollection.sort();

console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.print();
