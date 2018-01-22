import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux";
// TwoWheel as a Class Component
class TwoWheeler extends React.Component {
	constructor(props) {
		super();
	    this.price = props.price;
		// this.state = {price:props.price}
		//this.handleOnClick = this.handleOnClick.bind(this);
	}
	
	//handleOnClick() {
		//this.price = "Rs.100000";
		// this.setState({price:'Rs. 100000'});
		//console.log('Get New Price');
	//}
	
    render() {
        return ( 
		    <div  className="alert alert-warning" >
						<h1 style={{color:'blue'}}> Two Wheel </h1>
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
							
							<li>
								<b>Price :</b> {this.price}
							</li>
            
            <li>
								<b>VISITOR :</b> {this.props.visitorProp.visitorName}
							</li>
            
							 
						</ul>
						<button onClick={() => this.props.setVisitorNameFromChild("New Visitor")} className="btn btn-primary" >New Visitor</button>
					</div>
				 
      
        );
    } 
}



const mapStateToProps = (state) => {
	return {
		visitorProp : state.visitorReducer
		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setVisitorNameFromChild: (name) => {
			dispatch({
				type: "ADD_VISITOR",
				payload: name
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TwoWheeler);
