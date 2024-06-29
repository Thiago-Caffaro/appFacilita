import { View, Text } from "react-native";
import {useContext} from 'react';
import { AuthContext } from '@/context/auth';
import { StyleSheet } from "react-native";

import NavBar from "@/components/navBar/navBar.jsx";

function MainScreen(){
    const { content } = useContext(AuthContext);
    
    return (
        <View id="container" style={mainScreenStyles.container} >
            <NavBar />
            <View id="mainContentBox" style={mainScreenStyles.mainContentBoxStyle}>
                <Text>{content}</Text>
            </View>
        </View>
    );
}
const mainScreenStyles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignItems: 'center'
    },

    mainContentBoxStyle:{
        maxHeight: '80%',
    },

    
})
export default MainScreen;