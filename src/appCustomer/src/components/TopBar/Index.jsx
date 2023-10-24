import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import searchIcon from '../../assets/search_blue.png';

import qr from '../../assets/QR_Icon.png';
import alarm from '../../assets/alarm.png';

export default function TopBar({ navigation }) {
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Image source={searchIcon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchbar}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Buscar"
                />
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
                    <Image source={qr} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <Image source={alarm} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icons: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchbar: {
        width: '60%',
        height: '100%',
        paddingLeft: 20,
    },
});
