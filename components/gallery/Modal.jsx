import React, { useEffect } from "react";
import styles from "./stylesheets/Modal.module.css";

const Modal = ({
  photos,
  setSelectedPhotoIndex,
  selectedPhotoIndex,
  setIsModalOpen,
  series,
}) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  const getCurrentDateTimeString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}_${hours}-${minutes}`;
  };
  useEffect(() => {
    console.log(series);
  }, []);
  return (
    <div className={styles.modal}>
      <div className={styles.modal_head}>
        <img width={20} src="/close.svg" alt="Back btn" onClick={closeModal} />
      </div>
      <div className={styles.modal_body}>
        <img width={50} src="/back.svg" alt="Back btn" onClick={goToPrevious} />
        <div className={styles.modalContent}>
          <div className={styles.modalContentHead}>
            <div>
              <img
                width={50}
                src={series.series.cover_photo}
                alt="Cover Photo"
              />

              <div>
              <p>{series.memory.title}</p>
              <p>{series.series.subject}</p>
              </div>

            </div>

            <a
              download={`photo_${getCurrentDateTimeString()}`}
              href={photos[selectedPhotoIndex].src}
            >
              <button>Download</button>
            </a>
          </div>

          <img
            src={photos[selectedPhotoIndex].src}
            alt={photos[selectedPhotoIndex].alt}
            className={styles.modalImage}
          />

<div className={styles.modalContentHead}>
       
              <p>{series.memory.location}</p>
              <p>{series.series.date}</p>
           


          </div>
        </div>
        <img width={50} src="/next.svg" alt="Next btn" onClick={goToNext} />
      </div>
    </div>
  );
};

export default Modal;
