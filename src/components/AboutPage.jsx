import React          from 'react';

import styles         from './AboutPage.module.scss';

const AboutPage = () => (
    <div className={styles.aboutContainer}>
        <div className={styles.aboutInner}>
            <div className={styles.headline}>
                Matthew Pereira
            </div>
            <div className={styles.subtitle}>
                Senior Product Designer, VMware Inc. Portfolio available by request.
	    </div>
	    <div className={styles.subtitle}>
	        <a className={styles.aboutLink} href="https://www.linkedin.com/in/matthewpereira/">Contact at Linkedin</a>
	    </div>
        </div>
    </div>
);

export default AboutPage;
