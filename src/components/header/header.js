import React, {Component} from 'react';

class Header extends Component {

  state = {
    showPhones: false
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  myRef = React.createRef();

  handleClickOutside = e => {
    if (!this.myRef.current.contains(e.target)) {
      this.setState({ showPhones: false });
    }
  };

  handleClickInside = () => this.setState({ showPhones: true });

  render() {
    return (
      <div id="call_us" ref={this.myRef} onClick={this.handleClickInside}>
        {this.state.showPhones ?
          <div id="myDIV">
            <div className="phone__number">
              <a href="tel:+38 (097) 90 42 553">+38 (097) 90 42 553</a>
              <a href="tel:+38 (095) 90 30 126">+38 (095) 90 30 126</a>
              <a href="tel:+38 (066) 73 55 190">+38 (066) 73 55 190</a>
              <a href="tel:+38 (067) 75 76 844">+38 (067) 75 76 844</a>
              <a href="tel:(032) 47 59 805">(032) 47 59 805</a>
            </div>
          </div> : " "}
      </div>
    );
  }
}

export default Header;
