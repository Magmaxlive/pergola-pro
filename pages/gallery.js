import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Project() {
  const images = [
    "/assets/img/project/h3_project_img01.jpg",
    "/assets/img/project/h3_project_img02.jpg",
    "/assets/img/project/h3_project_img03.jpg",
    "/assets/img/project/h3_project_img04.jpg",
    "/assets/img/project/h3_project_img05.jpg",
    "/assets/img/project/h3_project_img06.jpg",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    console.log("Image clicked, index:", index); // Debug
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    console.log("Closing modal"); // Debug
    setSelectedImageIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    console.log("Next clicked, current index:", selectedImageIndex); // Debug
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      console.log("Next index:", newIndex); // Debug
      return newIndex;
    });
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    console.log("Previous clicked, current index:", selectedImageIndex); // Debug
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      console.log("Previous index:", newIndex); // Debug
      return newIndex;
    });
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "ArrowLeft") handlePrevious(e);
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <>
      <Layout breadcrumbTitle="Projects">
        <section className="inner-project-area pt-30 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">Our Gallery</span>
                  <h2 className="title">Our Latest Gallery</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {images.map((imgSrc, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <Link href="/project-details">
                        <img
                          src={imgSrc}
                          alt={`Project ${index + 1}`}
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleImageClick(index);
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Modal (Avoiding Bootstrap JS Dependency) */}
        {selectedImageIndex !== null && (
          <div
            className="custom-modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", // Backdrop
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1050,
            }}
            onClick={handleCloseModal} >
            <div
              className="custom-modal-content"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                background: "none",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImageIndex]}
                alt={`Project ${selectedImageIndex + 1}`}
                style={{ width: "100%", height: "auto", maxHeight: "100vh" }}
              />
              <button
                onClick={handlePrevious}
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1100, // Ensure buttons are clickable
                  background: "#fff",
                  border: "none",
                  padding: "10px",
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                aria-label="Previous Image"
              >
                &larr; Prev
              </button>
              <button
                onClick={handleNext}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1100, // Ensure buttons are clickable
                  background: "#fff",
                  border: "none",
                  padding: "10px",
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                aria-label="Next Image" >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </Layout>

      {/* Custom Styles */}
      <style jsx global>{`
        .custom-modal {
          transition: opacity 0.3s ease;
        }
        .custom-modal-content img {
          transition: opacity 0.3s ease;
        }
        .custom-modal-content button:hover {
          opacity: 1;
        }
        .project-thumb-two img {
          transition: transform 0.3s ease;
        }
        .project-thumb-two img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}