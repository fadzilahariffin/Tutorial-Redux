import React, { Component,Fragment } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView, 
    TextInput,
    TouchableOpacity,
} from "react-native";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo } from '../actions/todoAction'

class createTodo extends Component {
    state = {
        todo: ''
    }
    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.container}> 
                            <View style={{ flexDirection: 'row', marginHorizontal: 10,  }}>
                                <TextInput
                                    onChangeText={(todo) => this.setState({ todo })}
                                    placeholder="Eg. Create New List"
                                    style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                                />
                                <TouchableOpacity
                                onPress={()=>{this.props.addTodo(this.state.todo)
                                this.props.navigation.goBack()
                                }}
                                >
                                    <View style={{ height: 50,width:50, backgroundColor: '#eaeaea', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text> + </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );
    }
}
const mapStateToProps = state => ({
    todos: state.todos.todos
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addTodo
    }, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(createTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});