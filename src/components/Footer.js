import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Footer extends React.Component {
    render() {
        return (
            <footer className="jumbotron text-center">
                <p style={
                    { backgroundColor: 'grey', color: 'blue' }
                }> &copy; N.T.</p>
            </footer>
        );
    }
}
export default Footer;