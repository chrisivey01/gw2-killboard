import React, {Component} from 'react'
import buildLogo from '../Components/Builds/Wvw_fp.jpg'
import guardianLogo from '../Components/Builds/Guardian_icon.png'
import elementalistLogo from '../Components/Builds/Elementalist_icon.png'
import necromancerLogo from '../Components/Builds/Necromancer_icon.png'
import revenantLogo from '../Components/Builds/Revenant_icon.png'
import warriorLogo from '../Components/Builds/Warrior_icon.png'
import mesmerLogo from '../Components/Builds/Mesmer_icon.png'


import {Modal, Button} from 'react-bootstrap'

class Builds extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            show: false
        };
    }

    handleClose = () => {
        this.setState({show: false});
    }

    handleShow = () => {
        this.setState({show: true})
    }

    loadGuardian = () => {
        window.location = "http://gw2skills.net/editor/?vVAQNAW3ensADtChdDBOCDkCjlEC7aZFAOA7B0DaDFrBkBKTA-j1BDQBiUJ4AV/BAXAgJ8EAm3BB0NIl9HmoyPSB43ML-w";
    }

    // loadMesmer = () => {
    //     window.location = "http://gw2skills.net/editor/?vhAQRAsd8en0nB9phVpBGoBEgiFij6sCugJwMAClFq+S/0SF-jFx/gAA6HAV+9qEES9HSBYiKN-w";
    // }

    loadNecro = () => {
        window.location = "http://gw2skills.net/editor/?vRAQNAndWnE9CN9it0A20As9iFcBjqLEH+CQDgAwBQ/wGZnsA-jFSBQBA4EAkQ1fMpSw8pPQDPBgFcIASy+DZU5HZA0HDA-w";
    }

    loadRevenant = () => {
        window.location = "http://gw2skills.net/editor/?vlAQJASGW0UI7BewH2OgA8A1ZcjfA-jFSBQBJU9HAcBA0wTAIf6CMpSwceIA23+DZU5HA-w";
    }

    loadDDElementalist = () => {
        window.location = "http://gw2skills.net/editor/?vFAQJAoYnMMANYiFYCeOAcYilNAjYFcBqAu71/6hd4BEAKgA-jlxHQBwT9HAq87LnAAA8AAAnegfs/AA-w";
    }

    loadStaffElementalist = () => {
        window.location = "http://gw2skills.net/editor/?vFAQFAWnMMAVOg94CeOAM5iFBALIAUAeA3r6Z9tW4SeBSBA-jFh/gAA6AAV+Bp+TrSQA-w";
    }

    loadWarrior = () => {
        window.location = "http://gw2skills.net/editor/?vlAQJASGW0UI1Zcjf0OgA8A7BewHC-jFSBQBJU9Has/Q+0FohnAgJVCCgLAQOPEAZU5HA-w";
    }

    render() {

        let modal = {
            height: '50%',
            overflow: 'auto'
        }

        let flex = {
            display: 'flex'
        }

        let flexCenter = {
            display: 'flex',
            justifyContent:'space-around'
        }

        let text = {
            fontSize: '12px'
        }
        return (
            <div className="sidebar">
                <a id="builds" role="button" onClick={this.handleShow} data-toggle="modal"> <img src={buildLogo}/></a>

                <Modal style={modal} show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div>
                                <label>WvW Builds</label>
                            </div>
                            <div style={text}>
                                <div>
                                    <label>Click the icon of the class you want to see.</label>
                                </div>
                                <div>
                                    <label>Preferred classes currently as of 12/15/2018</label>
                                </div>
                                <div style={flexCenter}>
                                    <div>
                                        <ul>
                                            <li>
                                                Guardian/Firebrand
                                            </li>
                                            <li>
                                                Revenant/Herald
                                            </li>
                                            <li>
                                                Necro/Scourge
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                Warrior/Spellbeaker
                                            </li>
                                            <li>
                                                Elemenalist/Tempest
                                            </li>
                                            <li>
                                                Elemenalist/Weaver
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            <div style={flex}>
                                Firebrand: <a id="builds" role="button" onClick={this.loadGuardian} data-toggle="modal">
                                <img src={guardianLogo}/></a>
                                DD/DF Elementalist<a id="builds" role="button" onClick={this.loadDDElementalist} data-toggle="modal"> <img
                                src={elementalistLogo}/></a>
                                Scourge: <a id="builds" role="button" onClick={this.loadNecro} data-toggle="modal"> <img
                                src={necromancerLogo}/></a>
                            </div>
                            <div style={flex}>
                                Revenant: <a id="builds" role="button" onClick={this.loadRevenant} data-toggle="modal">
                                <img src={revenantLogo}/></a>
                                Staff Elementalist: <a id="builds" role="button" onClick={this.loadStaffElementalist}
                                                 data-toggle="modal"> <img src={elementalistLogo}/></a>
                                Warrior: <a id="builds" role="button" onClick={this.loadWarrior} data-toggle="modal">
                                <img src={warriorLogo}/></a>
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