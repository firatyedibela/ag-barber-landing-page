export type Barber = {
  avatar: string;
  name: string;
  title: string;
  introduction: string;
  instagram: string;
  phone: string;
};

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export type Review = {
  id: number;
  avatar: string;
  owner: string;
  stars: 1 | 2 | 3 | 4 | 5;
  timeAgo: string;
  review: string;
  href: string;
};
