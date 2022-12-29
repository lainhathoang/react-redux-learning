function ImageShow({ image }) {
  return (
    <img src={image.urls.small} alt={image.atl_description}  />
  );
}

export default ImageShow;
