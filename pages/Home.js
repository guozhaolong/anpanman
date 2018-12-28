import React, { Component } from 'react'
import {StyleSheet, Image, View, Text, FlatList, Dimensions, RefreshControl, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import { Button } from '../components/Button'
import { formatStringWithHtml } from '../utils/format'
import FilterBar from "../components/FilterBar";

const {width,height} = Dimensions.get('window');

const AssetItem = ({ item }) => {
  return <TouchableOpacity>
    <View style={styles.item}>
      <Image style={styles.cover} source={{uri: item.cover}} />
      <View style={styles.itemRightContent}>
        <Text style={styles.title}>{formatStringWithHtml(item.assetnum)}</Text>
        <Text style={styles.content} numberOfLines={2}>{"型号:"+formatStringWithHtml(item.model)}</Text>
      </View>
    </View>
  </TouchableOpacity>
};

@connect(({ asset }) => ({ ...asset }))
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon: ({ focused, tintColor }) => (
      <FontAwesome name="home" size={24} color={focused ? '#409EFF' : 'gray'} />
    ),
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Monitor' }))
  }

  componentDidMount() {
    this.props.dispatch({type:'asset/fetch'})
  }

  render() {

    return (
      <View style={styles.container}>
        <FilterBar navigation={this.props.navigation}/>
        <FlatList
          style={{width: width,}}
          data={this.props.items}
          onEndReached={() => {
            // dispatch({type:'setValue',items:this.props.items.concat(article.items)})
          }}
          keyExtractor={item => item.id+''}
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              tintColor="gray"
              title="正在刷新"
              onRefresh={() => {
                // let items =this.props.items.concat(article.items);
                // dispatch({type:'setValue',items:items})
              }}/>}
          onEndReachedThreshold={200}
          renderItem={({item}) => <AssetItem item={item} dispatch={this.props.dispatch}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
  },
  cover: {
    width: 88,
    height: 66,
    marginRight: 10
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    color: '#000',
  },
  content: {
    paddingTop:5,
    fontSize: 12,
    color: '#999',
  },
  itemRightContent: {
    flex: 1,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding:12,
  },
});

export default Home
