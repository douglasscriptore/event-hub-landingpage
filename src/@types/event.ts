export interface Event {
  id: string;
  title: string;
  category: 'academic' | 'show' | 'security';
  date: string;
  location: string;
  image: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
  eventName: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}
