import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Tabs, Tab } from 'react-mdl'
import teas from '../teaData';

class Teas extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  componentDidMount() {
    console.log(teas);
  }

  render() {
    return(
      <div>
        {
          teas.map(tea => (
            <Card key={tea.id} shadow={0} style={{width: '400px', height: '450px', margin: 'auto', top: '133px'}}>
              <CardTitle expand style={{color: '#fff', background: 'url(' + tea.image + ') bottom right 100% no-repeat #46B6AC', backgroundSize: 'cover'}}>{tea.name}</CardTitle>
              <CardText>
                {tea.description}
              </CardText>
              <CardActions border>
                  <Button raised>Buy It</Button>
              </CardActions>
            </Card>
          ))
        }
    </div>
    )
  }
}


export default Teas;
