import React from "react"
import {View,Text,StyleSheet, Image, Dimensions} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import config from "../config"

export default class Post extends React.Component{
    constructor(){
        super()
        this.state={
            screenWidth:0,
            liked:false
        }
        this.likeToggle = this.likeToggle.bind(this)
    }
    componentDidMount(){
        this.setState({
            screenWidth:Dimensions.get('window').width
        })
    }

    likeToggle(){
        this.setState({
            liked:!this.state.liked
        })
    }

    render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.1)
        const imageSelection = ( this.props.item % 2===0 ) ? 'https://lh3.googleusercontent.com/0A43mc-dMWDnHCnTt7sWYm8YvKuQ4iXHg-r2bIOnfL9W7Fhz-TUPijS0Sdjqz-A0DYUYx3jga1k6p0i8UnivLMsEl2I':'https://lh3.googleusercontent.com/nZELz3L3W1v93uteAsMs9QiYXYnX2LBSN7FXxdMzIuq3yynA50PQu-NlhXpf7GtKL8JrPSrBH_p7TSgWPNq0Rm7WBgY'

        const image_uri = imageSelection + "=s"+imageHeight + "-c"
        
        const heartIconColor = this.state.liked ? 'rgb(252,61,57)':null 
        return(
            <View style={{flex:1,flexDirection:'column',width:100+'%'}}>
                <View style={styles.userBar}>
                    <View style={[styles.diamond,{flexDirection:'row',alignItems:'center',justifyContent:'center'}]}>
                        <Image 
                            style={{width:40,height:40,borderRadius:50}}
                            source={{uri:
                                'https://lh3.googleusercontent.com/gMiPKRAc9biLUAhcSbEwdfeZhvnHd_j8TUzjaM7VxjY5aZaIQ0vp8cHuDFAt8uzxQa7h8K54oX9o6Q9HRg5mbvOR'
                            }}
                        />
                        <Text style={{marginLeft:10}}>KaliSam</Text>
                    </View>
                    <View style={[styles.drawer,{alignItems:'center'}]}>
                        <Text style={{fontSize:40}}>...</Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={this.likeToggle} >
                    <Image 
                        style={{width:this.state.screenWidth,height:this.state.screenWidth*1.1}}
                        source={{
                            uri:image_uri
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image
                        style={{height:40,width:40,margin:6,tintColor:heartIconColor}}
                        source={config.images.heartIcon}
                    />
                     <Image
                     resizeMode="contain"
                        style={{height:30,width:35,margin:6}}
                        source={config.images.chatIcon}
                    />
                    <Image
                    resizeMode="contain"
                        style={{height:32,width:28,margin:6}}
                        source={config.images.arrowIcon}
                    />
                    
                </View>
                <View style={styles.commentBar}>
                    <Image
                        resizeMode='contain'
                        style={{height:25,width:40,margin:6,tintColor:'rgb(252,61,57)'}}
                        source={config.images.heartIcon}
                    />  
                    <Text>128 Likes</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userBar:{
        height:50,
        width:100+'%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        justifyContent:'space-between'
    },
    diamond:{
        borderRadius:40,
    },
    drawer:{
       marginBottom:27
      
    },
    iconBar:{
        height:50,
        width:100+'%',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:'rgb(233,233,233)',
        flexDirection:'row',
        alignItems:'center'
    },
    commentBar:{
        width:100+'%',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:'rgb(233,233,233)',
        height:45,
        flexDirection:'row',
        alignItems:'center',
        
    }
    
})