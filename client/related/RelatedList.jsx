import React from 'react';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'related',
      currentProduct: 0,
      relatedProducts: []
    };
  }

  // TODO: methods that pull in data from related products

  render () {
    return (
      <div>
        {/* TODO: put carousel here with product card component */}
      </div>
    );
  }
}