export interface Event {
  _id?: string;
  id: number;
  title: string;
  description: string;
  category: [string];
  showtime: [{
    start: Date,
    end: Date
  }];
  address: [
    {
      location_name: string,
      location_street: string,
      location_zipcode: string,
      location_city: string,
      gmaps_longitutde: number,
      gmaps_latitude: number,
    }
    ];
  opening_times: any;
  pricing: any;
  image_thumbnail: string;
  image_banner: string;
}
