import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
  if (!isLoggedIn) {
    return <div>Giriş Yapılmadı...</div>
  }

  return (
    <>
      <h1>
        {`${name} ${surname} (${age})`}
      </h1>
      <br />
      {address.title} - {address.zip}
      {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

User.defaultProps = {
  isLoggedIn: false
}

export default User;
