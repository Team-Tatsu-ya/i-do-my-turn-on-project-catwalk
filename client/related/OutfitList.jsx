import React from 'react';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'outfit',
      customer: 0,
      outfitProducts: []
    };
  }

  // TODO: methods to pull in customer's unique outfit data

  render () {
    return (
      <div>
        {/* TODO: put carousel here with product card component */}
      </div>
    );
  }
}