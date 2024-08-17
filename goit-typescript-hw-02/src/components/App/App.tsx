import { useState, useEffect } from "react";

import axios, { AxiosResponse } from "axios";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response: AxiosResponse<{ results: Image[] }> = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=YL7J0YTcDhe-HnK11LFWP3F7-jcGuyBx0-U9_ON2V3s`
        );
        setImages((prev) => [...prev, ...response.data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearch = (newTopic: string) => {
    setQuery(newTopic);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <h1>TheSearch</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading images, please wait...</p>}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery items={images} onImageClick={openModal} />
          <LoadMoreBtn onLoadMore={handleLoadMore} />
        </>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={true}
          imageUrl={selectedImage}
          altText="Large image"
          onRequestClose={closeModal}
        />
      )}
      <Toaster />
    </div>
  );
}
