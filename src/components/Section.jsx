import React  from 'react';
import styles from './Section.module.scss';

const Section = props => {
    const bottomCaptions = styles[props.captions] ? styles[props.captions] : '';
    const intro = props.type === 'intro' ? styles.intro : '';

    return (
        <div className={`${intro} ${styles.section} ${bottomCaptions}`}>
            {props.children}
        </div>
    )
};

export default Section;
