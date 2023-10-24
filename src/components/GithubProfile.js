import React from "react";
import ProfileCard from "./ProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";



class GithubProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-md-3">
                        <ProfileCard gitHubProfile={this.props.gitHubProfile} />
                    </div>
                    <div className="col-md-9">
                        <GithubProfileDetails gitHubProfile={this.props.gitHubProfile} />
                    </div>
                </div>
            </>
        )
    }
}



export default GithubProfile;