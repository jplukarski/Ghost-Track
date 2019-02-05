import React from 'react'
import { Segment, Container, Input } from 'semantic-ui-react'
import PictureUploader from './pictureuploader'
import MainPic from './mainpic'



export default class Form extends React.Component {

    state = {
        title: '',
        author: '',
        main_picture: '',
        article_body: '',
        additional_pics: [],
        video_link: '',
        podcast_link: '',
        song_link: '',
        category: '',
        subcategory: [],
        date: '',
        tags: [],
    }

    getPhotos = additional_pics => {
        console.log("This is getting done");
        this.setState({ additional_pics });
    };

    getMainPhoto = main_picture => {
        this.setState({ main_picture });
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Container >
                <Segment raised padded='very'>
                    <Container textAlign='center'>
                        This is my fucking form.
                        <div>
                            Title:
                        <Input
                                name="title"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            Author:
                        <Input
                                name="author"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <MainPic getPhotos={this.getMainPhoto} />
                        <PictureUploader getPhotos={this.getPhotos} />

                    </Container>
                </Segment>
            </Container>

        )
    }
}

