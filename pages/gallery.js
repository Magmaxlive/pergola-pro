import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import Head from "next/head";
import ContactMain from "@/components/contact/main";

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
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [displayedImages, setDisplayedImages] = useState([]);

  // Initialize with first 6 images
  useEffect(() => {
    setDisplayedImages(images.slice(0, 6));
  }, []);

  // Show all images after form submission
  useEffect(() => {
    if (formSubmitted) {
      setDisplayedImages(images);
    }
  }, [formSubmitted]);

  const handleImageClick = (index) => {
    console.log("Image clicked, index:", index);
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setSelectedImageIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    console.log("Next clicked, current index:", selectedImageIndex);
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      console.log("Next index:", newIndex);
      return newIndex;
    });
  };

  const handlePrevious = (e) => {
    e.stopPropagation();
    console.log("Previous clicked, current index:", selectedImageIndex);
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      console.log("Previous index:", newIndex);
      return newIndex;
    });
  };

  const handleViewMoreClick = () => {
    setShowContactPopup(true);
  };

  const handleContactFormSuccess = () => {
    setFormSubmitted(true);
    setShowContactPopup(false);
  };

  const handleCloseContactPopup = () => {
    setShowContactPopup(false);
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
        <link rel="canonical" href="https://www.pergolapro.co.nz/gallery/" />
        <meta name="title" content="Pergola Pro Gallery | Outdoor Living Inspiration in Tauranga"></meta>
        <meta name="description" content="Explore our gallery of pergolas, carports, and louvre roofs built across Tauranga and NZ. Get inspired for your next outdoor project."></meta>
      </Head>
      <Layout breadcrumbTitle="Projects">
        <section className="pt-30 pb-90">
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
              {displayedImages.map((image, index) => (
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

            {/* View More Button - Only show if form hasn't been submitted and we're not showing all images */}
            {!formSubmitted && displayedImages.length < images.length && (
              <div className="row justify-content-center mt-4">
                <div className="col-lg-12 text-center">
                  <button 
                    className="btn btn-primary"
                    onClick={handleViewMoreClick}
                    style={{
                      padding: "12px 30px",
                      fontSize: "16px",
                      fontWeight: "600"
                    }}
                  >
                    View More Projects
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImageIndex !== null && (
          <div
            className="custom-modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1050,
            }}
            onClick={handleCloseModal}
          >
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
                  zIndex: 1100,
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
                  zIndex: 1100,
                  background: "#fff",
                  border: "none",
                  padding: "10px",
                  cursor: "pointer",
                  opacity: 0.8,
                }}
                aria-label="Next Image"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Contact Form Popup */}
        {showContactPopup && (
          <div
            className="contact-popup-modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1060,
            }}
            onClick={handleCloseContactPopup}
          >
            <div
              className="contact-popup-content"
              style={{
                background: "#fff",
                padding: "30px",
                borderRadius: "10px",
                maxWidth: "600px",
                width: "90%",
                maxHeight: "90vh",
                overflowY: "auto",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseContactPopup}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#333",
                }}
                aria-label="Close popup"
              >
                &times;
              </button>
              
              {/* <h3 className="text-center mb-4">Get Access to Full Gallery</h3>
              <p className="text-center mb-4">
                Please fill out the form below to view our complete project gallery
              </p>
               */}
              {/* Modified ContactMain component for gallery page */}
              <ContactMain onSuccess={handleContactFormSuccess} />
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
        .contact-popup-content {
          animation: popupFadeIn 0.3s ease;
        }
        @keyframes popupFadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}

// Modified ContactMain component specifically for gallery page
const GalleryContactForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Gallery Access Request',
    message: 'I would like to view the full project gallery',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse(null);

    // Client-side validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setResponse({
        success: false,
        message: 'Please fill in all required fields',
        errors: []
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('/api/zap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.fullName}`,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      setResponse({
        success: data.success,
        message: data.message,
        errors: data.errors || []
      });

      if (data.success) {
        // Call success callback to close popup and show full gallery
        setTimeout(() => {
          onSuccess();
        }, 1500);
      }
    } catch (error) {
      setResponse({
        success: false,
        message: 'Network error. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="contact-form-wrap">
      {/* Response Messages */}
      {response && (
        <div className={`alert ${response.success ? 'alert-success' : 'alert-danger'} mb-4`}>
          {response.message}
          {response.errors && response.errors.length > 0 && (
            <ul className="mt-2 mb-0">
              {response.errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row">
          <div className="col-md-12">
            <div className="form-grp">
              <input
                id="fullName"
                type="text"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-grp">
              <input
                id="email"
                type="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input
                id="phone"
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <input
            id="subject"
            type="hidden"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="form-grp">
          <textarea
            id="message"
            placeholder="Your Message here*"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows="3"
          />
        </div>
        <button
          className="btn btn-primary w-100"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'View Full Gallery'}
        </button>
      </form>
    </div>
  );
};