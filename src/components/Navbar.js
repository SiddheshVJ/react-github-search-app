import React from "react";



class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    // "https://api.github.com/users/SiddheshVJ"
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm bg-dark">
                    <a href="/" className="navbar-brand text-white"><h3>Github Profile Search</h3> </a>
                </nav>
            </>
        )
    }
}



export default Navbar;