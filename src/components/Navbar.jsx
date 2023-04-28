function Navbar({ data }) {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <h1 className='navbar-logo'>CUser</h1>
        <h3 className='navbar-counter'>
          {data.length ? `You have ${data.length}` : "No users :("}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
