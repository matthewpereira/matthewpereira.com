import styles from './index.scss';
import React from 'react';

const Index = ({ title, description }) => (
    <div className={`${styles.intro} ${styles.section}`}>
        <div className={styles.headline}>
            {title}
        </div>
        <div className={styles.subtitle}>
            {description}
        </div>
    </div>
);

export default Index;
