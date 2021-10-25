import React, { Component } from 'react'
import { connect } from "react-redux"
import BandInput from "../components/BandInput.js"
import uuid from "uuid"

class BandsContainer extends Component {

  renderBands=()=>this.props.bands.map((band) => <li key={uuid()} text={band}/>)

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

  const mapStateToProps = state =>{
    return{
      bands: state.bands
    }
  }

  const mapDispatchToProps = dispatch =>{
    return{
      addBand: (formData) => dispatch({
        type: "ADD_BAND",
        name: formData
      })
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)


