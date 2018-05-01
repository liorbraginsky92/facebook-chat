import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainNavigator from '@navigators/main';
import AuthNavigator from '@navigators/auth';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AuthNavigator />
        );
    }
}

function bindAction(dispatch) {
    return {
        dispatch,
    };
}

const mapStateToProps = (state) => ({
    global: state.global,
    auth: state.auth
});

export default connect(mapStateToProps, bindAction)(App);