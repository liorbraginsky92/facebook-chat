import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
});

class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View />
        );
    }
}

function bindAction(dispatch) {
    return {
        dispatch,
    };
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    global: state.global
});

export default connect(mapStateToProps, bindAction)(RegisterScreen);
