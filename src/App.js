import React, { Component } from 'react';

class App extends Component {
  state = {
    status: false,
    img_refresh_key: Math.random()
  }

  handleClick = () => {
    this.setState({status: false, img_refresh_key: Math.random()})
  }
  onLoadImage = () => {
    this.setState({status: true})
  }

  render() {
    const { status, img_refresh_key } = this.state
    return (
      <div className="App mt-5">
        <div className="container">
          <div className={status ? "button text-white pt-2 pb-2 text-center mx-auto" : 'button active text-white pt-2 pb-2 text-center mx-auto'} onClick={status ? this.handleClick : ''}>
            <h3 className="m-0">{status ? 'Get image' : 'Loading...'}</h3>
          </div>
          <div className={status ? "image mt-5" : "image hide mt-5"}>
            <center>
              <img className="img-fluid" src={'https://picsum.photos/g/450/350/?random' + img_refresh_key} onLoad={this.onLoadImage}/>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
