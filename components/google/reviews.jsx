// components/GoogleReviews.jsx
import { useState, useEffect, useRef } from 'react';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  // Mock data - Replace this with actual Google Places API data
  const mockReviews = [
    {
      id: 1,
      author_name: "John Smith",
      rating: 5,
      text: "Absolutely fantastic service! The pergola looks amazing and the team was professional throughout the entire process. Highly recommend PergolaPro!",
      time: "2024-01-15T10:30:00Z",
      profile_photo_url: "/assets/img/reviews/user1.jpg"
    },
    {
      id: 2,
      author_name: "Sarah Johnson",
      rating: 5,
      text: "From consultation to completion, the experience was seamless. The quality of workmanship is outstanding. Our new outdoor space is perfect!",
      time: "2024-01-10T14:22:00Z",
      profile_photo_url: "/assets/img/reviews/user2.jpg"
    },
    {
      id: 3,
      author_name: "Mike Thompson",
      rating: 4,
      text: "Great work done on our pergola. The team was punctual and cleaned up perfectly after themselves. Would definitely use them again.",
      time: "2024-01-08T09:15:00Z",
      profile_photo_url: "/assets/img/reviews/user3.jpg"
    },
    {
      id: 4,
      author_name: "Lisa Brown",
      rating: 5,
      text: "Exceptional quality and attention to detail. The pergola has transformed our backyard into a beautiful entertainment area.",
      time: "2024-01-05T16:45:00Z",
      profile_photo_url: "/assets/img/reviews/user4.jpg"
    },
    {
      id: 5,
      author_name: "David Wilson",
      rating: 5,
      text: "Professional, reliable, and high-quality work. The communication was excellent and the project was completed on time.",
      time: "2024-01-03T11:20:00Z",
      profile_photo_url: "/assets/img/reviews/user5.jpg"
    },
    {
      id: 6,
      author_name: "Emma Davis",
      rating: 4,
      text: "Very happy with the result. The team worked efficiently and the pergola looks exactly as we envisioned.",
      time: "2023-12-28T13:10:00Z",
      profile_photo_url: "/assets/img/reviews/user6.jpg"
    }
  ];

  useEffect(() => {
    // Simulate API fetch
    const fetchReviews = async () => {
      try {
        setTimeout(() => {
          setReviews(mockReviews);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="d-flex">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`fas fa-star ${i < rating ? 'text-warning' : 'text-light'}`}
          ></i>
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-NZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="reviews-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h1 fw-bold text-dark mb-3">Google Reviews</h2>
            <p className="lead text-muted">What our customers say about us</p>
          </div>
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2 text-muted">Loading reviews...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="reviews-section py-5 bg-light">
        <div className="container">
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="reviews-section py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          {/* <h2 className="h1 fw-bold text-dark mb-3">Google Reviews</h2> */}
          <h3 className="h3 text-muted">What our customers say about us</h3>
          
          {/* Average Rating */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
            <div className="d-flex align-items-center">
              {renderStars(5)}
              <span className="h4 fw-bold text-dark ms-2 mb-0">5.0</span>
            </div>
            <span className="text-muted">•</span>
            <span className="text-muted">{reviews.length} reviews</span>
          </div>
        </div>

        {/* Reviews Container with Navigation */}
        <div className="position-relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y z-3 rounded-circle shadow-lg p-3 d-none d-lg-block"
            aria-label="Scroll left"
          >
            <i className="fas fa-chevron-left text-dark"></i>
          </button>

          <button
            onClick={scrollRight}
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y z-3 rounded-circle shadow-lg p-3 d-none d-lg-block"
            aria-label="Scroll right"
          >
            <i className="fas fa-chevron-right text-dark"></i>
          </button>

          {/* Reviews Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="d-flex overflow-auto gap-4 py-3 px-2 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 col-12 col-md-6 col-lg-4 col-xl-3"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
                  <div className="card-body d-flex flex-column p-4">
                    {/* Header */}
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0">
                        <div 
                          className="rounded-circle bg-gradient-primary d-flex align-items-center justify-content-center text-white fw-bold"
                          style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                        >
                          {review.author_name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="card-title fw-bold mb-1">{review.author_name}</h5>
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          {renderStars(review.rating)}
                          <small className="text-muted">{formatDate(review.time)}</small>
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="flex-grow-1 mb-3">
                      <p className="card-text text-muted line-clamp-4" style={{ 
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {review.text}
                      </p>
                    </div>

                    {/* Google Badge */}
                    <div className="mt-auto pt-3 border-top border-light">
                      <div className="d-flex align-items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <small className="text-muted">Google Review</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Reviews Link */}
        {/* <div className="text-center mt-4">
          <a
            href="https://search.google.com/local/reviews?placeid=YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-link text-primary text-decoration-none fw-semibold" >
            View all reviews on Google
            <i className="fas fa-external-link-alt ms-2"></i>
          </a>
        </div> */}
      </div>

      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-auto::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-auto {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
      `}</style>
    </section>
  );
};

export default GoogleReviews;