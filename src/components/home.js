import React, { Component } from 'react';
import { Tabs, Tab } from 'react'
class Home extends Component {

state = {
  teas: [ {
         "id": 1,
         "name": "Super Interpolation",
         "description": "Burdock Root, Elderberry, Linden Leaf & Key Lime",
         "image": "https://github-production-user-asset-6210df.s3.amazonaws.com/31421883/39390080-cbc533c2-4a5d-11e8-9b70-1853f8972d80.png",
         "price": 10.00
        },
        {
         "id": 2,
         "name": "Mineral Script",
         "description": "Sarsaparilla, Stinging Netle & Red Clover",
         "image": "https://github-production-user-asset-6210df.s3.amazonaws.com/31421883/39390080-cbc533c2-4a5d-11e8-9b70-1853f8972d80.png",
         "price": 10.00
       },
       {
         "id": 3,
         "name": "Bootcamp Groove",
         "description": "Damiana, Ginger, Sensitiva & Yohimbe",
         "image": "https://github-production-user-asset-6210df.s3.amazonaws.com/31421883/39390080-cbc533c2-4a5d-11e8-9b70-1853f8972d80.png",
         "price": 10.00

       }

   ]
};

  render() {
    return(
      <div>
        {

          this.state.teas.map(tea => {
            return
            <Tabs>
            <div> {tea.name}{tea.image}{tea.description}{tea.price} </div>
          </Tabs>
          })
        }
      </div>
    )
  }
}

export default Home;
