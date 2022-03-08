/* eslint-disable @typescript-eslint/no-unused-vars */
// Record example
export interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'bo ris' | 'trtrt'; // Union of literal string

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  'bo ris': { age: 5, breed: "Maine Coon" },
  trtrt: { age: 16, breed: "British Shorthair" },
};

// Type vs Interface
// - declaration merging
interface TName {
  user: string,
};
interface TName {
  song?: string
}
const person: TName = {
  user: 'John',
  song: 'lalala'
}

// Intersection
type Name = {
  name: string
};

interface Age {
  age: number
};

type TPerson = Name & Age;

const user: TPerson = {
  name: 'john',
  age: 22
}

// interface Name {
//   name: string
// };

// interface Age {
//   age: number
// };

// type Person = Name & Age;