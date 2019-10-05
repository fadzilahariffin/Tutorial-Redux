import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Planning
import ListTodoScreen from '../screen/listTodo';
import CreateTodoScreen from '../screen/createTodo';

const AppNavigator = createStackNavigator(
    {
        ListTodo: ListTodoScreen,
        CreateTodo: CreateTodoScreen,
    },
    { 
        headerMode: 'none',
    }
)


export default createAppContainer(AppNavigator);