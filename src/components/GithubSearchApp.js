import React from "react";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET_KEY, PROFILE_URL } from "./GithubCredentials";



class GithubSearchApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            githubUserName: '',
            githubProfile: {},
            githubRepos: [],
            errMsg: ''
        }
    }

    githubUserName = (e) => {
        this.setState({
            ...this.state,
            githubUserName: e.target.value
        })

    }

    submitSearch = (e) => {
        e.preventDefault()


        this.searchProfile(this.state.githubUserName)
        this.searchRepos(this.state.githubUserName)
    }

    searchProfile = (githubUserName) => {
        let url = PROFILE_URL + githubUserName + `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_KEY}`

        axios.get(url)
            .then((response) => {
                this.setState({
                    ...this.state,
                    githubProfile: response.data
                })
            })
            .catch((err) => {
                this.setState({
                    ...this.state,
                    errMsg: err
                })
            })
    }

    searchRepos = (githubUserName) => {

        let url = PROFILE_URL + `${githubUserName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET_KEY}`

        axios.get(url)
            .then((response) => {
                this.setState({
                    ...this.state,
                    githubRepos: response.data
                })
            })
            .catch((err) => {
                this.setState({
                    ...this.state,
                    errMsg: err
                })
            })
    }

    render() {
        return (
            <>
                <div className="container mt-3">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <p className="h4">Github Profile Search App</p>
                                </div>
                                <div className="card-body bg-light">
                                    <form onSubmit={this.submitSearch} className="form-inline">
                                        <div className="form-group">
                                            <input value={this.state.githubUserName}
                                                onChange={this.githubUserName} size="45" className="form-control" type="text" name="" placeholder="Search profile here..." id="" />
                                        </div>
                                        <div >
                                            <input type="submit" className="btn btn-sm btn-dark-green" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="row mt-3">
                    <div className="col">
                        {
                            Object.keys(this.state.githubProfile).length > 0 ?
                                <>
                                    <GithubProfile gitHubProfile={this.state.githubProfile} />
                                </> : null
                        }
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {
                            this.state.githubRepos.length > 0 ?
                                <>
                                    <GithubRepos gitHubProfileRepos={this.state.githubRepos} />
                                </> : null
                        }
                    </div>
                </div>
                </div>

            </>
        )
    }
}
export default GithubSearchApp;