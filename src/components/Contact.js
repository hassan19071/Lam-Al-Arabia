import React, { useState } from "react";
import "./style/contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // ✅ دالة تتبع التحويل من Google Ads
  const gtag_report_conversion = () => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-17057790080/zg6FCMCm8MkaEIDx5MU_",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // تحقق من الحقول المطلوبة
    if (!formData.name || !formData.email || !formData.subject) {
      setMessageStatus("Please fill in all required fields.");
      return;
    }

    const messageBody = `
      Full Name: ${formData.name}
      Email: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `;

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("subject", formData.subject);
    formDataToSubmit.append("message", messageBody);
    formDataToSubmit.append(
      "access_key",
      "79a76fc0-51dd-4c18-9f7b-62d6ca5a126e"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSubmit,
    });

    const data = await response.json();

    if (data.success) {
      setMessageStatus("Message sent successfully!");

      // ✅ استدعاء تتبع التحويل بعد نجاح الإرسال
      gtag_report_conversion();

      // ✅ إعادة تعيين الفورم
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setMessageStatus(
        "There was an error submitting the form. Please try again."
      );
    }
  };

  return (
    <div className="contact-us py-5">
      <div className="container px-lg-5 py-4">
        <div className="row">
          <div className="col-lg-6 pe-lg-5 order-lg-1 order-2">
            <div className="contact-form">
              <div className="head-section-title">
                <span className="over-title">Need Help?</span>
                <h2>
                  <span className="first-lines"></span>
                  <span className="title">Get in Touch</span>
                  <span className="last-lines"></span>
                </h2>
              </div>
              <form className="row g-3 mt-4" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Full Name<span>*</span>
                  </label>
                  <input
                    required
                    autoComplete="on"
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email<span>*</span>
                  </label>
                  <input
                    required
                    autoComplete="on"
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Subject<span>*</span>
                  </label>
                  <input
                    required
                    autoComplete="on"
                    type="text"
                    className="form-control"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={4}
                    autoComplete="on"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Send <i className="fa-regular fa-paper-plane"></i>
                  </button>
                </div>
              </form>
              {messageStatus && (
                <div className="message-status mt-3">
                  <p>{messageStatus}</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 mb-lg-0 mb-4">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3576.749814081661!2d50.21371948496805!3d26.302209383394285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDE4JzA4LjAiTiA1MMKwMTInNDEuNSJF!5e0!3m2!1sar!2ssa!4v1736687885340!5m2!1sar!2ssa"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="lam location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
