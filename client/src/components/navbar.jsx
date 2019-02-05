import React, { Component } from 'react'
import { Menu, Image, Icon, Container } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <>
                <Menu inverted size='mini' borderless>
                    <Menu.Item>
                        <Icon
                            name="facebook f"
                            size="large"
                            circular
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Icon
                            name="instagram"
                            size="large"
                            circular
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Icon
                            name="twitter"
                            size="large"
                            circular
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Icon
                            name="google"
                            size="large"
                            circular
                        />
                    </Menu.Item>
                </Menu>
                <Menu inverted size='massive' stackable borderless>
                    <Container>

                        <Menu.Item>
                            <Image src="./assets/pics/logo.png" avatar></Image>
                            <p>

                                <h1>Ghost Track</h1>
                            </p>
                        </Menu.Item>
                        <Menu.Item
                            name='News'
                            active={activeItem === 'News'}
                            onClick={this.handleItemClick} />
                        <Menu.Item
                            name='Reviews'
                            active={activeItem === 'Reviews'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Features'
                            active={activeItem === 'Features'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='About'
                            active={activeItem === 'About'}
                            onClick={this.handleItemClick}
                        />
                    </Container>
                </Menu>
            </>
        )
    }
}