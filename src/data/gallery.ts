export type Category =
  | "All"
  | "Performances"
  | "Workshops"
  | "Community Dialogue";

export interface GalleryItem {
  id: number;
  src: string;
  category: Category;
  title: string;
  location: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    category: "Performances",
    title: "The Price of Love Stage Play",
    location: "Accra, Ghana",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
    category: "Performances",
    title: "Annual Community Drama Festival",
    location: "Kumasi, Ghana",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
    category: "Workshops",
    title: "Youth Advocacy Training",
    location: "Cape Coast, Ghana",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    category: "Workshops",
    title: "Facilitator Skills Workshop",
    location: "Legon, Accra",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
    category: "Community Dialogue",
    title: "Sanitation Awareness Dialogue",
    location: "Assin Foso, Central Region",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
    category: "Community Dialogue",
    title: "Local Government Accountability Forum",
    location: "Eastern Region, Ghana",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    category: "Performances",
    title: "Traditional Dance Showcase",
    location: "National Theatre, Accra",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Workshops",
    title: "Artistic Expression Series",
    location: "Sunyani, Ghana",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    category: "Community Dialogue",
    title: "Health Advocacy Meeting",
    location: "Northern Region, Ghana",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    category: "Workshops",
    title: "Community Mobilization Seminar",
    location: "Tamale, Ghana",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    category: "Performances",
    title: "Voices from the Street",
    location: "Tema, Ghana",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
    category: "Community Dialogue",
    title: "Education Policy Forum",
    location: "Ho, Volta Region",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1531050110064-4533810b27f6?w=800&q=80",
    category: "Workshops",
    title: "Drama-in-Education Intensive",
    location: "Takoradi, Ghana",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1472653425572-ca51833d1736?w=800&q=80",
    category: "Performances",
    title: "Heritage Night Performance",
    location: "Kumasi Cultural Center",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    category: "Community Dialogue",
    title: "Civic Rights Awareness",
    location: "Sunyani, Western Region",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1528605248644-14dd04cb2201?w=800&q=80",
    category: "Workshops",
    title: "Theatre for Social Change",
    location: "Accra, Ghana",
  },
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    category: "Performances",
    title: "Unity Through Arts",
    location: "Bolgatanga, Ghana",
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80",
    category: "Community Dialogue",
    title: "Water & Sanitation Meeting",
    location: "Wa, Upper West",
  },
];
