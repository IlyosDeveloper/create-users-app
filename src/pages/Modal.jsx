import { useState } from "react";
import { v4 as v4uuid } from "uuid";

function Modal({ setShowModal, setData, data }) {
  const id = v4uuid();
  const [url, setUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [from, setFrom] = useState("");
  const [job, setJob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
    setData([
      ...data,
      { id, url, firstName, lastName, age, from, job, gender },
    ]);
  };

  return (
    <div className='modal-wrapper'>
      <div onClick={() => setShowModal((prev) => !prev)} className='overlay'>
        <div onClick={() => setShowModal((prev) => !prev)} className='modal'>
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image URL:</span>
              <input
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
                type='url'
               
              />
            </label>
            <label>
              <span>First Name:</span>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type='text'
                required
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type='text'
                required
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type='number'
                required
              />
            </label>
            <label>
              <span>From:</span>
              <input
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
                type='text'
                required
              />
            </label>
            <label>
              <span>Job:</span>
              <input
                onChange={(e) => {
                  setJob(e.target.value);
                }}
                type='text'
                required
              />
            </label>
            <div className='gender'>
              <span>Gender:</span>
              <label>
                <small>Male</small>
                <input
                  onChange={(e) => {
                    setGender(e.target.id);
                  }}
                  type='radio'
                  required
                  name='gender'
                  id="male"
                />
              </label>
              <label>
                <small>Female</small>
                <input
                  onChange={(e) => {
                    setGender(e.target.id);
                  }}
                  type='radio'
                  required
                  name='gender'
                  id="female"
                />
              </label>
            </div>
            <button className='modal-btn'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
