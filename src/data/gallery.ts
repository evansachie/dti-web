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
  ...Array.from({ length: 39 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/${i + 1}.jpg`,
    category: (i % 3 === 0
      ? "Performances"
      : i % 3 === 1
        ? "Workshops"
        : "Community Dialogue") as Category,
    title: `TFDI Impact Record #${i + 1}`,
    location: i % 2 === 0 ? "Greater Accra" : "Central Region",
  })),
];
