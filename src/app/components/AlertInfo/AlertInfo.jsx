import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Alert, AlertContainer } from "react-bs-notifier";

class AlertInfo extends Component {
    handelDismiss = () => {
        this.props.alertOff();
    }
    render() {
        if(this.props.alertShow === false) return null;
        return (
            <AlertContainer>
                <Alert type={this.props.alertType} timeout={1000} onDismiss={() => this.handelDismiss()}>{this.props.alertContent}</Alert>
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        alertContent: state.alertContent,
        alertType: state.alertType
    }
}
 const mapDispatchToProps = (dispatch, ownProps) => {
     return {
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
     }
 }

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)