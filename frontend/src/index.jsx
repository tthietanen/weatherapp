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
        <table>
	    <tbody>
	    {this.state.forecasts.map( item => (
		    <tr key={JSON.stringify(item.dt)}>
		      <td>{item.dt_txt}</td>
		      <td><img  width="96" src={`/img/${item.weather[0].icon.slice(0, -1)}.svg`} /></td>
		    </tr>
	    ))}
	    </tbody>
        </table>
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
