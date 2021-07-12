// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  name?: string;
  catchPhrase?: string;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLDivElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
  addMarker = (entry: Mappable): void => {
    const { name, catchPhrase } = entry;
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: entry.location,
      title: name ? name : catchPhrase,
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: entry.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  };
}
