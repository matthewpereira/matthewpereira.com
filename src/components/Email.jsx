import React  from 'react';
import styles from './Email.module.scss';

const Email = props => {
    return (
        <div>
            <a
                className={styles.emailLink}
                href={'mailto:' + props.email}
                target="_blank"
                rel="noopener noreferrer"
            > </a>
        </div>
    )
}

export default Email;