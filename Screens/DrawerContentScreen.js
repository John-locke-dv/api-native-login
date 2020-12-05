import React, {Component} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet} from "react-native";
import { Icon } from 'react-native-elements'


export class DrawerContentScreen extends Component {


    handlerSalir()
    {     
            this.props.onLogout();    
     }

    render(){

        return(

            <View style={styles.container}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.topDrawer}>
                        <DrawerItem 
                            icon={() => <Icon type="material-community" name="home-outline" style={styles.icono}/>}
                            label="Home"
                            onPress={() => this.props.navigation.navigate("Home")}
                        />
                    </View>
                    
                </DrawerContentScrollView>

                <View style={styles.bottomDrawer}>
                    <DrawerItem 
                        icon={() => <Icon type="material-community" name="logout" style={styles.icono}/>}
                        label="Salir"
                        onPress={() => this.handlerSalir()}
                    />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icono:{
        color:'#517fa4',
        
    },
    topDrawer:{
        flex:1   
    },
    bottomDrawer: {
        flex:-1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
});