// components/GoogleReviews.jsx
import { useRef } from 'react';

// Static review data at module level — rendered by SSR immediately, no JS needed
const nReview = [
    {
      "id": "Ci9DQUlRQUNvZENodHljRjlvT21adVZWVmFXamRzU0U5cGVreDBTblJ0VDFoNVQxRRAB",
      "reviewer": {
        "name": "Arnie Tablac",
        "profile_url": "https://www.google.com/maps/contrib/109974828884286342128/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a/ACg8ocIdDvc6QCbZ1uvIAU2Eon7zCJF6_nKk_G6SnsUjv4GNy31nXw=s72-c-rp-mo-br100",
        "review_count": 3,
        "photo_count": 0,
        "is_local_guide": false
      },
      "rating": 5,
      "date": "8 weeks ago",
      "content": "Excellent work, we love the outcome. Thank you Pergola Pro!",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "Ci9DQUlRQUNvZENodHljRjlvT2twUlJqTkxYMHhYTVc4eVlraDJaV1pMTnpSRFZtYxAB",
      "reviewer": {
        "name": "George Walter Rajan",
        "profile_url": "https://www.google.com/maps/contrib/112995021354676533394/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a/ACg8ocLe_d-6VmT9xLMhmHUitcCnilORkZ9qQUyTs0oaryaCUoveGg=s72-c-rp-mo-br100",
        "review_count": 2,
        "photo_count": 0,
        "is_local_guide": false
      },
      "rating": 5,
      "date": "8 weeks ago",
      "content": "Pergola Pro - the team was professional, friendly and skilled. They arrived on time and communicated clearly from the start to finish. Sturdy construction and a perfect fit for my outdoor space. I will recommend for quality work and a smooth installation process.",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "ChdDSUhNMG9nS0VPSFA3LVRreWVMRWxnRRAB",
      "reviewer": {
        "name": "Hiraina Melbourne",
        "profile_url": "https://www.google.com/maps/contrib/116669171810318983483/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a-/ALV-UjVBYWyuZGqcKQcqblmvYgUWgozF2Jb3s5QO_fcXAPdKXJ1Q2rXU=s72-c-rp-mo-br100",
        "review_count": 3,
        "photo_count": 1,
        "is_local_guide": false
      },
      "rating": 4,
      "date": "20 weeks ago",
      "content": "Finished our pergola in 2 days and then returned upon our request to fix a minor adjustment the very next day. Although initially skeptical, they certainly proved their worth, I would be happy to recommend them!!",
      "has_photos": true,
      "photos": [
        {
          "url": "https://lh3.googleusercontent.com/geougc-cs/AB3l90ANLf1-1yycdrtPlHKgUPM0LZC6iCa316DMkwCiUVCOGFiDT2YFWdACOaMHlWPTVknTBlO52xmd0swVn2Nz5z1oGkuAAApc7di4GfI6FR2tGkMij-0tXR3lBp7TFEVSqrbhOGw=s1440-w1440-h634-rw-k-p",
          "viewer_url": "/local/place/fid/0x0%3A0xe123af5abe057811/photoviewer?pcp=%5B%5B%5B%5B10%2C%22CIHM0ogKEOnd3KGXyuWNCw%22%5D%2C%22https%3A%2F%2Flh3.googleusercontent.com%2Fgeougc-cs%2FAB3l90ANLf1-1yycdrtPlHKgUPM0LZC6iCa316DMkwCiUVCOGFiDT2YFWdACOaMHlWPTVknTBlO52xmd0swVn2Nz5z1oGkuAAApc7di4GfI6FR2tGkMij-0tXR3lBp7TFEVSqrbhOGw%22%2C3%5D%5D%2C0%2C%5B%5B10%2C%22CIHM0ogKEOnd3KGXyuWNCw%22%5D%2C%22https%3A%2F%2Flh3.googleusercontent.com%2Fgeougc-cs%2FAB3l90ANLf1-1yycdrtPlHKgUPM0LZC6iCa316DMkwCiUVCOGFiDT2YFWdACOaMHlWPTVknTBlO52xmd0swVn2Nz5z1oGkuAAApc7di4GfI6FR2tGkMij-0tXR3lBp7TFEVSqrbhOGw%22%2C3%5D%5D"
        }
      ]
    },
    {
      "id": "ChZDSUhNMG9nS0VJQ0FnTUNvNzdTUFZ3EAE",
      "reviewer": {
        "name": "Kris Chand",
        "profile_url": "https://www.google.com/maps/contrib/100722192918856680407/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a/ACg8ocLQwB_iPepjLi3zgV7KUapjT_UPuTYq85IkjapxgajlFOan5A=s72-c-rp-mo-br100",
        "review_count": 1,
        "photo_count": 0,
        "is_local_guide": false
      },
      "rating": 5,
      "date": "24 weeks ago",
      "content": "Very very punctual and easy to deal with also delivery of the finish product on time as discussed during the first meet up during the free quote and with very good and affordable price range.",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "ChdDSUhNMG9nS0VJQ0FnTURROWJTdGp3RRAB",
      "reviewer": {
        "name": "Ben Hancock",
        "profile_url": "https://www.google.com/maps/contrib/108836616863940944506/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a-/ALV-UjWieKw655L6dzjfRJDI_wagJWiRng0oFJdLLdkj2z-4aYSwbxTD=s72-c-rp-mo-br100",
        "review_count": 4,
        "photo_count": 6,
        "is_local_guide": false
      },
      "rating": 4,
      "date": "30 weeks ago",
      "content": "We recently had a pergola installed at our home by the team at Pergola Pro, and we couldn't be happier with the result! From start to finish, they were great to deal with—great communication, easy process, and a team that genuinely knows what they're doing.\n\nThe installers were fantastic, making the whole experience seamless. They were efficient, and left everything tidy once the job was done. The quality of workmanship is good, and the pergola has transformed our outdoor space into a more usable space.\n\nThe project was excellent value for money. Given the level of service, attention to detail, and final product, we wouldn't hesitate to recommend Pergola Pro to anyone looking to upgrade their outdoor area.\n\nA big thank you to the team for making the process so smooth—we're looking forward to enjoying our new pergola for years to come!",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "ChZDSUhNMG9nS0VJQ0FnTURneC1qVFBBEAE",
      "reviewer": {
        "name": "Kevin Pious",
        "profile_url": "https://www.google.com/maps/contrib/110404556894153615417/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a-/ALV-UjVaspFckNAMv1e0PyzAB9AY22qIIpzSJ9pd4qohmIRHpQxDZwiHCQ=s72-c-rp-mo-ba3-br100",
        "review_count": 12,
        "photo_count": 23,
        "is_local_guide": true
      },
      "rating": 5,
      "date": "31 weeks ago",
      "content": "Fantastic experience with Pergola Pro! The team was professional, knowledgeable, and detail-oriented, and our new pergola looks amazing. They helped us design the perfect pergola that complements our outdoor space beautifully. Our outdoor space has been completely transformed, and we couldn't be happier! Highly recommend them for quality and service!",
      "has_photos": true,
      "photos": [
        {
          "url": "https://lh3.googleusercontent.com/geougc-cs/AB3l90AuFLPoIgcA8P44uDmoodRxjIln7l_B_ttN26JIJnVdnmIFdWy-sHiOdBiUjaB3ham7zbLYcdYU34BTh5TqoHnS2ZT0PhSn7SM_7Fx7bEMybabslKY4oPTTdOSo4iL3DHzLKSDK-g=s1440-w1440-h634-rw-k-p",
          "viewer_url": "/local/place/fid/0x0%3A0xe123af5abe057811/photoviewer?pcp=%5B%5B%5B%5B10%2C%22CIHM0ogKEICAgMDgx-jT_AE%22%5D%2C%22https%3A%2F%2Flh3.googleusercontent.com%2Fgeougc-cs%2FAB3l90AuFLPoIgcA8P44uDmoodRxjIln7l_B_ttN26JIJnVdnmIFdWy-sHiOdBiUjaB3ham7zbLYcdYU34BTh5TqoHnS2ZT0PhSn7SM_7Fx7bEMybabslKY4oPTTdOSo4iL3DHzLKSDK-g%22%2C3%5D%5D%2C0%2C%5B%5B10%2C%22CIHM0ogKEICAgMDgx-jT_AE%22%5D%2C%22https%3A%2F%2Flh3.googleusercontent.com%2Fgeougc-cs%2FAB3l90AuFLPoIgcA8P44uDmoodRxjIln7l_B_ttN26JIJnVdnmIFdWy-sHiOdBiUjaB3ham7zbLYcdYU34BTh5TqoHnS2ZT0PhSn7SM_7Fx7bEMybabslKY4oPTTdOSo4iL3DHzLKSDK-g%22%2C3%5D%5D"
        }
      ]
    },
    {
      "id": "ChdDSUhNMG9nS0VJQ0FnTURnODdMMzd3RRAB",
      "reviewer": {
        "name": "Sibin Sam",
        "profile_url": "https://www.google.com/maps/contrib/116798081458851985582/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a-/ALV-UjXdFL4XtiH1jZVtsp3hYDjYpGnfuDbcYnCZNr_Nf0JyunEK8P8=s72-c-rp-mo-ba2-br100",
        "review_count": 10,
        "photo_count": 6,
        "is_local_guide": true
      },
      "rating": 5,
      "date": "32 weeks ago",
      "content": "From the initial consultation to the final installation, the entire process was smooth and stress-free. The team communicated clearly, worked efficiently, and delivered exactly what we wanted. The pergola looks stunning and has added so much value to our home. If you need a pergola these guys are the best in BOP. Thank you, PergolaPro!",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "ChdDSUhNMG9nS0VJQ0FnTURncy02Yzh3RRAB",
      "reviewer": {
        "name": "Honey's Creations",
        "profile_url": "https://www.google.com/maps/contrib/116248974645076447082/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a-/ALV-UjVWNZ9BF3fobCA-iqj5YeRyOGuRqI-FnDEADBf9F9EzVo6hn1wO=s72-c-rp-mo-br100",
        "review_count": 5,
        "photo_count": 5,
        "is_local_guide": false
      },
      "rating": 5,
      "date": "32 weeks ago",
      "content": "We are very happy with our pergola work . It is strong, well-built, and looks great. The materials are high quality, and the finishing is neat. It provides good shade while keeping an open feel. Overall, we are very satisfied and highly recommend this work.",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "ChdDSUhNMG9nS0VJQ0FnTURnczRxdTVBRRAB",
      "reviewer": {
        "name": "Aadhi Bose",
        "profile_url": "https://www.google.com/maps/contrib/116683925462841003399/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a/ACg8ocLe2d1O7eARgmjuR7KdaZBpODvqQxOFG054fAvNv5lOp-b1mQ=s72-c-rp-mo-br100",
        "review_count": 1,
        "photo_count": 0,
        "is_local_guide": false
      },
      "rating": 5,
      "date": "32 weeks ago",
      "content": "Love their work. Very professional",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "ChZDSUhNMG9nS0VJQ0FnTURnMDUtY1RnEAE",
      "reviewer": {
        "name": "Sandeep Ambattu",
        "profile_url": "https://www.google.com/maps/contrib/114363933028250653252/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a/ACg8ocKUq1QRJd8Gl_L8mlPBbwbxj5IdC9jqNIoyBCzKz2BhQleZ_A=s72-c-rp-mo-br100",
        "review_count": 5,
        "photo_count": 0,
        "is_local_guide": false
      },
      "rating": 5,
      "date": "32 weeks ago",
      "content": "Excellent work completed on time! Your professionalism and good customer service did not go unnoticed. Keep up the fantastic work!",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "ChdDSUhNMG9nS0VJQ0FnSURYc043bTh3RRAB",
      "reviewer": {
        "name": "GOBIKA BABU",
        "profile_url": "https://www.google.com/maps/contrib/100537770196278765383/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a/ACg8ocKWsIHHggJoTIMxrj6A2OyAjzHsASVA_6-rdEI7K5-uzxYD1w=s72-c-rp-mo-br100",
        "review_count": 6,
        "photo_count": 0,
        "is_local_guide": false
      },
      "rating": 5,
      "date": "50 weeks ago",
      "content": "Excellent service by pergola pro. Our canopy looks amazing",
      "has_photos": false,
      "photos": []
    },
    {
      "id": "ChdDSUhNMG9nS0VJQ0FnSUNIejlpanFBRRAB",
      "reviewer": {
        "name": "bijo mathew",
        "profile_url": "https://www.google.com/maps/contrib/114815909911670338858/reviews?hl=en-GB",
        "avatar": "https://lh3.googleusercontent.com/a-/ALV-UjV5ACvHB_NZyEMyywPRq6my6PwN762QYmxltojlzGl5X7-EJqFm=s72-c-rp-mo-br100",
        "review_count": 2,
        "photo_count": 0,
        "is_local_guide": false
      },
      "rating": 5,
      "date": "10 Sept 2024",
      "content": "Outstanding customer service and satisfied with their service. 10/10 recommended",
      "has_photos": false,
      "photos": []
    }
];

