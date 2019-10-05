import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import AppNavigator from './navigation/route'
import { store, persistor } from './store'

export default class App extends React.Component {

  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#6C0396"/>
    </View>
  )

  render() {
    console.disableYellowBox = true
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})