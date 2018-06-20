import React from 'react';
import './App.css';
import ItemsContainer from './containers/ItemsContainer'
import { Grid, Segment } from 'semantic-ui-react'

const App = () => (
    <Grid columns={2}>
        <Grid.Column>
            <Segment basic><ItemsContainer /></Segment>
        </Grid.Column>
        <Grid.Column>
            <Segment basic>Lorem ipsum2 dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
        </Grid.Column>
    </Grid>
)

export default App
