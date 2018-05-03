import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Tabs, Tab } from 'react-mdl'
import teas from '../teaData';
import { well, row, Col } from 'react-mdl';
import { Grid, Cell, div } from 'react-mdl';
import ZinModal from './modal';

class Teas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      modalIsOpen: false

    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  componentDidMount() {
    console.log(teas);
  }

  render() {
    return(
      <Grid className="projects-grid">
        {
          teas.map(tea => (
            <Card key={tea.id} shadow={50} style={{width: '400px', height: '450px', margin: 'auto', top: '133px', body: 'raised'}}>
              <CardTitle expand style={{color: '#fff', background: 'url(' + tea.image + ') bottom right 100% no-repeat #46B6AC', backgroundSize: 'cover'}}>{tea.name}</CardTitle>
              <CardText>
                {tea.description}
              </CardText>
              <CardActions border>
                  <Button raised onClick={this.openModal}>Buy It</Button>
              </CardActions>
              <ZinModal modalIsOpen={this.state.modalIsOpen}
              closeModal={this.closeModal}/>
            </Card>
          ))
        }

    </Grid>
    )
  }
}


export default Teas;
