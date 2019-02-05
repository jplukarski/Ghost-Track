import React, { Component } from 'react'
import { Menu, Image, Icon, Container, Input, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <>
                <Menu inverted size='mini' borderless>
                    <Menu.Item className="social-media-icons">
                        <a href="https://www.facebook.com/GhostTrackMedia" target="_blank" rel='noopener noreferrer'>
                            <Button inverted color='blue' basic icon>
                                <Icon
                                    size='tiny'
                                    circular
                                    name="facebook f"
                                />
                            </Button>
                        </a>
                    </Menu.Item>
                    <Menu.Item className="social-media-icons">
                        <a href="https://www.instagram.com/ghosttrackmedia/" target='blank' rel='noopener noreferrer'>
                            <Button inverted color='purple' basic icon>
                                <Icon
                                    size='tiny'
                                    circular
                                    name="instagram"
                                />
                            </Button>
                        </a>
                    </Menu.Item>
                    <Menu.Item className="social-media-icons">
                        <a href='https://twitter.com/ghosttrackmedia' target='blank' rel='noopener noreferrer'>
                            <Button inverted color='teal' basic icon>
                                <Icon
                                    size='tiny'
                                    circular
                                    name="twitter"
                                />
                            </Button>
                        </a>
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item>

                            <Input size='large' icon='search' placeholder='Go on a Ghost Hunt...' inverted disabled />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Menu inverted size='massive' stackable borderless>
                    <Container>

                        <Link to={"/"}>
                            <Menu.Item className="gt-home-button-navbar">
                                <Image src="./assets/pics/logo.png" avatar></Image>
                                <p>
                                    <h1>Ghost Track</h1>
                                </p>
                            </Menu.Item>
                        </Link>
                        <Link to={'/news'}>
                            <Menu.Item
                                name='News'
                                active={activeItem === 'News'}
                                onClick={this.handleItemClick}>
                                News
                        </Menu.Item>
                        </Link>
                        <Link to={'/reviews'}>
                            <Menu.Item
                                name='Reviews'
                                active={activeItem === 'Reviews'}
                                onClick={this.handleItemClick}
                            >
                                Reviews
                        </Menu.Item>
                        </Link>
                        <Link to={'/features'}>
                            <Menu.Item
                                name='Features'
                                active={activeItem === 'Features'}
                                onClick={this.handleItemClick}
                            >
                                Features
                        </Menu.Item>
                        </Link>
                        <Link to={"/about"}>
                            <Menu.Item
                                name='About'
                                active={activeItem === 'About'}
                                onClick={this.handleItemClick}
                            >
                                About
                        </Menu.Item>
                        </Link>
                    </Container>
                </Menu>
            </>
        )
    }
}