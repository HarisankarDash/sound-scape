import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MyAccount = () => {

    return <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="My Account" />
    </Appbar.Header>

}

export default MyAccount;