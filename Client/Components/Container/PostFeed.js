import React from 'react'
import { FlatList } from "react-native"
import { Post } from '../Presentation'

export default class PostFeed extends React.Component{
    _renderPost( { item } ){
        return <Post item={item} key={item}/>
    }
    _returnKey(item){
        return item.toString()
    }
    render(){
        return <FlatList 
            data= {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
            keyExtractor={(item)=>{this._returnKey(item)}}
            renderItem={this._renderPost}
        />
    }
}
