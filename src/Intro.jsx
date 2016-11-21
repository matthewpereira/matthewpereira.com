import styles from './index.scss';
import React from 'react';

const Index = () => {
    const cssClasses = styles.intro + ' ' + styles.section;
    return (
        <div className={cssClasses}>
            <div className={styles.headline} data-aos="fade-in-long">
                Matthew Pereira
            </div>
            <div className={styles.subtitle} data-aos="fade-in-long">
                Toronto
            </div>
        </div>
    );
};

export default Index;
