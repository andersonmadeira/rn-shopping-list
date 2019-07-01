import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const primaryColor = "#15B4EE";

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={primaryColor} barStyle="light-content" />
                <Text style={styles.appBar}>Shopping List</Text>
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
    appBar: {
        fontSize: 22,
        textAlign: 'center',
        padding: 12,
        backgroundColor: primaryColor,
        color: '#fff'
    },
});

export default App;