import React from "react"
import {View,Text,StyleSheet} from "react-native"
import { PostFeed } from '../Container'

export default class InstaClone extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.statusBar} />
                <View style={styles.topNav}>
                    <Text style={styles.InstaText}>Instagram</Text>
                </View>           
                <PostFeed />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBar:{
        height:24,
        backgroundColor:'rgb(155, 157, 160)'
    },
    container:{
        flex:1
    },
    topNav:{
        backgroundColor:'rgb(250,250,250)',
        height:50,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'rgb(233,233,233)',
        justifyContent:'center',
        alignItems:'center'
    },
    InstaText:{
        fontSize:22,
        fontStyle:'italic'
    },
    
})