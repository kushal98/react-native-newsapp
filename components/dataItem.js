import React from 'react'

import {ListItem , Left , Thumbnail , Body , Text , Button , Right, View} from 'native-base'
import { TextComponent } from 'react-native'
import TimeAgo from './TimeAgo'

const DataItem = (props) => {
    return(
        <ListItem key = {props.key} thumbnail>
            <Left>
                <Thumbnail square source={{ uri: props.data.urlToImage != null ? props.data.urlToImage : "No Image"  }} />
            </Left>
            <Body>
                <Text numberOfLines={1}>{props.data.title}</Text>
                <Text note numberOfLines={1}>{props.data.description}</Text>
                <View style = {{flex : 1 , flexDirection : 'row' , marginTop : 5}}>
                    <TimeAgo time = {props.data.publishedAt} />
                </View>
            </Body>
            <Right>
                <Button transparent onPress= {props.onPress(props.data)} >
                <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    );
}

export default DataItem;