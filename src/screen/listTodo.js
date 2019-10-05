import React, { Component, Fragment } from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from "react-native";

import { connect } from 'react-redux';

class listTodo extends Component {
    render() {
        const {todos} = this.props
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                <FlatList
                            horizontal={false}
                            contentContainerStyle={{alignSelf: 'center', paddingTop: 50}}
                            data={todos}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => 
                                <Text>{item}</Text>

                    }
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10,  }}>
                    <TouchableOpacity style={{backgroundColor:'grey'}} onPress={()=> this.props.navigation.navigate('CreateTodo')}> 
                        <View>
                            <Text> Add New List </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
})
export default connect(mapStateToProps)(listTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});