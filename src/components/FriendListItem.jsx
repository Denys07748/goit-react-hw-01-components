import PropTypes from 'prop-types';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return <li className="item">
                <span className="status">{isOnline}</span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </li>
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}