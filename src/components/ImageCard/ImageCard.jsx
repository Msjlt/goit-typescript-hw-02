import css from "./ImageCard.module.css";

export default function ImageCard({ url, alt, onClick }) {
  return (
    <div className={css.galleryItem}>
      <img src={url} alt={alt} className={css.image} onClick={onClick} />
    </div>
  );
}
