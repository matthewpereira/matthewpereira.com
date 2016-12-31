import React            from 'react';
import styles           from './index.scss';

const Email = (props) => {
    return (
        <div>
            <a
                className={styles.emailLink}
                href={ 'mailto:' + props.email }
                target="_blank"
                ></a>
        </div>
    )
}

export default Email;