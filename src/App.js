import React from 'react'
import './App.css'
import ItemsContainer from './containers/ItemsContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import { Grid, Segment } from 'semantic-ui-react'

const App = () => (
  <Grid columns={2}>
    <Grid.Column style={{width: '30%'}}>
      <Segment><ItemsContainer/></Segment>
    </Grid.Column>
    <Grid.Column style={{width: '70%'}}>
      <Segment basic><ItemDetailContainer/></Segment>
    </Grid.Column>
  </Grid>
)

export default App
