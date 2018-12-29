import {FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import React from "react";
import {formatStringWithHtml} from "../../utils/format";

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

export const AssetList = ({ items, loading, dispatch, style }) => (
  <FlatList
    style={style}
    data={items}
    onEndReached={() => {
      // dispatch({type:'setValue',items:this.props.items.concat(article.items)})
    }}
    keyExtractor={item => item.id+''}
    refreshControl={
      <RefreshControl
        refreshing={loading}
        tintColor="gray"
        title="正在刷新"
        onRefresh={() => {
          // let items =this.props.items.concat(article.items);
          // dispatch({type:'setValue',items:items})
        }}/>}
    onEndReachedThreshold={200}
    renderItem={({item}) => <AssetItem item={item} dispatch={dispatch}/>}
  />
)

const styles = StyleSheet.create({
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
})

export default AssetList