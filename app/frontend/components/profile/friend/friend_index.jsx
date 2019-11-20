import React from 'react';
import {Link} from 'react-router-dom';

class FriendIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let friends;

        let profileOwnerFriends = this.props.friends;
        
        if (this.props.onlyNine) {
            profileOwnerFriends = profileOwnerFriends.slice(0, this.props.onlyNine);
        }

        if (profileOwnerFriends.length !== 0) {
            friends  = profileOwnerFriends.map((friend, idx) => {
                // debugger
                return (
                    <div className="single_friend_section" key={idx}>
                        <div>
                            <Link to={`/users/${friend.id}`}>
                                <img src={friend.profilePhotoUrl} alt=""/>
                            </Link>
                        </div>
                        <Link to={`/users/${friend.id}`}>
                            <span>{friend.first_name + " " + friend.last_name}</span>
                        </Link>
                    </div>
                )
            })
        }

        return (
            <div className="all_friends">
                <div className="friends_text">
                    <Link to={`/users/${this.props.profileOwner.id}/friends`}>Friends</Link>
                </div>
                <div>
                    {friends}
                </div>
            </div>
        )
    }
}

export default FriendIndex;