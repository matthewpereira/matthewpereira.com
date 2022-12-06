import { useEffect, useState } from "react";
import IMGUR_AUTHORIZATION from "../env";
import ThumbnailGallery from "./ThumbnailGallery";
import allowedAlbums from "../allowedAlbums";

// Because we have the default gallery in the index 0 spot
const stripFirstAlbum = (originalObject) =>
  Object.fromEntries(
    Object.entries(originalObject).slice(1, originalObject.length)
  );

const Albums = () => {
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
      .then((results) => Promise.all(results.map((r) => r.json())))
      .then((responses) =>
        responses
          .filter((response) => (response ? response : null))
          .map((response) => ({
            albumId: response.data.id,
            cover: response.data.cover,
            title: response.data.title,
          }))
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
