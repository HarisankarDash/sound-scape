import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Home from './Home/Home';
import Search from './Search/Search';
import MyAccount from './MyAccount/MyAccount';


const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const Nav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'search', title: 'search', focusedIcon: 'album' },
    { key: 'account', title: 'My Account', focusedIcon: 'history' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    search: Search,
    account:MyAccount,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      
    />
  );
};

export default Nav;