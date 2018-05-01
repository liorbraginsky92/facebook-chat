import React, { Component, PropTypes } from 'react';
import { StyleSheet, Image, View, Alert } from 'react-native';
import { StyleProvider, Content, Header, Body, Left, Right, Title, List, ListItem, Icon, Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Avatar from '@components/avatar';
import I18n from '@i18n';
import { Colors } from '@theme/';

import getTheme from '../../../native-base-theme/components';
import commonColor from '../../../native-base-theme/variables/commonColor';

import { logout } from '@actions/auth';

const styles = StyleSheet.create({
    avatar: {
        alignSelf: 'center',
        marginTop: 20,
    },
    username: {
        color: Colors.brandPrimary,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'CircularStd-Medium',
    },
    menuItem: {

    },
    menuItemImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    menuItemTitle: {
        color: '#000',
        fontSize: 18,
        marginTop: 4,
        marginBottom: 4,
        fontFamily: 'CircularStd-Bold'
    },
    menuItemRight: {
        color: '#000'
    }

})
class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    navigateToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    logout() {
        Alert.alert(
            'Logout',
            'Do you really want to logout?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.logout() },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <StyleProvider style={getTheme(commonColor)}>
                <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                    <Header>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('DrawerClose')}
                            >
                                <Icon
                                    name={'ios-arrow-back'}
                                    style={{ color: '#000' }}
                                />
                            </Button>
                        </Left>
                        <Body>
                            <Title>
                                {this.props.auth.profile.type === 'user' ? 'Profile' : 'Club Owner'}
                            </Title>
                        </Body>
                        <Right />
                    </Header>
                    <Avatar
                        size={120}
                        style={styles.avatar}
                        source={{ uri: this.props.auth.profile.image }}
                    />
                    <Text style={styles.username}>{this.props.auth.profile.name}</Text>
                    <Content>
                        <List>
                            <ListItem
                                avatar
                                onPress={() => this.navigateToScreen('Map')}
                            >
                                <Left>
                                    <Image
                                        style={styles.menuItemImg}
                                        source={require('@assets/images/sidemenu/map.png')}
                                    />
                                </Left>
                                <Body>
                                    <Text style={styles.menuItemTitle}>{I18n.t('MAP')}</Text>
                                </Body>
                                <Right>
                                    <Icon name={'ios-arrow-forward'}
                                        style={styles.menuItemRight}
                                    />
                                </Right>
                            </ListItem>
                            <ListItem
                                avatar
                                onPress={() => this.navigateToScreen('Spots')}
                            >
                                <Left>
                                    <Image
                                        style={styles.menuItemImg}
                                        source={require('@assets/images/sidemenu/spots.png')}
                                    />
                                </Left>
                                <Body>
                                    <Text style={styles.menuItemTitle}>{I18n.t('SPOTS')}</Text>
                                </Body>
                                <Right>
                                    <Icon name={'ios-arrow-forward'}
                                        style={styles.menuItemRight}
                                    />
                                </Right>
                            </ListItem>
                            {
                                (this.props.auth.profile.type === 'owner' && this.props.auth.profile.club) ? (
                                    <ListItem
                                        avatar
                                        onPress={() => this.navigateToScreen('MyEvents')}
                                    >
                                        <Left>
                                            <Image
                                                style={styles.menuItemImg}
                                                source={require('@assets/images/sidemenu/event.png')}
                                            />
                                        </Left>
                                        <Body>
                                            <Text style={styles.menuItemTitle}>{I18n.t('MY_EVENTS')}</Text>
                                        </Body>
                                        <Right>
                                            <Icon name={'ios-arrow-forward'}
                                                style={styles.menuItemRight}
                                            />
                                        </Right>
                                    </ListItem>) : null
                            }
                            <ListItem
                                avatar
                                onPress={() => this.navigateToScreen('MyFavorites')}
                            >
                                <Left>
                                    <Image
                                        style={styles.menuItemImg}
                                        source={require('@assets/images/sidemenu/favorite.png')}
                                    />
                                </Left>
                                <Body>
                                    <Text style={styles.menuItemTitle}>{I18n.t('MY_FAVORITES')}</Text>
                                </Body>
                                <Right>
                                    <Icon name={'ios-arrow-forward'}
                                        style={styles.menuItemRight}
                                    />
                                </Right>
                            </ListItem>
                            {
                                (this.props.auth.profile.type === 'owner' && this.props.auth.profile.club) ? (
                                    <ListItem
                                        avatar
                                        onPress={() => this.navigateToScreen('MyClub')}
                                    >
                                        <Left>
                                            <Image
                                                style={styles.menuItemImg}
                                                source={require('@assets/images/sidemenu/club.png')}
                                            />
                                        </Left>
                                        <Body>
                                            <Text style={styles.menuItemTitle}>{I18n.t('MY_CLUB')}</Text>
                                        </Body>
                                        <Right>
                                            <Icon name={'ios-arrow-forward'}
                                                style={styles.menuItemRight}
                                            />
                                        </Right>
                                    </ListItem>
                                ) : null
                            }
                            {
                                (this.props.auth.profile.type === 'owner' && this.props.auth.profile.club) ? (
                                    <ListItem
                                        avatar
                                        onPress={() => this.navigateToScreen('NewMessage')}
                                    >
                                        <Left>
                                            <Image
                                                style={styles.menuItemImg}
                                                source={require('@assets/images/sidemenu/new-message.png')}
                                            />
                                        </Left>
                                        <Body>
                                            <Text style={styles.menuItemTitle}>{I18n.t('NEW_MESSAGE')}</Text>
                                        </Body>
                                        <Right>
                                            <Icon name={'ios-arrow-forward'}
                                                style={styles.menuItemRight}
                                            />
                                        </Right>
                                    </ListItem>
                                ) : null
                            }
                            {
                                (this.props.auth.profile.type === 'user') ? (
                                    <ListItem
                                        avatar
                                        onPress={() => this.navigateToScreen('Chats')}
                                    >
                                        <Left>
                                            <Image
                                                style={styles.menuItemImg}
                                                source={require('@assets/images/sidemenu/chat.png')}
                                            />
                                        </Left>
                                        <Body>
                                            <Text style={styles.menuItemTitle}>{I18n.t('CHATS')}</Text>
                                        </Body>
                                        <Right>
                                            <Icon name={'ios-arrow-forward'}
                                                style={styles.menuItemRight}
                                            />
                                        </Right>
                                    </ListItem>
                                ) : null
                            }
                            {
                                (this.props.auth.profile.type === 'user') ? (
                                    <ListItem
                                        avatar
                                        onPress={() => this.navigateToScreen('Profile')}
                                    >
                                        <Left>
                                            <Image
                                                style={styles.menuItemImg}
                                                source={require('@assets/images/sidemenu/profile.png')}
                                            />
                                        </Left>
                                        <Body>
                                            <Text style={styles.menuItemTitle}>{I18n.t('PROFILE')}</Text>
                                        </Body>
                                        <Right>
                                            <Icon name={'ios-arrow-forward'}
                                                style={styles.menuItemRight}
                                            />
                                        </Right>
                                    </ListItem>
                                ) : null
                            }
                            {
                                (this.props.auth.profile.type === 'user') ? (
                                    <ListItem
                                        avatar
                                        onPress={() => this.navigateToScreen('Notifications')}
                                    >
                                        <Left>
                                            <Image
                                                style={styles.menuItemImg}
                                                source={require('@assets/images/sidemenu/notification.png')}
                                            />
                                        </Left>
                                        <Body>
                                            <Text style={styles.menuItemTitle}>{I18n.t('NOTIFICATIONS')}</Text>
                                        </Body>
                                        <Right>
                                            <Icon name={'ios-arrow-forward'}
                                                style={styles.menuItemRight}
                                            />
                                        </Right>
                                    </ListItem>
                                ) : null
                            }
                            <ListItem
                                avatar
                                onPress={() => this.navigateToScreen('Information')}
                            >
                                <Left>
                                    <Image
                                        style={styles.menuItemImg}
                                        source={require('@assets/images/sidemenu/info.png')}
                                    />
                                </Left>
                                <Body>
                                    <Text style={styles.menuItemTitle}>{I18n.t('INFORMATION')}</Text>
                                </Body>
                                <Right>
                                    <Icon name={'ios-arrow-forward'}
                                        style={styles.menuItemRight}
                                    />
                                </Right>
                            </ListItem>
                            <ListItem
                                avatar
                                onPress={this.logout.bind(this)}
                            >
                                <Left>
                                    <Image
                                        style={styles.menuItemImg}
                                        source={require('@assets/images/sidemenu/logout.png')}
                                    />
                                </Left>
                                <Body>
                                    <Text style={styles.menuItemTitle}>{I18n.t('LOGOUT')}</Text>
                                </Body>
                                <Right>
                                    <Icon name={'ios-arrow-forward'}
                                        style={styles.menuItemRight}
                                    />
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </StyleProvider>
        );
    }
};

SideMenu.propTypes = {
    navigation: PropTypes.object.isRequired
};

function bindAction(dispatch) {
    return {
        dispatch,
        logout: () => dispatch(logout()),
    };
}

const mapStateToProps = (state) => ({
    global: state.global,
    auth: state.auth,
});

export default connect(mapStateToProps, bindAction)(SideMenu);