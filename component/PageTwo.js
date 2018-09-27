import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class PageTwo extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Text onPress={() => Actions.dustAPI()}>
                        뿡
                    </Text>
                </ScrollView>
            </View>
        )
    }
}