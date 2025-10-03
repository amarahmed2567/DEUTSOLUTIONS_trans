import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './SubscriptionPopup.module.css';
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';

const SubscriptionPopup = ({ isOpen, type, message, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const isSuccess = type === 'success';
  const Icon = isSuccess ? FaCheckCircle : FaTimesCircle;
  const iconClass = isSuccess ? styles.successIcon : styles.errorIcon;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className={styles.content}>
          <Icon className={iconClass} />
          <h3 className={styles.title}>
            {isSuccess ? t('footer.subscribeSuccess') : t('footer.subscribeError')}
          </h3>
          <p className={styles.message}>
            {message || (isSuccess ? t('footer.subscribeSuccessMessage') : t('footer.subscribeErrorMessage'))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPopup; 