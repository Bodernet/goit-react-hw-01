import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profcard}>
      <div className={css.profdata}>
        <img
          className={css.profimg}
          src={avatar}
          alt="User avatar"
          width="250"
        />
        <p className={css.profusername}>{username}</p>
        <p className={css.proftag}>@{tag}</p>
        <p className={css.proflocation}>{location}</p>
      </div>

      <ul className={css.proflist}>
        <li className={css.profitem}>
          <span className={css.proftitle}>Followers</span>
          <span className={css.profdigit}>{stats.followers}</span>
        </li>
        <li className={css.profitem}>
          <span className={css.proftitle}>Views</span>
          <span className={css.profdigit}>{stats.views}</span>
        </li>
        <li className={css.profitem}>
          <span className={css.proftitle}>Likes</span>
          <span className={css.profdigit}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
