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
                    <Menu.Item>
                        <Button inverted color='blue' basic icon>
                            <Icon
                                circular
                                name="facebook f"
                            />
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button inverted color='purple' basic icon>
                            <Icon
                                circular
                                name="instagram"
                            />
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button inverted color='teal' basic icon>
                            <Icon
                                circular
                                name="twitter"
                            />
                        </Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button inverted color='red' basic icon>
                            <Icon
                                circular
                                name="google"
                            />
                        </Button>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>

                            <Input size='large' icon='search' placeholder='Go on a Ghost Hunt...' inverted disabled />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Menu inverted size='massive' stackable borderless>
                    <Container>

                        <Menu.Item>
                            <Link to={"/"}>
                                <Image src="./assets/pics/logo.png" avatar></Image>
                            </Link>
                            <Link to={"/"}>
                                <p>
                                    <h1>Ghost Track</h1>
                                </p>
                            </Link>
                        </Menu.Item>
                        <Menu.Item
                            name='News'
                            active={activeItem === 'News'}
                            onClick={this.handleItemClick}>
                            <Link
                                to={'/news'}

                            >News</Link>
                        </Menu.Item>
                        <Menu.Item
                            name='Reviews'
                            active={activeItem === 'Reviews'}
                            onClick={this.handleItemClick}
                        >
                            <Link to={'/reviews'}>
                                Reviews
                        </Link>
                        </Menu.Item>
                        <Menu.Item
                            name='Features'
                            active={activeItem === 'Features'}
                            onClick={this.handleItemClick}
                        >
                            <Link to={'/features'}>
                                Features
                        </Link>
                        </Menu.Item>
                        <Menu.Item
                            name='About'
                            active={activeItem === 'About'}
                            onClick={this.handleItemClick}
                        >
                            <Link to={"/about"}>
                                About
                            </Link>
                        </Menu.Item>
                    </Container>
                </Menu>
            </>
        )
    }
}