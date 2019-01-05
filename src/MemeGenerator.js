import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      topText: "",
      bottomText: "",
      randImg: "https://i.imgflip.com/22bdq6.jpg",
      data: []
    };
  }
  componentDidMount() {
    const url = "https://api.imgflip.com/get_memes";
    //const response =
    fetch(url)
      // fetch("https://api.imgflip.com/get_memes")
      //fetch("https://al-quran-8d642.firebaseio.com/surat/2.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response.data.memes
        });
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const randId = Math.floor(Math.random() * this.state.data.length);
    console.log("Submitted");
    this.setState({
      randImg: this.state.data[randId].url
    });
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Gen</button>
        </form>

        <div className="meme text-center">
          <img src={this.state.randImg} alt="" />
          <h2 className="top ">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
