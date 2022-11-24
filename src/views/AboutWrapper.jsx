import AboutPage from '../components/AboutPage.jsx';
import SidebarButton from '../components/SidebarButton.jsx';

import styles from '../components/App.module.scss';

const AboutWrapper = (props) => (
    <div>
        <div className={styles.sidebar}>
            <SidebarButton
                hyperlink='mailto:mail@matthewpereira.com'
                label="EMAIL"
                target="_blank"
            />
            <SidebarButton
                onClick={props.handleAboutClick}
                label="PHOTOGRAPHY"
            />
        </div>
        <AboutPage
            handleClick={props.handleAboutClick}
            visible={props.aboutVisible}
        />
    </div>
)

export default AboutWrapper;