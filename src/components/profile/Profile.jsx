import css from './Profile.module.css';
import styleSec from '../styleSection.module.css';
import PropTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
    return <section className={styleSec.section}>
                <div className={styleSec.container}>
                    <div className={css.description}>
                        <img
                        src={avatar}
                        alt={username}
                        className={css.avatar}
                        />
                        <p className={css.name}>{username}</p>
                        <p className={css.tag}>@{tag}</p>
                        <p className="location">{location}</p>
                    </div>

                    <ul className={css.stats}>
                        <li>
                        <span className={css.label}>Followers</span>
                        <span className="quantity">{followers}</span>
                        </li>
                        <li>
                        <span className={css.label}>Views</span>
                        <span className="quantity">{views}</span>
                        </li>
                        <li>
                        <span className={css.label}>Likes</span>
                        <span className="quantity">{likes}</span>
                        </li>
                    </ul>
                </div>
            </section>
    
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}