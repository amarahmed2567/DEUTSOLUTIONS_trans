import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './ServicesPage.module.css';

// React Icons
import { 
  MdTranslate, 
  MdAirplaneTicket, 
  MdBusiness,
  MdSecurity,
  MdSpeed,
  MdVerified,
  MdSupport,
  MdCheckCircle,
  MdArrowForward
} from 'react-icons/md';
import { 
  FaRobot, 
  FaBookOpen, 
  FaGlobe,
  FaUsers,
  FaStar
} from 'react-icons/fa';

// Images
import migrationImg from '../../assets/images/migration.jpg';
import translationImg from '../../assets/images/Trans.jpg';
import germanImg from '../../assets/images/DeutschKurs.jpg';

const ServicesPage = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      id: 'translation',
      title: t('services.items.translation.title'),
      image: translationImg,
      description: t('services.items.translation.description'),
      longDescription: t('services.items.translation.longDescription'),
      features: [
        'Certified & Sworn Translations',
        'Legal Document Translation',
        'Technical Translation',
        'Business Document Translation',
        'Academic Translation',
        'Medical Translation'
      ],
      benefits: [
        'Accepted by German authorities',
        'Fast turnaround times',
        'Competitive pricing',
        'Cultural accuracy'
      ],
      color: '#0070f3'
    },
    {
      id: 'migration',
      title: t('services.items.migration.title'),
      image: migrationImg,
      description: t('services.items.migration.description'),
      longDescription: t('services.items.migration.longDescription'),
      features: [
        'Visa Application Support',
        'Family Reunification',
        'Document Preparation',
        'Legal Consultation',
        'Settlement Assistance',
        'Work Permit Guidance'
      ],
      benefits: [
        'Expert legal advice',
        'Step-by-step guidance',
        'Stress-free process',
        'High success rate'
      ],
      color: '#e67700'
    },
    {
      id: 'german',
      title: t('services.items.german.title'),
      image: germanImg,
      description: t('services.items.german.description'),
      longDescription: t('services.items.german.longDescription'),
      features: [
        'All Levels (A1-C2)',
        'Business German',
        'Academic German',
        'Conversational Practice',
        'Cultural Understanding',
        'Exam Preparation'
      ],
      benefits: [
        'Experienced instructors',
        'Interactive learning',
        'Flexible schedules',
        'Practical focus'
      ],
      color: '#009e60'
    }
  ];

  const additionalServices = [
    {
      icon: <FaRobot className={styles.additionalIcon} />,
      title: 'AI Solutions',
      description: 'Custom AI development for automation and intelligence',
      color: '#8b5cf6'
    },
    {
      icon: <MdBusiness className={styles.additionalIcon} />,
      title: 'Corporate Services',
      description: 'Enterprise-level translation and consulting',
      color: '#06b6d4'
    },
    {
      icon: <MdSecurity className={styles.additionalIcon} />,
      title: 'Legal Support',
      description: 'Legal document review and compliance',
      color: '#ef4444'
    },
    {
      icon: <MdSupport className={styles.additionalIcon} />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for urgent needs',
      color: '#f59e0b'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '5000+', label: 'Translations', icon: <MdTranslate /> },
    { number: '50+', label: 'Countries', icon: <FaGlobe /> },
    { number: '99%', label: 'Success Rate', icon: <FaStar /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
    // initial={{ opacity: 0, y: 60 }}
    // whileInView={{ opacity: 1, y: 0 }}
    // viewport={{ once: true, amount: 0.3 }}
    // transition={{ duration: 0.7, ease: "easeOut" }}
  >
      {/* Hero Section */}
             <div>
                    <h1 className="minTeitle">{t('services.title')}</h1>
                    <p className="minSubtitle">{t('services.subtitle')}</p>
             </div>

      {/* Main Services Grid */}
      <section className={styles.mainServicesSection}>
        <motion.div 
          className={styles.servicesGrid}
          variants={containerVariants}
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${styles.serviceCard} ${activeService === index ? styles.active : ''}`}
              variants={itemVariants}
              onMouseEnter={() => setActiveService(index)}
              style={{ '--service-color': service.color }}
            >
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.title} />
                <div className={styles.serviceOverlay}>
                </div>
              </div>
              
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <div className={styles.serviceFeatures}>
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>
                        <MdCheckCircle className={styles.checkIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.serviceBenefits}>
                  <h4>Benefits:</h4>
                  <div className={styles.benefitsGrid}>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className={styles.benefitItem}>
                        <FaStar className={styles.starIcon} />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.serviceActions}>
                  <Link 
                    to={`/contact-us?service=${service.id}`}
                    className={styles.primaryButton}
                  >
                    Get Started
                    <MdArrowForward className={styles.buttonIcon} />
                  </Link>
                  <button className={styles.secondaryButton}>
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Additional Services */}
      <section className={styles.additionalServicesSection}>
        <motion.div 
          className={styles.sectionHeader}
          variants={itemVariants}
        >
          <h2 className={styles.sectionTitle}>Additional Services</h2>
          <p className={styles.sectionSubtitle}>
            Comprehensive solutions for all your needs
          </p>
        </motion.div>

        <motion.div 
          className={styles.additionalGrid}
          variants={containerVariants}
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              className={styles.additionalCard}
              variants={itemVariants}
              style={{ '--service-color': service.color }}
            >
              <div className={styles.additionalIconContainer}>
                {service.icon}
              </div>
              <h3 className={styles.additionalTitle}>{service.title}</h3>
              <p className={styles.additionalDescription}>{service.description}</p>
              <Link to="/contact-us" className={styles.additionalButton}>
                Learn More
                <MdArrowForward className={styles.buttonIcon} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section
      <section className={styles.processSection}>
        <motion.div 
          className={styles.sectionHeader}
          variants={itemVariants}
        >
          <h2 className={styles.sectionTitle}>How We Work</h2>
          <p className={styles.sectionSubtitle}>
            Simple, transparent, and efficient process
          </p>
        </motion.div>

        <motion.div 
          className={styles.processSteps}
          variants={containerVariants}
        >
          {[
            { 
              step: '01', 
              title: 'Consultation', 
              description: 'Free initial consultation to understand your needs',
              icon: <MdSupport />
            },
            { 
              step: '02', 
              title: 'Planning', 
              description: 'Customized plan and timeline for your project',
              icon: <MdSpeed />
            },
            { 
              step: '03', 
              title: 'Execution', 
              description: 'Professional service delivery with regular updates',
              icon: <MdVerified />
            },
            { 
              step: '04', 
              title: 'Delivery', 
              description: 'Final delivery with quality assurance and support',
              icon: <MdCheckCircle />
            }
          ].map((process, index) => (
            <motion.div
              key={index}
              className={styles.processStep}
              variants={itemVariants}
            >
              <div className={styles.stepNumber}>{process.step}</div>
              <div className={styles.stepIcon}>{process.icon}</div>
              <h3 className={styles.stepTitle}>{process.title}</h3>
              <p className={styles.stepDescription}>{process.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section> */}


    </motion.section>
  );
};

export default ServicesPage;
