export interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  type: "lost" | "found";
  coordinates?: { lat: number; lng: number };
  // coordinates: {
  //   lat: number;
  //   lng: number;
  // };
  images: (string | File)[];
  user: { name: string; email: string; contactNum: string };
  createdAt?: string | Date;
}
