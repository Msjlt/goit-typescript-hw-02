import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import { fetchImages } from "../../images-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import Modal from "react-modal";
Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");
  const [totalPages, setTotalPages] = useState(999);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleSearch = async (newTopic) => {
    setImages([]);
    setPage(1);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getArticles() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImages(topic, page);
        setTotalPages(data.total_pages);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
        toast.error("Failed to load images");
      } finally {
        setLoading(false);
      }
    }
    getArticles();
  }, [page, topic]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}
      <Toaster position="top-right" />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={loading} />
      )}
      {page >= totalPages && <p>THIS IS THE END! RUN FOOLS!</p>}

      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImageUrl}
      />
    </div>
  );
}

export default App;
