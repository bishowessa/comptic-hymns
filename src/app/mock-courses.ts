export interface Course {
  id: number;
  title: string;
  image: string;
  price: string;
  description?: string;
}

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Level 1: Hymns Intro',
    image: '/course-level1.jpg',
    price: '$150 USD'
  },
  {
    id: 2,
    title: 'Level 2: Advanced Hymns',
    image: '/course-level2.jpg',
    price: '$180 USD'
  }
];
