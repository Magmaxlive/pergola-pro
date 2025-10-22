import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head"

export default function Project() {
  const images = [
    { src: "/assets/img/gallery/1.jpg", alt: "Pergola installation with adjustable louvre roof system in Tauranga, New Zealand" },
    { src: "/assets/img/gallery/2.png", alt: "Modern glass-enclosed office space under louvre pergola roof" },
    { src: "/assets/img/gallery/3.png", alt: "Small wooden deck with pergola where kids play outdoors" },
    { src: "/assets/img/gallery/4.png", alt: "Contemporary outdoor dining area with full glass pergola enclosure" },
    { src: "/assets/img/gallery/5.png", alt: "Louvre roof pergola installed beside a modern home with patio furniture" },
    { src: "/assets/img/gallery/6.png", alt: "Outdoor entertainment pergola with retractable louvre roof and seating" },
    { src: "/assets/img/gallery/7.png", alt: "Stylish outdoor dining setup under aluminum pergola in backyard" },
    { src: "/assets/img/gallery/8.png", alt: "Glass sliding pergola enclosure for modern outdoor lounge" },
    { src: "/assets/img/gallery/9.png", alt: "Poolside pergola providing shade for outdoor dining area" },
    { src: "/assets/img/gallery/10.png", alt: "Louvre roof pergola shading patio with outdoor seating" },
    { src: "/assets/img/gallery/11.png", alt: "White aluminum pergola with enclosed glass walls beside house" },
    { src: "/assets/img/gallery/12.png", alt: "Outdoor barbecue area under custom pergola in wooden patio" },
    { src: "/assets/img/gallery/13.png", alt: "Elegant backyard dining pergola with tiled flooring and garden view" },
    { src: "/assets/img/gallery/14.png", alt: "Louvre roof pergola with glass walls and rattan furniture setup" },
    { src: "/assets/img/gallery/15.png", alt: "Modern poolside pergola with adjustable roof and sun loungers" },
    { src: "/assets/img/gallery/16.png", alt: "Woman relaxing under automated louvre pergola roof in sunny backyard" },
    { src: "/assets/img/gallery/17.png", alt: "Enclosed pergola sunroom with white frame and modern outdoor décor" },
    { src: "/assets/img/gallery/18.png", alt: "Outdoor kitchen and BBQ space covered by sturdy pergola" },
    { src: "/assets/img/gallery/19.png", alt: "Compact garden pergola with cozy outdoor seating and plants" },
    { src: "/assets/img/gallery/20.jpg", alt: "Luxury pergola with warm lighting for evening backyard gatherings" },
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
      <Head>
        <title>Pergola Pro Gallery | Outdoor Living Inspiration in Tauranga</title>
        <meta name="title" content="Pergola Pro Gallery | Outdoor Living Inspiration in Tauranga"></meta>
        <meta name="description" content="Explore our gallery of pergolas, carports, and louvre roofs built across Tauranga and NZ. Get inspired for your next outdoor project."></meta>
      </Head>
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
              {images.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-10">
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <Link href="/project-details">
                        <img
                          src={image.src}
                          alt={image.alt}
                          style={{ cursor: "pointer", maxWidth: "600px", height: "300px", objectFit: "cover" }}
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
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
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