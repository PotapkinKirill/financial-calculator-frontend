import './index.css'
import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    tabs: [
      "Payments",
      "Income",
      "Charts",
      "Settings"
    ],
    defaultSelected: "Payments"
  }

  handleClick = ({target}) => {
    let tab = target.dataset.value
    this.setState({
      defaultSelected: tab
    })
    this.props.setRender(tab)
  }

  render() {
    return(
      <ul className="Navbar">
      {this.state.tabs.map((tab, index) => 
          <li 
            data-value={tab}
            key={index}
            onClick={this.handleClick}
            className={tab === this.state.defaultSelected ? "active" : null}
          >
            {tab}
          </li>
      )}
      </ul>
    );
  }
}

export default (Navbar)