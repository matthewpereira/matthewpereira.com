import allowedAlbums from "../allowedAlbums";

const validateAlbum = albumId => Object.values(allowedAlbums).indexOf(albumId) > -1;

export default validateAlbum;