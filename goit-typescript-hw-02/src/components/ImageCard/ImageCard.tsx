interface ImageCardProps {
  imageUrl: string;
  altText: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  altText,
  onClick,
}) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default ImageCard;
