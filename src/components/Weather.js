import React from 'react'

class Weather extends React.Component {
    render() {
        return(
            <div className="info_weather">
                {/* show the paragraphs only when the conditions are true */}
                {
                    this.props.city && this.props.country && <p className="weather__key">Locatie: 
                        <span className="weather__result"> {this.props.city}, {this.props.country}</span> 
                    </p> 
                }
                {
                    this.props.temperature && <p className="weather__key">Temperatura: 
                        <span className="weather__result"> {this.props.temperature} </span>
                        </p> 
                }
                {
                    this.props.humidity && <p className="weather__key">Umiditate: 
                        <span className="weather__result"> {this.props.humidity} </span>
                        </p> 
                }
                {
                    this.props.description && <p className="weather__key">Conditii: 
                        <span className="weather__result"> {this.props.description} </span>
                        </p> 
                }
                {
                    this.props.wind_speed && <p className="weather__key">Viteza vântului: 
                        <span className="weather__result"> {this.props.wind_speed} </span>
                        </p> 
                }
                {
                    this.props.clouds && <p className="weather__key">Acoperire cu nori: 
                        <span className="weather__result"> {this.props.clouds} % </span>
                        </p> 
                }
                {this.props.error && <p className="weather__eroare"> {this.props.error}</p> }
            </div>
        );
    }
}

export default Weather;