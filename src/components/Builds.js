import React from 'react'
import Services from '../services/Services'
import {Link, Route} from 'react-router-dom'
import ShowGearAndTraits from './ShowGearAndTraits'



class Builds extends React.Component {

    state = {
        character_name:'',
        gears:{}
    }
    loadGearsForCharacter = (name) => {

        let grabGears = Services.playersGear(name)

        this.setState({
            character_name:name,
            gears: grabGears
        })
    }


    render() {
        let characterNames = this.props.gears
        return (

            <div>
                Under construction :D
                <div>
                    {characterNames.map((eq, i) => {
                        return <Link to={eq.character_name} className="buttonFont" key={i}>
                            <button
                                onClick={() => this.loadGearsForCharacter(eq.character_name)}>{eq.character_name}</button>
                        </Link>

                    })}

                    {this.state.character_name !== '' ?
                    <Route path={this.state.character_name} component={()=> <ShowGearAndTraits gears={this.state.gears}/>}/>
    : null}
                </div>
            </div>
        )
    }
}

export default Builds;