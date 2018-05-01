import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Spinner } from 'native-base';
import { Metrics, Colors } from '@theme';

const styles = StyleSheet.create({
    container: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: Metrics.screenWidth,
        height: Metrics.screenHeight
    },
    textContent: {
        top: 80,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    }
});

export default class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            textContent: this.props.textContent
        };
    }

    componentWillReceiveProps(nextProps) {
        const { visible, textContent } = nextProps;
        this.setState({visible, textContent});
    }

    render() {
        const { visible } = this.state;
        return (
            (visible) ?
                (
                    <View style={styles.container}>
                        <Spinner color={Colors.brandPrimary} />
                    </View>
                ) : null
        );
    }
}