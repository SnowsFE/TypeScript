import type { NextPage } from "next";
import ImageGallery from "./Image";
import { Image } from "./types";

const mockImages: Image[] = Array.from({ length: 21 }).map((_, index) => ({
  id: index,
  src: `https://example.com/image${index + 1}.jpg`,
  alt: `Image ${index + 1}`,
}));

const New: NextPage = () => {
  return (
    <div>
      <ImageGallery images={mockImages} />
    </div>
  );
};

export default New;
