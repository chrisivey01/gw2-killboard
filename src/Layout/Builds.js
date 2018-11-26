import React,{Component} from 'react'
import buildLogo from '../Components/Builds/Wvw_fp.jpg'
import guardianLogo from '../Components/Builds/Guardian_icon.png'
import elementalistLogo from '../Components/Builds/Elementalist_icon.png'
import necromancerLogo from '../Components/Builds/Necromancer_icon.png'
import revenantLogo from '../Components/Builds/Revenant_icon.png'
import warriorLogo from '../Components/Builds/Warrior_icon.png'
import mesmerLogo from '../Components/Builds/Mesmer_icon.png'


import {Modal, Button} from 'react-bootstrap'

class Builds extends Component{

    constructor(props, context){
        super(props,context)
        this.state ={
            show:false
        };
    }

    handleClose = () => {
        this.setState({ show: false});
    }

    handleShow = () => {
        this.setState({ show: true})
    }

    loadGuardian = () => {
        window.location = "http://gw2skills.net/editor/?vVAQNAW3ensADtChdDBOCDkCjlEC7aZFAOA7B0DaDFrBkBKTA-jlxHQBg7iA6GAoyPA8EAeoSwfs/A8U/hUA+NzC-w";
    }

    loadMesmer= () => {
        window.location = "http://gw2skills.net/editor/?vhAQRAsd8en0nB9phVpBGoBEgiFij6sCugJwMAClFq+S/0SF-jFx/gAA6HAV+9qEES9HSBYiKN-w";
    }

    loadNecro = () => {
        window.location = "http://gw2skills.net/editor/?vRAQNAndWnE9CN9it0A20As9iFcBDaAEAOA6H2I7klqL0GeWA-jFSBQBa4JAAgTAwCOEAmUJY+0Hwv9HyoyvEq+DZA0HDA-w";
    }

    loadRevenant = () => {
        window.location = "http://gw2skills.net/editor/?vlAQJASGW0UI7BewHqOjb8j2BEgHA-jFh/gAgK/gU/pVJIguAA-w";
    }

    loadElementalist = () => {
        window.location = "http://gw2skills.net/editor/?vFAQFAWnMMAVOg94CeOAM5iFBALIAUAeA3r6Z9tW4SeBSBA-jFh/gAA6AAV+Bp+TrSQA-w";
    }

    loadWarrior = () => {
        window.location = "http://gw2skills.net/editor/?vJAQNBiYD7kKRoMEsYXwKEgZXskFY4V4N8IWpGk6iBIDuCQAA-jFh/gAtKBBV+BobAS9HA-w";
    }
    render(){

        let modal = {
            height:'50%',
            overflow:'auto'
        }

        let flex = {
            display:'flex'
        }

        let text = {
            fontSize:'9px'
        }
        return(
            <div className="sidebar">
                <a id="builds" role="button" onClick={this.handleShow} data-toggle="modal"> <img src={buildLogo}/></a>

                <Modal style={modal} show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div>
                                <label>WvW Builds</label>
                            </div>
                            <div style={text}>
                                <label>Click the icon of the class you want to see.</label>
                            </div>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body >
                        <div>
                            <div style={flex}>
                                Firebrand: <a id="builds" role="button" onClick={this.loadGuardian} data-toggle="modal"> <img src={guardianLogo}/></a>
                                Chrono: <a id="builds" role="button" onClick={this.loadMesmer} data-toggle="modal"> <img src={mesmerLogo}/></a>
                                Scourge: <a id="builds" role="button" onClick={this.loadNecro} data-toggle="modal"> <img src={necromancerLogo}/></a>
                            </div>
                            <div style={flex}>
                                Revenant: <a id="builds" role="button" onClick={this.loadRevenant} data-toggle="modal"> <img src={revenantLogo}/></a>
                                Elementalist: <a id="builds" role="button" onClick={this.loadElementalist} data-toggle="modal"> <img src={elementalistLogo}/></a>
                                Warrior: <a id="builds" role="button" onClick={this.loadWarrior} data-toggle="modal"> <img src={warriorLogo}/></a>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }



}

export default Builds;