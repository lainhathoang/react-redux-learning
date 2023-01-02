import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleOnClick = () => {
    console.log("test");
  };

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          onClick={handleOnClick}
          className="mb-5"
        >
          <GoBell />
          Handsome
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          Another button
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hello mah fens
        </Button>
      </div>
      <Button primary rounded outline>
        Let's go Link Chou
      </Button>
    </div>
  );
}

export default ButtonPage;
