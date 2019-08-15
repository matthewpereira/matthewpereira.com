import React  from 'react';
import styles from './Section.module.scss';

const Section = props => (
    <div className={`${styles[props.type]} ${styles.section} ${styles[props.captions]}`}>
        {props.children}
    </div>
);

export default Section;
