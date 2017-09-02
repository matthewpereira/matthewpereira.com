import styles from './index.scss';
import React from 'react';

const Index = ({title, description}) => {
    const cssClasses = styles.intro + ' ' + styles.section;
    return (
        <div className={cssClasses}>
            <div className={styles.headline} data-aos="fade-in-long">
                {title}
            </div>
            <div className={styles.subtitle} data-aos="fade-in-long">
                {description}
            </div>
        </div>
    );
};

export default Index;
