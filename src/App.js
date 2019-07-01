import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const primaryColor = "#A2E47D";

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
                <View style={styles.appBar}>
                    <Text style={styles.appTitle}>Shopping List</Text>
                    <View style={styles.appIcon}>
                        <Icon style={styles.appActionAdd} name="playlist-add" size={30} color={'white'} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text>Content here</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    content: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F4F4',
    },
    appTitle: {
        flex: 1,
        fontSize: 22,
        textAlign: 'center',
        color: '#fff'
    },
    appActions: {
        
    },
    appActionAdd: {
        fontSize: 30,
    },
    appBar: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
        backgroundColor: primaryColor,
    },
});

export default App;