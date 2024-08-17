import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            url={item.urls.full}
            alt={item.alt_description}
            onClick={() => onImageClick(item.urls.full)}
          />
        </li>
      ))}
    </ul>
  );
}
