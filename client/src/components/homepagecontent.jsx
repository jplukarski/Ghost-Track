import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'

const HomepageContent = () => (
    <>
        <Header as='h2' textAlign='center'>
            Aye yo this my homepage
        </Header>
        <Grid columns={3} stackable>
            <Grid.Row>
                <Grid.Column width={8}>
                    <Image src='https://www.fillmurray.com/460/300' fluid />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://www.fillmurray.com/140/100' fluid />
                    <Image src='https://www.fillmurray.com/284/196' fluid />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Image src='https://www.placecage.com/g/140/100' fluid />
                    <Image src='https://www.placecage.com/140/100' fluid />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </>
)

export default HomepageContent