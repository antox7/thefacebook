import React from 'react';

class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            content: "",
            photoFile: null,
            photoUrl: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);       
    }

    // Updates state with the file grabbed from user input
    handleFile(e) {
        // e.preventDefault();
        // this.setState({photoFile: e.currentTarget.files[0]})
        debugger

        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        
        // The readAsDataURL method is used to read the contents of the specified Blob or File.When the read operation is finished, the readyState becomes DONE, and the loadend is triggered.At that time, 
        // the result attribute contains the data as a data: URL representing the file's data as a base64 encoded string.

        if (file) {
            fileReader.readAsDataURL(file);
        }

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        
    }

    handleSubmit(e) {
        
        debugger
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('post[content]', this.state.content);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        // this.props.action(formData).then(() => this.clearForm());
        // formData.append('post[photo]', this.state.photoFile);
        // debugger
        return this.props.createPost(formData).then(() => this.clearForm());
    }

    handleChange() {
        return e => {
            this.setState({content: e.target.value});
        };
    }

    clearForm() {
        this.setState({ content: '' });
    }

    render() {
        console.log(this.state);
        return (
            <div className="create_post_container">
                <form onSubmit={this.handleSubmit}>
                <ul className="top_part">
                    <li>
                        <img src={window.createPostPen} alt="PEN"id="pen"/>
                        <span id="pen_text">
                            {/* <a href="#">
                                Create Post
                            </a>  */}
                            <input type="submit" value="Create Post" onClick={this.handleSubmit} /> 
                        </span> 
                    </li>
                    <li id="second">
                        <img src={window.camera} alt="Ph"/>
                        <span>
                            {/* <a href="#">
                            Photo/Video
                            </a> */}
                                <label htmlFor="file">Add Photo</label>
                                <input id="file" style={{visibility: "hidden"}} type="file" onChange={this.handleFile} /> 
                        </span> 
                            {/* <input
                                type='file'
                                name='photo-file'
                                id='photo-file'
                                className='photo-file'
                                onChange={this.handleFile}
                            />
                            <label className='photo-file-label' htmlFor='photo-file'>
                                <div className='post-photo-icon'>
                                    <img src={window.camera} />
                                </div>
                                Add Photo
                            </label> */}
                    </li>
                </ul>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <div className="create_post_area">
                        <img src={window.profile} alt="P" style={{ width: '60px', height: '60px' }}/>
                        <textarea onChange={this.handleChange()} value={this.state.content} placeholder="What's on your mind?"></textarea>
                    </div>
                    <input id="create_post_button" type="submit" value="Post"/>
                </form>
            </div>
        )
    }
}

export default CreatePost;