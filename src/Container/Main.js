import React,{Component} from 'react'

import WvwKills from '../Components/KillLeaderboard/WvwKills'
import services from '../Services/services'

class Main extends Component {

    state = {
        data:{
            id:'',
            account_id:'',
            account:'',
            wvwkills:''
        }
    }

    componentDidMount(){
        this.loadData()
    }
    // load by onclick
    async loadData() {
        const response = await services.loadData()
        const json = await response.json();
        json.sort((a, b) => b.wvwkills - a.wvwkills)
        json.map((item, i) =>{
            item['rank'] = i+1
        })
        this.setState({ data: json });


        //<button onClick={()=>this.loadData()}> Load Leaderboard </button>

    }



    render(){
        return(
            <div>
                <WvwKills
                    wvwTable = {this.state.data}
                />
            </div>
        )
    }

}


export default Main;