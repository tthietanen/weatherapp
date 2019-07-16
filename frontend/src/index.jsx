import React from 'react';
import ReactDOM from 'react-dom';
import Table1 from './Table1'

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    console.log(`Getting weather`);
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecasts: [],
    };
  }

  async componentWillMount() {
    const result = await getWeatherFromApi();
    this.setState({forecasts: result});
  }

  render() {
    return (
      <div>
        <Table1 data={this.state.forecasts}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
