import {FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View,} from "react-native"
import React from "react"
import {formatStringWithHtml} from "../../utils/format"
import {NavigationActions,} from "react-navigation"

const AssetItem = ({ item,dispatch, }) => {
  return <TouchableOpacity onPress={()=>dispatch(NavigationActions.navigate({ routeName: 'AssetDetail',params: item }))}>
    <View style={styles.item}>
      <Image style={styles.cover} source={{uri: item.cover}} />
      <View style={styles.itemRightContent}>
        <View>
          <Text style={styles.title}>{formatStringWithHtml(item.assetnum)}</Text>
          <Text style={styles.content}>{"型号:"+item.model}</Text>
        </View>
        <View>
          <View style={[styles.status,item.status === 1?{backgroundColor: '#1890FF'}:{backgroundColor: '#909399'}]}>
            <Text style={{color:'#fff',fontSize:12}}>{item.status === 1?"运行中":"已停机"}</Text>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
};

export const AssetList = ({ items, loading, dispatch,navigation, style }) => (
  <FlatList
    style={style}
    data={items}
    onEndReached={() => {

    }}
    keyExtractor={item => item.id+''}
    refreshControl={
      <RefreshControl
        refreshing={loading}
        tintColor="gray"
        title="正在刷新"
        onRefresh={() => {
          dispatch({type:'asset/fetch'})
        }}/>}
    onEndReachedThreshold={200}
    renderItem={({item}) => <AssetItem item={item} dispatch={dispatch} />}
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
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding:12,
    justifyContent: 'space-between',
  },
  status: {
    borderRadius: 10,
    padding:5,
    alignItems:'center',
  },
})

export default AssetList