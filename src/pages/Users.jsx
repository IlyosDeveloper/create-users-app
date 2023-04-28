import { BiUserPin } from "react-icons/bi";
import { FaBirthdayCake, FaFemale, FaMale } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { SiUpwork } from "react-icons/si";

function Users({ data, deleteItem }) {
  const defaultImg =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png";

  return (
    <main>
      <div className='no-users'>{data.length ? "" : "No users"}</div>
      <div className='userList'>
        <div className='userList-container container'>
          {data.length &&
            data.map((user) => {
              return (
                <div key={user.id} className='card'>
                  <div className='card-inner'>
                    <img
                      src={user.url ? user.url : defaultImg}
                      alt='user image'
                      width={150}
                      height={150}
                    />
                    <div className='icons'>
                      <BiUserPin />{" "}
                      <h3>
                        - {user.firstName} {user.lastName}
                      </h3>
                    </div>
                    <div className='icons'>
                      <FaBirthdayCake />
                      <p> - {user.age} years old</p>
                    </div>
                    <div className='icons'>
                      <GrMapLocation />
                      <p> - {user.from}</p>
                    </div>
                    <div className='icons'>
                      <SiUpwork />
                      <p> - {user.job}</p>
                    </div>
                    <div className='icons'>
                      <p>
                        {user.gender === "male" ? <FaMale /> : <FaFemale />}
                        - {user.gender}
                      </p>
                    </div>

                    <button onClick={() => deleteItem(user.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}

export default Users;
