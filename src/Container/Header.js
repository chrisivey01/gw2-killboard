import React,{Component} from 'react'


import services from '../Services/services'
import Rank1Weekly from '../Components/HeaderComponent/Rank1Weekly'



class Headers extends Component{

    state = {
        topKillerWeekly:''
    }


    componentWillMount(){
        this.grabTop()
    }



    //this might need to be changed soon
    async grabTop() {
        const response = await services.loadWeeklyTopKiller();
        const json = await response.json();

        this.setState({
            topKillerWeekly:json
        })
    }


    render(){
        return(
            <div>
                {this.state.topKillerWeekly != '' ?
                <Rank1Weekly
                    topKiller = {this.state.topKillerWeekly}
                />
                : null}
            </div>
        )
    }
}


export default Headers;