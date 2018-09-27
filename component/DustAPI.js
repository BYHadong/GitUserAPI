import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class DustAPI extends Component {

    render() {
        let users = this.props.userData.map((data) => {
            return <Text style={styles.textstyle}>gitub User : {data}</Text>
        })
        alert("this is userData:"+ users)
        return (
            <View>
                <FlatList
                    data={users}
                    renderItem={ ({item}) => <Text> {item} </Text>}
                />
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        flex: 1,
        height: 30,
    }
})