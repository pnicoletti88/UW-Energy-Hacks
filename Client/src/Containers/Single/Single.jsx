import React, { Component } from "react";
import { getSingleData } from "../../util/util";
import SingleInformation from "../../Components/Features/SingleInformation/SingleInformation";

class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const data = await getSingleData();
    console.log(data);
    this.setState({
      data,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, data } = this.state;
    if (isLoading) {
      return (<div>Loading!</div>);
    }

    return (
      <SingleInformation {...data} />
    );
  }
}

export default Single;
