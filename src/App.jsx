import { useState } from "react";

import Navbar from "./components/Navbar";
import Modal from "./pages/Modal";
import Users from "./pages/Users";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);

  function deleteItem(id) {
    const filter = data.filter((user) => {
      return user.id !== id;
    });
    setData(filter);
  }

  return (
    <div
      className='App'
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setShowModal(false);
        }
      }}>
      <Navbar data={data} />
      <Users data={data} deleteItem={deleteItem} />;
      {showModal && (
        <Modal setShowModal={setShowModal} data={data} setData={setData} />
      )}
      <button
        onClick={() => {
          setShowModal((prev) => !prev);
        }}
        className='create-user'>
        Create User
      </button>
    </div>
  );
}

export default App;
