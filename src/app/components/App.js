import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";
import {TwoWheel} from "./TwoWheel";
import {FourWheel} from "./FourWheel";

class App extends React.Component {
    render() {
		var twoWheelSpecs = {manufacturer : "Royal Enfield"};
		var fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		
        return ( 
			<div>
				 <div className="container">
					<div className="row">
						<div className="row">
							<TwoWheel name="Enfield Classic" 
									  specs={twoWheelSpecs} 
									  price="0" 
									  changeVisitor={() => this.props.setVisitorName("New Visitor")} 
									  discount={this.props.discoutProp.discout}/>
						</div>
					</div>
				  </div>
			  
				  <div className="container">
					<div className="row">
						<div className="row">
							<FourWheel 
								name="Grand Vitara" 
								specs={fourWheelSpecs} 
								visitor={this.props.visitorProp.visitorName}
								discount={this.props.discoutProp.discout}/>
						</div>
					</div>
				  </div>
			  </div>
        );
    } 
}

const mapStateToProps = (state) => {
	return {
		visitorProp : state.visitorReducer,
		discoutProp : state.discoutReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setVisitorName: (name) => {
			dispatch({
				type: "ADD_VISITOR",
				payload: name
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// render( < App / > , document.getElementById("app"));