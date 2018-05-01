import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
    screenWidth: width,
    screenHeight: height,
    defaultPadding: 20,
    defaultMargin: 12
};