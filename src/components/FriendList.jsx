import {FriendListItem} from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return <ul className="friend-list"> 
                {friends.map(({avatar, name, isOnline, id}) =>
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                    )}
            </ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};