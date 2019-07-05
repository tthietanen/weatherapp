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
	<div>
	    <Icon icon={forecast.weather[0].icon} />
	    <Dt dt={forecast.dt} />
	    <Dt_txt dt_txt={forecast.dt_txt} />
	</div>
);

const Icon = ({ icon }) => <h3>{icon}</h3>;
const Dt = ({ dt }) => <h3>{dt}</h3>;
const Dt_txt = ({ dt_txt }) => <h3>{dt_txt}</h3>;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
