import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const GOOGLE_API_KEY = 'AIzaSyDjfIJhJ3zcxqWbu2kXjqqZ9rOADW-XJR4';

const script = document.createElement('script') as HTMLScriptElement;
script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
script.defer = true;
document.head.appendChild(script);

const user = new User();
const company = new Company();

const configureMap = () => {
  const map = new CustomMap('map');
  map.addMarker(user);
  map.addMarker(company);
  return map;
};

document.getElementById('btn')?.addEventListener('click', configureMap);
