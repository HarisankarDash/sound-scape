import * as React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

const Home = () => {
    const theme = useTheme();
    return <Appbar.Header style={{
        backgroundColor: theme.colors.primary,
    }}>
        <Appbar.Content title="Home" />
    </Appbar.Header>
}

export default Home;