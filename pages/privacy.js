import Layout from "@/components/layout/Layout";
import Brand3 from "@/components/sections/Brand3";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Layout breadcrumbTitle="Terms and Conditions">
        <div>
          <section className="terms-area pt-120 pb-120">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="terms-content">
                    <h3 className="title">Privacy Policy</h3>
                    <p className="info-one">
                      Welcome to our website. By accessing or using our website, you agree to be bound by the following Terms and Conditions. Please read them carefully before using our services. If you do not agree with these terms, you should not use this website.
                    </p>

                    <div className="terms-section">
                      <h4 className="title">1. Acceptance of Terms</h4>
                      <p>
                        By accessing or using any part of this website, you agree to comply with these Terms and Conditions, as well as any applicable laws and regulations. We reserve the right to update or modify these terms at any time without prior notice. Changes will be effective upon posting to the website. Your continued use of the website constitutes acceptance of the updated terms.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h4 className="title">2. Use of the Website</h4>
                      <p>
                        You agree to use the website for lawful purposes only. You may not use the website in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other user's enjoyment of the website. Unauthorized attempts to access restricted areas, user accounts, or systems are strictly prohibited.
                      </p>
                      <ul className="list-wrap">
                        <li>Not engage in any activity that disrupts or interferes with the website.</li>
                        <li>Not attempt to gain unauthorized access to any portion of the website.</li>
                        <li>Not use automated scripts or bots to scrape content from the website.</li>
                      </ul>
                    </div>

                    <div className="terms-section">
                      <h4 className="title">3. Intellectual Property</h4>
                      <p>
                        All content on this website, including text, images, graphics, logos, and software, is the property of [Your Company Name] or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent from [Your Company Name].
                      </p>
                    </div>

                    <div className="terms-section">
                      <h4 className="title">4. Limitation of Liability</h4>
                      <p>
                        [Your Company Name] shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the website or inability to use the website. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if we have been advised of the possibility of such damages.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h4 className="title">5. Third-Party Links</h4>
                      <p>
                        Our website may contain links to third-party websites. These links are provided for your convenience, and we do not endorse or assume responsibility for the content, policies, or practices of any third-party websites. You access third-party websites at your own risk.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h4 className="title">6. Privacy Policy</h4>
                      <p>
                        Your use of this website is also governed by our Privacy Policy, which can be found at <Link href="/privacy-policy">Privacy Policy</Link>. Please review it to understand how we collect, use, and protect your personal information.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h4 className="title">7. Termination</h4>
                      <p>
                        We reserve the right to terminate or suspend your access to the website at our sole discretion, without notice, for any reason, including violation of these Terms and Conditions.
                      </p>
                    </div>

                    <div className="terms-section">
                      <h4 className="title">8. Governing Law</h4>
                      <p>
                        These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State, e.g., "Australia"]. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction, e.g., "Melbourne, VIC"].
                      </p>
                    </div>

                    <div className="terms-section">
                      <h4 className="title">9. Contact Information</h4>
                      <p>
                        If you have any questions or concerns about these Terms and Conditions, please contact us at:
                      </p>
                      <ul className="list-wrap team-info">
                        <li><span><i className="fas fa-envelope" /> Email:</span> support@[yourcompany].com</li>
                        <li><span><i className="fas fa-phone-alt" /> Phone:</span> +1-800-456-478-00</li>
                        <li><span><i className="fas fa-map-marker-alt" /> Address:</span> 380 St Kilda Road, Melbourne, VIC 3004, Australia</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* brand-area */}
          <Brand3 />
        </div>

        {/* Custom Styles */}
        <style jsx global>{`
          .terms-area {
            background: #f8f9fa;
          }
          .terms-content {
            background: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          .terms-content .title {
            font-size: 28px;
            margin-bottom: 20px;
            color: #333;
          }
          .terms-section {
            margin-bottom: 30px;
          }
          .terms-section .title {
            font-size: 22px;
            margin-bottom: 15px;
            color: #FE5D14;
          }
          .terms-section p {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
            margin-bottom: 15px;
          }
          .terms-section .list-wrap {
            list-style: none;
            padding: 0;
          }
          .terms-section .list-wrap li {
            font-size: 16px;
            color: #555;
            margin-bottom: 10px;
            position: relative;
            padding-left: 20px;
          }
          .terms-section .list-wrap li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #FE5D14;
            font-size: 20px;
          }
          .team-info li span {
            font-weight: bold;
            color: #333;
          }
          .team-info li i {
            margin-right: 8px;
            color: #FE5D14;
          }
        `}</style>
      </Layout>
    </>
  );
}
