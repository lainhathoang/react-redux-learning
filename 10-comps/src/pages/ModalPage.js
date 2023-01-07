import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      Accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>This is the children</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique
        velit a tellus eleifend molestie. Maecenas tincidunt, nibh semper
        vulputate euismod, quam dui euismod magna, ut eleifend turpis orci non
        purus. Integer dolor mi, ornare nec nisi eget, dapibus malesuada tortor.
        Etiam fermentum nibh non faucibus dignissim. Donec posuere eleifend diam
        id egestas. Nunc et finibus magna. In non tempor tellus. Mauris lacinia,
        nulla bibendum porta tincidunt, tortor justo efficitur neque, vel
        pharetra tellus massa sit amet orci. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus.
      </p>
    </div>
  );
}

export default ModalPage;
