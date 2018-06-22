import styles from './index.scss';
import React from 'react';

const Index = ({title, description}) => {
    const cssClasses = styles.intro + ' ' + styles.section;
    return (
        <div className={cssClasses}>
            <div className={styles.headline}>
                {title}
            </div>
            <div className={styles.subtitle}>
                {description}
            </div>
        </div>
    );
};

export default Index;
