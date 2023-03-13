import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return <li className={css.item}>
                <span className="status" style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </li>
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}