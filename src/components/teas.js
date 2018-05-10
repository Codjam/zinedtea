import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Tabs, Tab } from 'react-mdl';
import { getTeas } from '../api';
import { well, row, Col } from 'react-mdl';
import { Grid, Cell, div } from 'react-mdl';
import ZinModal from './modal';
<<<<<<< HEAD
import { Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';
=======
import checkout from './checkout'

>>>>>>> f708b1fc7db6361f1a20543828c1716f3cfe5ccc


class Teas extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      activeTab: 0,
      modalIsOpen: false

    };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
   this.setState({
     openDialog: true
   });
 }

 handleCloseDialog() {
   this.setState({
     openDialog: false
   });
 }
=======
    this.state = { activeTab: 0,
    teas: []
     };
  }


>>>>>>> f708b1fc7db6361f1a20543828c1716f3cfe5ccc

  componentDidMount() {
    getTeas ()
    .then (teas => this.setState ({teas}))
    .catch (console.log)
  }

  render() {
    return(
      <div>
      <Grid className="projects-grid">
        {
          this.state.teas.map(tea => (
            <Card key={tea.id} shadow={50} style={{width: '400px', height: '450px', margin: 'auto', top: '133px', body: 'raised'}}>
              <CardTitle expand style={{color: '#fff', background: 'url(' + tea.image + ') bottom right 100% no-repeat #46B6AC', backgroundSize: 'cover'}}>{tea.name}</CardTitle>
              <CardText>
                {tea.description}
              </CardText>
              <CardActions border>
<<<<<<< HEAD
                <Button colored onClick={this.handleOpenDialog} raised ripple>Buy</Button>
=======
              <Button raised>
                  Buy It</Button>
>>>>>>> f708b1fc7db6361f1a20543828c1716f3cfe5ccc
              </CardActions>
              {/* <ZinModal modalIsOpen={this.state.modalIsOpen}
              closeModal={this.closeModal}/> */}
            </Card>
          ))
        }
    </Grid>
    <Dialog open={this.state.openDialog}>
          <DialogTitle>Allow this site to collect usage data to improve your experience?</DialogTitle>
          <DialogContent>
            <p>Allowing us to collect data will let us get you the information you want faster.</p>
          </DialogContent>
          <DialogActions fullWidth>
            <Button type='button'>Agree</Button>
            <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
          </DialogActions>
        </Dialog>
        </div>
    )
  }
}

// path='checkout' component={checkout}
//     // <Button raised>

export default Teas;
