import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderList = images.map((image) => (
   <ImageShow key={image.id} image={image} />
  ));

  return <div className="image-list">{renderList}</div>
}

export default ImageList;
