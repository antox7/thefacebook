// import React from 'react';

// import PostIndexItem from './post_index_item';

// class PostIndex extends React.Component {

//     componentDidMount() {
//         return this.props.fetchPosts();
//     }
//     render() {

//         // debugger 

//         let myId = this.props.postOwner.id;
//         let myPosts = [];
//         let allPosts = this.props.posts;

//         for(let i = 0; i < allPosts.length; i++) {
//             if (allPosts[i].authorId === parseInt(myId)) {
//                 myPosts.push(allPosts[i]);
//             }
//         }

//         const posts = myPosts.slice(0).reverse().map((post) => {
//             return <PostIndexItem 
//                 post={post} 
//                 key={post.id} 
//                 postOwner={this.props.postOwner}
//                 currentUser = {this.props.currentUser}
//                 deletePost = {this.props.deletePost}
//                 closeModal = {this.props.closeModal}
//                 openModal = {this.props.openModal}
//                 />
//         })

//         return (
//             <div>
//                 <ul>
//                     {posts}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default PostIndex;