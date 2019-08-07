import React from 'react';
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'
import { Link } from "react-router-dom";


const Footer = () => (
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
        <Container textAlign='center'>
            <Grid divided inverted stackable>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Videos' />
                    <List link inverted>
                        <List.Item as='a'>Kitchen Jams</List.Item>
                        <List.Item as='a'>Nice to Meet You</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Podcasts' />
                    <List link inverted>
                        <List.Item as='a'>Not That Off the Record, This Off the Record</List.Item>
                        <List.Item as='a'>Ghost Track Podcast</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Header inverted as='h4' content='Issues' />
                    <List link inverted>
                        <List.Item as='a'>Issue #1</List.Item>
                        <List.Item as='a'>Issues #2</List.Item>
                    </List>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Header inverted as='h4' content='Ghost Track' />
                    <p>
                        Capturing the spirit of the DIY music and art scenes of Chicago, Champaign-Urbana, and more.
                    </p>
                </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Link to={"/"}>
                <Image centered size='mini' src='./assets/pics/logo.png' />
            </Link>
            <List horizontal inverted divided link size='small'>
                <List.Item as='a' href='#'>
                    Site Map
                </List.Item>
                <List.Item as='a' href='#'>
                    Contact Us
                </List.Item>
                <List.Item as='a' href='#'>
                    Terms and Conditions
                </List.Item>
                <List.Item as='a' href='#'>
                    Privacy Policy
                </List.Item>
            </List>
        </Container>
    </Segment>
)

export default Footer