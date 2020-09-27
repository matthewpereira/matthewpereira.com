import React  from 'react';
import styles from './SidebarButton.module.scss';

const SidebarButton = props => (
    <div className={styles.wrapper}>
        <a
            onClick={props.onClick}
            className={styles.sidebarButton}
            href={props.hyperlink}
            target={props.target}
            rel={props.target === "_blank" ? "noopener noreferrer" : null}
        >
            {props.label}
        </a>
    </div>
);

export default SidebarButton;