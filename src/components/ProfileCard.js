import React from "react";



class ProfileCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let { gitHubProfile } = this.props
        return (
            <>
                <div className="card">
                    <img src={gitHubProfile.avatar_url} alt="img" className="card-img-top img-fluid" />
                    <div className="card-body">
                        <p className="h4">{gitHubProfile.name}</p>
                        <small>{gitHubProfile.bio}</small>
                        <a href={gitHubProfile.html_url} target="_blank" className="btn btn-success btn-sm">Profile</a>
                    </div>
                </div>
            </>
        )
    }
}



export default ProfileCard;