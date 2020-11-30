import React from 'react';

export class ContentDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="content-description">
        Популярность красной рыбы, и в частности лосося, 
        растет с каждым днем. 
        Из-за своего восхитительного вкуса и богатого витаминного 
        состава она по праву считается деликатесом.
      </div>
    );
  };
};