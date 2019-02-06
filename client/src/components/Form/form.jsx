import React from 'react'
import { Segment, Container, Input, Form } from 'semantic-ui-react'
import PictureUploader from './pictureuploader'
import MainPic from './mainpic'



export default class MyForm extends React.Component {

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
                        <h1>

                            This is my fucking form.
                    </h1>
                        <hr></hr>
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
                        <MainPic getMainPhoto={this.getMainPhoto} />
                        <div>
                            Article Body:
                        <Form.TextArea
                                name="article_body"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <PictureUploader getPhotos={this.getPhotos} />
                        <div>
                            Video Link:
                        <Input
                                name="video_link"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            Podcast Link:
                        <Input
                                name="podcast_link"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            Song Link:
                        <Input
                                name="song_link"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            Category:
                        <Input
                                name="category"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            Subcategory:
                        <Input
                                name="subcategory"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            Date:
                        <Input
                                name="date"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div>
                            Tags:
                        <Input
                                name="tags"
                                onChange={this.handleInputChange}
                            />
                        </div>

                    </Container>
                </Segment>
            </Container>

        )
    }
}

