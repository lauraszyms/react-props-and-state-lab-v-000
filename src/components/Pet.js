import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} (gender: {this.props.pet.gender === "female" ? "♀" : "♂" })</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
             <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleClick} >Adopt pet</button> }
        </div>
      </div>
    );
  }
}

export default Pet;
