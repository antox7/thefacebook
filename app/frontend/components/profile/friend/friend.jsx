import React from 'react';
import FriendItem from './friend_item';

class Friend extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     debugger
    //     return this.props.fetchAllUsers();
    // }

    render() {

        // debugger

        // if(this.props.users.length === 1) {
        //     return null;
        // }

        // let allFriendships = [];
        
        // this.props.friendReceived.forEach( arr => {
        //     allFriendships.push(
        //         <div>
        //             <span>
        //                 <img src={arr[0].profilePhotoUrl} alt="Photo"/>
        //             </span>
        //             <span>
        //                 status: {arr[1]}
        //             </span>
        //         </div>
        //     )
        // })

        const allFriendships = this.props.friendReceived.map((arr, idx) => {
            // [ [user, status] ]
            debugger
            return <FriendItem key={idx}
                user = {arr[0] ? arr[0] : null}
                // url = {arr[0] ? arr[0].profilePhotoUrl : null}
                status={arr[1]}
                />
        })
        // okay closing windows..
        
        debugger
// my cpu is lagging
//  - Mr. Robert Ku ladies and gentlemen
        return (
            <div id="friendship_tab" style={{width: '300px', height: '300px', display: 'none'}}>
                <div className="friendship_tab_text">
                    <span>
                        Friend Requests
                    </span> 
                    {/* TODO: Find Friends */}
                </div>
                {allFriendships}
                <div>
                    People You Know Know
                </div>
                <div>
                    {/* TODO: Add other users */}
                </div>
            </div>
        )
    }
}

export default Friend;