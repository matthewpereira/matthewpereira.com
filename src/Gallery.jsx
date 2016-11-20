import styles   from './index.scss';
import React    from 'react';
import $        from 'jquery';
import LazyLoad from 'react-lazyload';

export default class Gallery extends React.Component {
	render() {
        let images = [
            {
                // Cat on ferry
                src: 'http://i.imgur.com/a0S1YMk.jpg',
                title: 'Ferry',
                subtitle: '08, 2016',
                info: false
            },
            {
                // Jacob Felix Allen
                src: 'http://i.imgur.com/goV0hXu.jpg',
                title: 'Jacob Felix Allen',
                subtitle: '09, 2016',
                info: false
            },
            {
                // Helmut
                src: 'http://i.imgur.com/HfKHaA2.jpg',
                title: 'Helmut',
                subtitle: '06, 2015',
                info: false
            },
            {
                // fireworks
                src: 'http://i.imgur.com/8YgZALu.jpg',
                title: 'City Hall',
                subtitle: '07, 2015'
            },
            {
                src: 'http://i.imgur.com/HrQZyuB.jpg',
                title: 'Lemon',
                subtitle: '04, 2016',
                info: false
            },
            {
                // Toby
                src: 'http://i.imgur.com/hN2zZse.jpg',
                title: 'Toby',
                subtitle: '06, 2015'
            },
            {
                // Toronto Island
                src: 'http://i.imgur.com/N7VTSRS.jpg',
                title: 'Centre Island Pier',
                subtitle: '06, 2016',
                info: false
            },
            {
                src: 'http://i.imgur.com/GxMvm5u.jpg',
                title: 'A Tribe Called Red',
                subtitle: '07, 2015'
            },
            {
                src: 'http://i.imgur.com/NXBn1bo.jpg',
                title: 'Hanlan\'s Point',
                subtitle: '09, 2015',
                info: false
            }
        ]

        let windowHeight = $('body').innerHeight();

        return (
            <div className={styles.gallery}>
                {images.map(function(image, index){
                    return (
                        <div
                            className={styles.section}
                            key={'gallery' + index}
                            >
                            <div className={styles.sidebar}>
                                <div
                                    className={styles.headline}
                                    data-aos="slide-up"
                                    data-aos-offset="200"
                                    >{image.title}</div>
                                <div
                                    className={styles.subtitle}
                                    data-aos="slide-up"
                                    data-aos-offset="200"
                                    >{image.subtitle}</div>
                                <div
                                    className={styles.moreInfo}
                                    data-aos="slide-up"
                                    data-aos-offset="200"
                                    >{image.info}</div>
                            </div>
                            <LazyLoad height={200} offset={300}>
                                <img
                                    src={image.src}
                                    data-aos="fade-in"
                                    className={styles.image + ' ' + index}
                                    ></img>
                            </LazyLoad>
                        </div>
                        )
                  })}
            </div>
        )
    }
}

/* return (
    <div className={styles.section}>
        <div className={styles.gallery}>
            <div className={styles.sidebar}>
                <div className={styles.headline}>Title Headline</div>
                <div className={styles.subtitle}>Subtitle</div>
                <div className={styles.moreInfo}>More Info</div>
            </div>
            <img src="{src}" className={styles.image}></img>
        </div>
    </div>
)*/
