import { Constants } from 'expo';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const Container = styled.View`
  flex: 1;
`;

const Menu = styled.View`
  flex: 1;
`;

const Header = styled.View`
  margin-top: ${Constants.statusBarHeight};
  border-bottom-width: 1;
  border-color: rgba(151,151,151,0.4);
  padding: 14px;
`;

const HeaderTitle = styled.Text`
  font-family: GilroyBold;
  font-size: 14;
  color: #4A4A4A;
`;

const Footer = styled(Header)`
  border-top-width: 1;
  align-items: center;
`;

const FooterText = styled.Text`
  color: #6C7A89;
`;

export default class SideMenu extends Component {
  static propTypes = {
    activeItemKey: PropTypes.string.isRequired,
  };

  logout = () => {
    const { navigation } = this.props;
    const reset = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
      key: null,
    });

    navigation.dispatch(reset);
  };

  navigate(route) {
    const { navigation } = this.props;

    const action = NavigationActions.navigate({ routeName: route });
    navigation.dispatch(action);
  }

  render() {
    const { activeItemKey } = this.props;
    const version = `versão ${Constants.manifest.version}`;
    const emptyFunc = () => {};

    return (
      <Container>
        <Header>
          <HeaderTitle>Olá</HeaderTitle>
        </Header>
        <Menu>
          <MenuItem
            title="Início"
            icon="home"
            onPress={() => this.navigate('Feed')}
            active={activeItemKey === 'Feed'}
          />
          <MenuItem
            title="Perfil"
            icon="account-circle"
            onPress={() => this.navigate('Profile')}
            active={activeItemKey === 'Profile'}
          />
          <MenuItem title="Favoritos" icon="favorite" onPress={emptyFunc} />
          <MenuItem title="Ofertas" icon="local-offer" onPress={emptyFunc} />
          <MenuItem
            title="Sair"
            icon="exit-to-app"
            onPress={this.logout}
          />
        </Menu>
        <Footer>
          <FooterText>
            {version}
          </FooterText>
        </Footer>
      </Container>
    );
  }
}
