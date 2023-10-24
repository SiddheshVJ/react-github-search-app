import React from "react";



class GithubRepos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let { gitHubProfileRepos } = this.props
        return (
            <>
                <div className="card">
                    <div className="card-header text-center text-danger bg-dark">
                        <p className="h2">Your Repositories</p>
                    </div>
                    <div className="card-body text-info">
                        <ul className="list-group">
                            {
                                gitHubProfileRepos.map((repo) => {
                                    return (
                                        <>
                                            <li className=" list-group-item">
                                                <div className="d-flex justify-content-between">
                                                    <span className="h5 mx-5">
                                                        <a target="_blank" href={repo.html_url}>{repo.name}</a>
                                                    </span>
                                                    <span className=" badge badge-success">{repo.stargazers_count}Stars</span>
                                                    <span className="badge badge-warning">{repo.watchers_count}Watchers</span>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}



export default GithubRepos;