const GoogleReviews = () => {
  const scrollContainerRef = useRef(null);

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
            <span className="text-muted">{nReview.length} reviews</span>
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
            }} >
            {nReview.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 col-12 col-md-6 col-lg-4 col-xl-3"
                style={{ scrollSnapAlign: 'start' }} >
                <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
                  <div className="card-body d-flex flex-column p-4">
                    {/* Header */}
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0">
                        <img
                          src={review.reviewer.avatar}
                          alt={review.reviewer.name}
                          className="rounded-circle"
                          style={{ width: '50px', height: '50px', objectFit: 'cover', }}
                        />
                        {/* <div
                          className="rounded-circle bg-gradient-primary d-flex align-items-center justify-content-center text-white fw-bold"
                          style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'none'
                          }} >
                          {review.reviewer.name.charAt(0)}
                        </div> */}
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="card-title fw-bold mb-1" style={{fontSize: "16px"}}>{review.reviewer.name}</h5>
                        <div className="d-flex align-items-center flex-wrap gap-2">
                          {/* Star Rating */}
                          <div className="d-flex align-items-center">
                            {[...Array(5)].map((_, index) => (
                              <svg
                                key={index}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={index < review.rating ? "#FFD700" : "#E4E5E9"}
                                className="me-1" >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                            <span className="text-muted ms-1">({review.rating}.0)</span>
                          </div>
                          <small className="text-muted">{review.date}</small>
                        </div>
                        {/* Reviewer Stats */}
                        {/* <div className="d-flex align-items-center gap-2 mt-1">
                          {review.reviewer.is_local_guide && (
                            <span className="badge bg-warning text-dark" style={{ fontSize: '0.65rem' }}>
                              Local Guide
                            </span>
                          )}
                          <small className="text-muted">
                            {review.reviewer.review_count} review{review.reviewer.review_count !== 1 ? 's' : ''}
                            {review.reviewer.photo_count > 0 && ` • ${review.reviewer.photo_count} photo${review.reviewer.photo_count !== 1 ? 's' : ''}`}
                          </small>
                        </div> */}
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="flex-grow-1 mb-3">
                      <p
                        className="card-text text-muted"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          lineHeight: '1.5'
                        }}
                      >
                        {review.content}
                      </p>
                    </div>

                    {/* Photos if available */}
                    {/* {review.has_photos && review.photos.length > 0 && (
                      <div className="mb-3">
                        <div className="d-flex gap-2">
                          {review.photos.slice(0, 3).map((photo, index) => (
                            <div key={index} className="position-relative">
                              <img
                                src={photo.url}
                                alt={`Review photo ${index + 1}`}
                                className="rounded"
                                style={{
                                  width: '60px',
                                  height: '60px',
                                  objectFit: 'cover',
                                  cursor: 'pointer'
                                }}
                                onClick={() => window.open(photo.viewer_url, '_blank')}
                              />
                              {index === 2 && review.photos.length > 3 && (
                                <div
                                  className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 rounded d-flex align-items-center justify-content-center text-white"
                                  style={{ fontSize: '0.8rem' }}
                                >
                                  +{review.photos.length - 3}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )} */}

                    {/* Google Badge */}
                    {/* <div className="mt-auto pt-3 border-top border-light">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                          <svg width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                          </svg>
                          <small className="text-muted">Google Review</small>
                        </div>

                       
                      </div>
                    </div> */}
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