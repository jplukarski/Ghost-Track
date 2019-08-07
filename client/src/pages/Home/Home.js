import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import HomepageContent from "../../components/homepagecontent"

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomepageContent />
                <Footer />
            </div>
        );
    }
}

export default Home;