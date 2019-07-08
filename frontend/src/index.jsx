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
	<ul>
	    {this.state.forecasts.map( item => (
		    <li key={JSON.stringify(item.dt_txt)}>
		    	<Forecast forecast={item} />
		    </li>
	    ))}
        </ul>
      </div>

    );
  }
}

const Forecast = ({ forecast }) => (
	    <Dt_txt dt_txt={forecast.dt_txt} />
	    <Icon icon={forecast.weather[0].icon} />
);

const Dt_txt = ({ dt_txt }) => <p>{dt_txt}</p>;
const Icon = ({ icon }) => <img src={`/img/${icon.slice(0, -1)}.svg`} />


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
