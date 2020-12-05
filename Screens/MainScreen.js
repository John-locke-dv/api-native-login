
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class MainScreen extends Component{

    handlerLogout(){
        this.props.onLogout();
    }

    render(){
        return (
            <View style={styles.container}>
                <Text></Text>
                <Button
                    onPress={() => this.handlerLogout()}
                   
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
