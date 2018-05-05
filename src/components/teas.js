import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Tabs, Tab } from 'react-mdl';
import { getTeas } from '../api';
import { well, row, Col } from 'react-mdl';
import { Grid, Cell, div } from 'react-mdl';
import ZinModal from './modal';
import checkout from './checkout'



class Teas extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0,
    teas: []
     };
  }



  componentDidMount() {
    getTeas ()
    .then (teas => this.setState ({teas}))
    .catch (console.log)
  }

  render() {
    return(
      <Grid className="projects-grid">
        {
          this.state.teas.map(tea => (
            <Card key={tea.id} shadow={50} style={{width: '400px', height: '450px', margin: 'auto', top: '133px', body: 'raised'}}>
              <CardTitle expand style={{color: '#fff', background: 'url(' + tea.image + ') bottom right 100% no-repeat #46B6AC', backgroundSize: 'cover'}}>{tea.name}</CardTitle>
              <CardText>
                {tea.description}
              </CardText>
              <CardActions border>
              <Button raised>
                  Buy It</Button>
              </CardActions>
              <ZinModal/>
            </Card>
          ))
        }

    </Grid>
    )
  }
}

// path='checkout' component={checkout}
//     // <Button raised>

export default Teas;
