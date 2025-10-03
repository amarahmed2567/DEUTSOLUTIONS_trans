import React, { useState } from "react";
import styles from "./ContactUsPage.module.css";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import ContactImg from "../../assets/images/Contact-us.jpg"
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
const ContactUsPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // success | error | null
  const [showToast, setShowToast] = useState(false);
  // EmailJS config
  const serviceId = "service_4fr5tpb";
  const templateId = "template_mhbu6j6"; 
  const userId = "SNx23VDRNGpxUGpNW";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    emailjs.send(serviceId, templateId, formData, userId)
      .then((result) => {
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        setSubmitStatus('success');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      }, (error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      });
  };

  return (
    <>
       <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
      <div className={styles.contactContainer}>
        <div>
          <h1 className="minTeitle">{t("contact.title")}</h1>
          <p className="minSubtitle">{t("contact.subtitle")}</p>
        </div>
      <div className={styles.contactContentRow}>
        {/* Social Media Column */}
        {/* Contact Form Column */}
        <div className={styles.formColumn}>
              <h1 className={styles.formTitle}>{t("contact.form.title")}</h1>
              <p className={styles.formInfo}>{t("contact.form.subtitle")}</p>
          <form className={styles.contactFormModern} onSubmit={handleSubmit}>
            <input
              className={styles.formInput}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("contact.form.name")}
              required
            />
            <input
              className={styles.formInput}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("contact.form.email")}
              required
            />
            <input
              className={styles.formInput}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t("contact.form.phone")}
              required
            />
            <input
              className={styles.formInput}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder={t("contact.form.subject")}
              required
            />
            <textarea
              className={styles.formTextarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t("contact.form.message")}
              rows={4}
              required
            ></textarea>
            <button 
              className={styles.gradientBtn} 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
            </button>
          </form>
        </div>
        <div className={styles.aboutImageWrapper}>
      <div className={styles.topShape}></div>
      <div className={styles.aboutImage}>
        <img 
        className={styles.ContactImg}  src={ContactImg} alt="Contact with Deu Team" />
      </div>
      <div className={styles.bottomShape}></div>
      </div>
      </div>

      {/* Social  */}
      <div style={{
          display: 'flex',
          gap: '24px',
          padding:'2rem 0',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '32px 0'
        }}>
      <div style={{background:'#fff',borderRadius:16,padding:24,minWidth:220,boxShadow:'0 2px 10px rgba(0,0,0,0.07)',display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
  <FaMapMarkerAlt style={{fontSize:'2rem',color:'#e67700' }}/>
            <div style={{fontWeight:'bold'}}>{t("contact.info.addressTitle")}</div>
            <div>{t("contact.info.addressValue")}</div>
          </div>
          <div style={{background:'#fff',borderRadius:16,padding:24,minWidth:220,boxShadow:'0 2px 10px rgba(0,0,0,0.07)',display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
            <FaEnvelope style={{fontSize:'2rem',color:'#e67700'}}/>
            <div style={{fontWeight:'bold'}}>{t("contact.info.emailTitle")}</div>
            <div>{t("contact.info.emailValue")}</div>
          </div>
          <div style={{background:'#fff',borderRadius:16,padding:24,minWidth:220,boxShadow:'0 2px 10px rgba(0,0,0,0.07)',display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
            <FaPhone style={{fontSize:'2rem',color:'#e67700'}}/>
            <div style={{fontWeight:'bold'}}>{t("contact.info.phoneTitle")}</div>
            <div>{t("contact.info.phoneValue")}</div>
          </div>
        </div>

      {/* Map Section */}
      <div className={styles.mapSection}>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1783!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTUuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
          width="100%"
          height="340"
          style={{ border: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.07)',filter:" brightness(50%)"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DEUTSOLUTIONS Location"
        ></iframe>
      </div>
      {/* Toast Popup */}
      {showToast && (
        <div style={{
          position: 'fixed',
          left: '50%',
          bottom: 40,
          transform: 'translateX(-50%)',
          minWidth: 280,
          maxWidth: 400,
          background: submitStatus === 'success' ? '#27ae60' : '#e74c3c',
          color: '#fff',
          borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 24px',
          zIndex: 9999,
          fontWeight: 500,
          fontSize: 16,
          animation: 'toastIn 0.5s cubic-bezier(.68,-0.55,.27,1.55)',
        }}>
          {submitStatus === 'success' ? (
            <FaCheckCircle style={{fontSize: 24, flexShrink: 0}} />
          ) : (
            <FaTimesCircle style={{fontSize: 24, flexShrink: 0}} />
          )}
          <span>
            {submitStatus === 'success'
              ? t('contact.form.success')
              : t('contact.form.error')}
          </span>
        </div>
      )}
      <style>{`
      @keyframes toastIn {
        from { opacity: 0; transform: translateX(-50%) translateY(40px) scale(0.95); }
        to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
      }
      `}</style>
    </div>
    </motion.section>
    </>
  );
};

export default ContactUsPage;
