import React   from 'react';
import Section from './Section.jsx';

import styles  from './Intro.module.scss';

const Index = ({ title, description }) => (
    <Section type="intro">
        <div className={styles.headline}>
            {title}
        </div>
        <div className={styles.subtitle}>
            {description}
        </div>
    </Section>
);

export default Index;
