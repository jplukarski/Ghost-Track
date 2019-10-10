import React from 'react'
import { Grid, Header, Card, Image } from 'semantic-ui-react'

const HomepageContent = () => (
    <Grid stackable container>
        {/* Title */}
        <Grid.Row>
            <Header as='h2'>
                Aye yo this my homepage
            </Header>
        </Grid.Row>

        {/* Top Row */}
        <Grid.Row>
            {/* Left Big PIcture */}
            <Grid.Column width={8} className={"bigboi"}>
                <Grid.Column>
                    <Card fluid>
                        <Image src='http://placeholder.pics/svg/450x300' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>This is my pretentious title</Card.Header>
                            <Card.Description>
                                Preview this article pls. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi, eius voluptate fugiat vero nostrum sed voluptatem velit, aliquid, facilis numquam laudantium possimus soluta error? Laudantium veniam tenetur iste consequuntur.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <span style={{ float: "left" }}>
                                By: Bill Murray
                        </span>
                            <span style={{ float: "right" }}>
                                May 27
                        </span>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Column>
            {/* Right Two Pictures */}
            {/* <Grid.Column width={8}> */}
            {/* <Grid.Row> */}
            <Grid.Column width={4}>
                {/* First Pic */}
                <Card fluid>
                    <Image src='http://placeholder.pics/svg/450x300' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>This is my pretentious title</Card.Header>
                        <Card.Description>
                            Preview this article pls. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Card.Description>
                    </Card.Content>

                    <Card.Content extra>
                        <span style={{ float: "left" }}>
                            By: Bill Murray
                            </span>
                        <span style={{ float: "right" }}>
                            May 27
                            </span>
                    </Card.Content>
                </Card>
            </Grid.Column>
            {/* </Grid.Row> */}
            {/* <Grid.Row> */}
            <Grid.Column width={4}>
                {/* Second Pic */}
                <Card fluid>
                    <Image src='http://placeholder.pics/svg/450x300' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>This is my pretentious title</Card.Header>
                        <Card.Description>
                            Preview this article pls
                                </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <span style={{ float: "left" }}>
                            By: Bill Murray
                            </span>
                        <span style={{ float: "right" }}>
                            May 27
                            </span>
                    </Card.Content>
                </Card>
            </Grid.Column>
            {/* </Grid.Row> */}
            <Grid.Row>
                <p>Nice</p>
            </Grid.Row>
            {/* </Grid.Column> */}


        </Grid.Row>
        {/* Bottom Row */}
        <Grid.Row>

            <Grid.Column width={4} stretched>
                <Card fluid>
                    <Image src='http://placeholder.pics/svg/450x300' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>This is my pretentious title</Card.Header>
                        <Card.Description>
                            Preview this article pls
                            </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <span style={{ float: "left" }}>
                            By: Bill Murray
                        </span>
                        <span style={{ float: "right" }}>
                            May 27
                        </span>
                    </Card.Content>
                </Card>
            </Grid.Column>

            <Grid.Column width={4} stretched>
                <Card fluid>
                    <Image src='http://placeholder.pics/svg/450x300' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>This is my pretentious title</Card.Header>
                        <Card.Description>
                            Preview this article pls
                            </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <span style={{ float: "left" }}>
                            By: Bill Murray
                        </span>
                        <span style={{ float: "right" }}>
                            May 27
                        </span>
                    </Card.Content>
                </Card>
            </Grid.Column>

            <Grid.Column width={4} stretched>
                <Card fluid>
                    <Image src='http://placeholder.pics/svg/450x300' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>This is my pretentious title</Card.Header>
                        <Card.Description>
                            Preview this article pls
                            </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <span style={{ float: "left" }}>
                            By: Bill Murray
                        </span>
                        <span style={{ float: "right" }}>
                            May 27
                        </span>
                    </Card.Content>
                </Card>
            </Grid.Column>

            <Grid.Column width={4} stretched>
                <Card fluid>
                    <Image src='http://placeholder.pics/svg/450x300' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>This is my pretentious title</Card.Header>
                        <Card.Description>
                            Preview this article pls
                            </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <span style={{ float: "left" }}>
                            By: Bill Murray
                        </span>
                        <span style={{ float: "right" }}>
                            May 27
                        </span>
                    </Card.Content>
                </Card>
            </Grid.Column>

        </Grid.Row>

    </Grid >
)

export default HomepageContent