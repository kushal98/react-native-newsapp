import React , {useState , useEffect} from 'react'
import {Alert, ActivityIndicator , View } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

import { getArticles } from './news'
import DataItem from './dataItem';
import ModalComponent from './Modal'

const tab3 = () => {

    const [ articles , setArticles] = useState(null);
    const [loading , setLoading] = useState(true);
    const [modalVisible , setModalVisible] = useState(false);
    const [modalArticleData , setModalArticleData] = useState({});

    useEffect( function(){
        getArticles('technology').then(data => {
            setArticles(data);
            setLoading(false);
        }, 
        error => Alert.alert("Some error occured")
        )
        }, []);

    const handleItemData = (articleData) => {

        useEffect(function(){
            setModalVisible(false);
            setModalArticleData(articleData);
        });
    };

    const handleModalClose = () => {

        useEffect(function (){
            setModalVisible(false);
            setModalArticleData({});
        });
    };
    
    let i = 0;
    
    let view = loading ? 
                <View>
                    <ActivityIndicator animating= {loading} />
                    <Text style={{ marginTop: 'auto'}}>Please Wait...</Text>
                </View> 
                : (
                    <List
                dataArray = {articles}
                renderRow = { 
                    (item) => {
                        i = i+1;
                        return <DataItem key = {i} data = {item} onPress = {handleItemData} />
                    }
                }
                />
                );

    
    return(
        <Container>
            <Content>
                {view}
            </Content>
            <ModalComponent 
                visibility = {modalVisible}
                articleData = {modalArticleData}
                onClose = {handleModalClose}
            />
        </Container>
    );
}

export default tab3;