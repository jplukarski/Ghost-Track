import React, { Component } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"


class News extends Component {
    render() {
        return (
            <div>
                <Navbar />
                Aye yo this my news page
                <Footer />
            </div>
        );
    }
}

export default News;