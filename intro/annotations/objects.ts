interface Profile {
  name: string;
  age: number;
  coords: {
    lat: number;
    lng: number;
  };
  setAge(age: number): void;
}

const profile: Profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const {
  name,
  age,
  coords,
}: {
  name: string;
  age: number;
  coords: { lat: number; lng: number };
} = profile;

const { lat, lng }: { lat: number; lng: number } = coords;
