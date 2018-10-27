export interface Movie {
  _id?: string;
  id: number;
  title: string;
  description: string;
  category: [string];
  backinfo: [{
    length: string,
    actors: [string],
    regie: string,
    country: string,
    fsk: string,
    website_url: string
  }];
  cinemas: [{
    id: number,
    name: string,
    street: string,
    zipCode: number,
    city: string,
    longitutde: number,
    latitude: number,
    opening_times: [string],
    showtimes: [Date]
  }];
  image_thumbnail: string;
  image_poster: string;
  trailer_youtube: string;

}
