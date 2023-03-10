import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return <li className={css.item}>
                <span className={css.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p>{name}</p>
            </li>
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}