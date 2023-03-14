import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import styleSec from '../styleSection.module.css';

export const FriendList = ({friends}) => {
    return <section className={styleSec.section}>
              <div className={styleSec.container}>
                <ul className={css['friend-list']}> 
                  {friends.map(({avatar, name, isOnline, id}) =>
                      <FriendListItem
                          key={id}
                          avatar={avatar}
                          name={name}
                          isOnline={isOnline}
                      />
                      )}
                </ul>
              </div>
            </section>
            
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};