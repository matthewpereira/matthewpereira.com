import { useEffect, useState } from "react";

import IMGUR_AUTHORIZATION from "../env";
import allowedAlbums from "../allowedAlbums";

import styles from "./Albums.module.scss";
import LazyLoad from "react-lazyload";

const ThumbnailGallery = ({ albumCovers }) => {
  const thumbnailSize = window.innerWidth > 320 ? "l" : "m";

  return (
    <div className={styles.albumList}>
      {albumCovers.map(({ albumId, cover, title }, iterator) => (
        <div className={styles.album} key={iterator}>
          <a className={styles.album_link} href={`/?${albumId}`}>
            <div className={styles.album_imageContainer}>
              <LazyLoad offset={3000}>
                <img
                  className={styles.album_image}
                  src={`https://i.imgur.com/${cover}${thumbnailSize}.jpg`}
                  alt={title}
                />
              </LazyLoad>
            </div>
            <div className={styles.album_title}>{title}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

// Because we have the default gallery in the index 0 spot
const stripFirstAlbum = (originalObject) =>
  Object.fromEntries(
    Object.entries(originalObject).slice(1, originalObject.length)
  );

const Albums = ({ albumList }) => {
  document.getElementById("app").classList.remove("app__loading");
  const [albumCovers, setAlbumCovers] = useState([]);

  useEffect(() => {
    getAlbumCovers(stripFirstAlbum(allowedAlbums));
  }, []);

  const getAlbumCovers = async (allowedAlbums) => {
    // Make a GET request to the Imgur API's Album endpoint for each album ID
    await Promise.all(
      Object.values(allowedAlbums).map((album) => {
        return fetch(`https://api.imgur.com/3/album/${album}`, {
          headers: {
            Authorization: `Client-ID ${IMGUR_AUTHORIZATION.clientId}`,
          },
        });
      })
    )
      .then((results) => {
        Promise.all(console.log(results));

        return Promise.all(results.map((r) => r.json()));
      })
      .then((responses) =>
        responses
          .filter((response) => {
            return response ? response : null;
          })
          .map((response) => {
            console.log(response);

            return {
              albumId: response.data.id,
              cover: response.data.cover,
              title: response.data.title,
            };
          })
      )
      .then((results) => setAlbumCovers(results))
      .catch((error) => {
        if (typeof error.json === "function") {
          error
            .json()
            .then((jsonError) => {
              console.log("Json error from API");
              console.log(jsonError);
            })
            .catch((genericError) => {
              console.log("Generic error from API");
              console.log(error.statusText);
            });
        } else {
          console.log("Fetch error");
          console.log(error);
        }
      });
  };

  return (
    <div>
      <ThumbnailGallery albumCovers={albumCovers} />
    </div>
  );
};
export default Albums;
