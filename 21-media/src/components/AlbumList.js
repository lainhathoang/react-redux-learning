import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
  // chi goi request 1 lan
  // nhung data nhan ve thay doi => component render lai nhieu lan
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  // useAddAlbumMuation => chi dung de get function tra ve
  // add args thi phai add vafo addAlbum()
  const [addAlbum, results] = useAddAlbumMutation();

  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => (
      <AlbumListItem key={album.id} album={album} />
    ));
  }

  return (
    <div>
      <div className="m-3 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Album for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          + Add album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
