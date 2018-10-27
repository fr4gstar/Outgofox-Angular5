export class Event {
  id: number;
  title: string;
  description: string;
  category: [string];
  showtime: [{
    start: Date,
    end: Date
  }];
  address: any;
  opening_times: any;
  pricing: any;
  image_thumbnail: string;
  image_banner: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
