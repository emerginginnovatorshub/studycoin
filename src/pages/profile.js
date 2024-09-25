import Navbar from '../components/Navbar';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <h1>Profile</h1>
      <div className="avatar">
        <img src="/avatar.png" alt="Avatar" />
        <span className="edit-icon">✏️</span>
      </div>
      <div className="tabs">
        <div className="tab">Account</div>
        <div className="tab">Funding</div>
        <div className="tab">Security</div>
      </div>
      {/* Settings content */}
    </div>
  );
};

export default Profile;