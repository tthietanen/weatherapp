import React from 'react';
import ReactDOM from 'react-dom';

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

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [],
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({forecast: weather});
  }

  render() {
    return (

	    <div>
	    <ul>
	    {this.state.forecast.map(item => (
		    <li key={JSON.stringify(item.dt_txt)}>{JSON.stringify(item)}</li>
	    ))}
	    </ul>
	    </div>

    );
  }
}

ReactDOM.render(
  <Forecast />,
  document.getElementById('app')
);
