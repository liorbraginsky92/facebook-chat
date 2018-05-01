import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import I18n from '@i18n';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Utils from "@src/utils";
import { Styles, Colors, Fonts, Global, Images, Metrics, Icons } from '@theme/';

export default class HomeScreen extends Component {

    renderPattern() {
        if (Platform.OS === 'ios') {
            return (
                <Image
                    resizeMode='repeat'
                    source={Images.imgPattern}
                    style={{ width: Metrics.screenWidth, height: Metrics.screenHeight }}
                />
            )
        }
        let patternSize = 20;
        let imagesRow = [];
        let countColumn = Math.ceil(Metrics.screenHeight / patternSize);
        let countRow = Math.ceil(Metrics.screenHeight / patternSize);
        for (let i = 0; i < countColumn; i++) {
            let imagesColumn = [];
            for (let j = 0; j < countRow; j++) {
                imagesColumn.push((
                    <Image
                        key={j}
                        source={Images.imgPattern}
                        style={styles.pattern}
                    />
                ))
            }
            imagesRow.push(
                <View key={i}>
                    {imagesColumn}
                </View>
            );
        }
        return (
            <View style={{ flexDirection: 'row' }}>
                {imagesRow}
            </View>
        );
    }

    renderLogo() {
        return (
            <View>
                <Image
                    resizeMode='contain'
                    source={Images.logoBack}
                    style={{ width: Metrics.screenWidth, height: Metrics.screenWidth * 0.3 }}
                />
                <View style={{ position: 'absolute', top: Platform.select({ android: 10, ios: 20 }) }}>
                    <Image
                        resizeMode='contain'
                        source={Images.logoFront}
                        style={{ width: Metrics.screenWidth * 0.8, height: Metrics.screenWidth * 0.1 }}
                    />
                </View>
                <TouchableOpacity style={{ position: 'absolute', backgroundColor: 'transparent', top: Platform.select({ android: 10, ios: 20 }) + 5, right: 10 }}>
                    <IonIcon name='ios-menu-outline' color='white' size={30} />
                </TouchableOpacity>
            </View>
        )
    }

    renderButton(icon, text) {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('New', { title: text })}>
                <Image
                    resizeMode='contain'
                    source={icon}
                    style={{ width: '20%', height: '70%' }}
                />
                <View style={{ position: 'absolute', width: '100%' }}>
                    <Text style={styles.buttonText}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ position: 'absolute' }}>
                    {this.renderPattern()}
                </View>
                {this.renderLogo()}
                <View>
                    <Text style={styles.label}>
                        {I18n.t('LABEL_1')}
                    </Text>
                </View>
                <View style={{ padding: 5 }}>
                    {this.renderButton(Icons.iconTalk, I18n.t('BUTTON_TALK'))}
                    {this.renderButton(Icons.iconUpload, I18n.t('BUTTON_UPLOAD'))}
                    {this.renderButton(Icons.iconMedia, I18n.t('BUTTON_MEDIA'))}
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.label}>
                        {I18n.t('LABEL_2')}
                    </Text>
                </View>
                <View style={{ padding: 5 }}>
                    {this.renderButton(Icons.iconCloud, I18n.t('BUTTON_CLOUD'))}
                    {this.renderButton(Icons.iconAccount, I18n.t('BUTTON_ACCOUNT'))}
                    {this.renderButton(Icons.iconShop, I18n.t('BUTTON_SHOP'))}
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.versionText}>
                        {I18n.t('VERSION')}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pattern: {
        width: 20,
        height: 20
    },
    buttonContainer: {
        height: Metrics.screenHeight * 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#989898',
        borderRadius: 10
    },
    label: {
        ...Fonts.style.textInput,
        textAlign: 'center',
        color: '#00b100'
    },
    buttonText: {
        ...Fonts.style.textInput,
        textAlign: 'center',
        color: '#212121'
    },
    versionText: {
        color: '#d0d0d0',
        textAlign: 'center',
        backgroundColor: 'transparent'
    }
});
