import React from "react";
import {Dimensions , Modal } from 'react-native'
import { Container , Content , Left , Body ,Right , Icon , Button , Header, Title} from 'native-base'

import {WebView} from 'react-native-webview'

const ModalComponent = (props) => {

    const url = props.articleData.url ; 

    const handleClose = () =>{
        return props.onClose();
    }

    return(
        <Modal
            animationType = "slide"
            transparent
            visible = {props.visibility}
            onRequestClose = {handleClose}
        >
            <Container style = {{margin : 15 , marginBottom : 0 , backgroundColor : '#fff'}}>
                <Header style = {{backgroundColor : '#009387'}}>
                    <Left>
                        <Button onPress = {handleClose} transparent>
                            <Icon name = "close" style={{color : 'white' , fontSize : 12}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title children = {props.articleData.title} style={{color : 'white'}} />
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <WebView 
                    source = {{uri : url}} 
                    style = {{flex : 1}}
                    onError = {handleClose}
                    startInLoadingState
                    scalesPageToFit
                    />
                </Content>
            </Container>
        </Modal>
    );
}

export default ModalComponent;