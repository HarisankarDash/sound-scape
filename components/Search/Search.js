import * as React from 'react';

import { Appbar } from 'react-native-paper';

const Search = () => {
    return <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title="Search" />
    </Appbar.Header>
}

export default Search;