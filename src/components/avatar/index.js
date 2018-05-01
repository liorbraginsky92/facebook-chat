import React, { Component, PropTypes } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Metrics, Colors } from '@theme';

const styles = StyleSheet.create({
});

export default class Avatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onPress() {
        if(this.props.onPress) {
            this.props.onPress();
        }
    }
    componentWillReceiveProps(nextProps) {
    }

    render() {
        const { visible } = this.state;
        if (Platform.OS === 'android') {
            return (
                <TouchableOpacity
                    onPress={this.onPress.bind(this)}
                >
                    <View
                        style={[this.props.style, {
                            width: this.props.size,
                            height: this.props.size,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            
                        }]}>
                        <Image
                            source={this.props.source}
                            style={{
                                width: this.props.size,
                                height: this.props.size,
                                borderRadius: this.props.size / 2,
                                borderWidth: 4,
                                borderColor: '#FFF',
                                shadowOffset:{  width: 10,  height: 10,  },
                                shadowColor: 'black',
                                shadowOpacity: 1.0,
                                shadowRadius: 2
                            }}
                        />
                    </View>
                </TouchableOpacity>
            );
        }
        return (
            <View
                style={[this.props.style, {
                    width: this.props.size,
                    height: this.props.size,
                    alignItems: 'center',
                    justifyContent: 'center',
                }]}
            >
                <TouchableOpacity
                    onPress={this.onPress.bind(this)}
                >
                    <View
                        style={{
                            width: this.props.size * 0.7,
                            height: this.props.size * 0.7,
                            backgroundColor: '#FFF',
                            transform: [
                                { rotate: '45deg' }
                            ],
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: this.props.size / 30,
                            borderWidth: this.props.size / 30,
                            borderColor: '#FFF',
                            overflow: 'visible',
                            shadowOffset: { width: 0, height: 0, },
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowRadius: 4,
                        }}
                    >
                        <View style={{
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            overflow: 'hidden',
                            justifyContent: 'center',
                            backgroundColor: 'black',
                            borderRadius: this.props.size / 30,
                        }}>

                            <Image
                                style={{
                                    width: this.props.size,
                                    height: this.props.size,
                                    transform: [{ rotate: '-45deg' }]
                                }}
                                source={this.props.source}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

Avatar.propTypes = {
    size: PropTypes.number.isRequired,
}