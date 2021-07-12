import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function controller(target: typeof Plane) {
  const t = target.prototype;
  for (let key in t) {
    const path = Reflect.getMetadata('path', t, key);
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', path, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');

// console.log(note);
