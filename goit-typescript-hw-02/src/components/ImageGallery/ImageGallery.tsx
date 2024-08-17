import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../App/App";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: Image[];
  onImageClick: (imageUrl: string) => void;
}

export default function ImageGallery({
  items,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={styles.imageGallery}>
      {items.map((item) => (
        <li key={item.id} className={styles.imageCard}>
          <ImageCard
            imageUrl={item.urls.small}
            altText={item.alt_description}
            onClick={() => onImageClick(item.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
}
