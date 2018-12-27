import React, {Component} from 'react'
import services from '../services/services'
import Rank1Weekly from '../components/HeaderComponent/Rank1Weekly'


class Headers extends Component {

    state = {
        topKillerWeekly: ''
    }


    componentWillMount() {
        this.grabTop()
    }


    //this might need to be changed soon
    async grabTop() {
        const response = await services.loadWeeklyTopKiller();
        const json = await response.json();

        this.setState({
            topKillerWeekly: json
        })
    }


    render() {
        let style = {
            display:"block"
        }
        let inlineStyle ={
            display:"inline-block"
        }
        return (
            <div style={style}>
                {this.state.topKillerWeekly != '' ?
                    <Rank1Weekly
                        topKiller={this.state.topKillerWeekly}
                    />
                    : null}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Hidden brand</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}


export default Headers;