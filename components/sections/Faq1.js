import { useState } from 'react'

const faqs = [
  {
    question: "What types of pergolas do you offer in Tauranga and around NZ?",
    answer:
      "Aluminium, curved, and adjustable louvre roof systems, all custom built for your home and budget.",
  },
  {
    question: "Do you install carports and fencing as well as pergolas?",
    answer:
      "Yes. We design and install carports, decking, and fencing alongside pergolas, so your whole outdoor space is handled by one team, with everything designed to match.",
  },
  {
    question: "What's the difference between a louvre roof and a fixed pergola cover?",
    answer:
      "A louvre roof opens and closes with the weather. A fixed cover stays the same, if it’s rain or shine. Both are built for real New Zealand conditions.",
  },
  {
    question: "Do you offer pergola installation outside Tauranga?",
    answer:
      "Yes. We install across the wider Bay of Plenty, and we also select projects outside that area. Get in touch and we'll let you know straight away whether we can help with yours.",
  },
  {
    question: "How do I find a reliable pergola builder near me in Tauranga?",
    answer:
      "Look at their past work. Ask about the warranty. We're a Tauranga-based pergola installer, and we back every installation with a 10-year workmanship guarantee.",
  },
  {
    question: "Will my pergola be custom built to fit my space?",
    answer:
      "Every pergola we build is designed to fit your space. Nothing pre-made, nothing generic.",
  },
  {
    question: "What materials do you use?",
    answer:
      "Aluminium, chosen because it handles coastal weather without rusting, warping, or wearing out.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most jobs wrap up in a few days. We'll give you a clear timeframe before anything starts.",
  },
  {
    question: "What warranty comes with a Pergola Pro installation?",
    answer:
      "Ten years, workmanship guaranteed.",
  },
];

export default function Faq1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <section className="faq-area faq-bg" data-background="/assets/img/bg/faq_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-60">
                                <span className="sub-title">Our Faqs</span>
                                <h3 className="title">Have Any Questions  Answer?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
                            <div className="faq-img-wrap">
                                <img src="/assets/img/images/faq_img01.jpg" alt="Worker installing a roof or insulation panel against a bright sky" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/images/faq_img02.jpg" alt=" Worker on a roof with a harness, installing a wooden frame " className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="overlay-text wow fadeInUp" data-wow-delay=".6s">
                                    <h2 className="title">FAQ</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="faq-wrap">
                                <div className="accordion">
                                    {faqs.map((i,index)=>(

                                    <div key={index} className="accordion-item">
                                        <h2 className="accordion-header" onClick={() => handleToggle(index)}>
                                            <button className={isActive.key == index ? "accordion-button" : "accordion-button collapsed "}>
                                                {i.question}
                                            </button>
                                        </h2>
                                        <div className={isActive.key == index ? "accordion-collapse collapse  show" : "accordion-collapse collapse "}>
                                            <div className="accordion-body">
                                                <p>{i.answer}</p>
                                            </div>
                                        </div>
                                    </div>

                                    ))}
                                    
                                   

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
