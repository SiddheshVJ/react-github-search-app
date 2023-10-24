import React from "react";



class GithubProfileDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let { gitHubProfile } = this.props
        return (
            <>
                <div className="card">
                    <div className="card-header bg-dark">
                        <span className="badge badge-success  mx-2">{gitHubProfile.followers}Followers</span>
                        <span className="badge badge-warning  mx-2">{gitHubProfile.repos}Repos</span>
                        <span className="badge badge-secondary  mx-2">{gitHubProfile.gists}Gists</span>
                        <span className="badge badge-danger  mx-2">{gitHubProfile.following}Following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Name : <span className="">{gitHubProfile.name}</span>
                            </li>
                            <li className="list-group-item">
                                Location : <span className="">{gitHubProfile.location}</span>
                            </li>
                            <li className="list-group-item">
                                Email : <span className="">{gitHubProfile.email}</span>
                            </li>
                            <li className="list-group-item">
                                Company : <span className="">{gitHubProfile.company}</span>
                            </li>
                            <li className="list-group-item">
                                twitter_username : <span className="">{gitHubProfile.twitter_username}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}



export default GithubProfileDetails;