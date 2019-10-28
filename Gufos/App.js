/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component } from 'react';
//
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            
            <View style={styles.sectionContainer}>
              <Text style={styles.amarelo}>hello world :)</Text>

              <Button
              justifyContent='flex-end'
              title="Press me"
              onPress={() => Alert.alert('botones')}
              />
              {/* <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text> */}
            </View>

            <View style={{alignSelf: 'center', height: 200, alignItems:'center'}}>
            <Image 
            style={{width: 200, height: 200, }}
            source={{uri:'https://novonegocio.com.br/wp-content/uploads/2011/10/Como-Criar-Patos.jpg'
            
            }}
/>
              </View> 

            


            
           

          
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'blue',
    height: 100
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  amarelo: {
    color: 'yellow',
    fontSize: 25,
    textAlign: 'center',
    // fontFamily: 'Trebuchet MS',
  },

  botao: {
    justifyContent: 'flex-end',
    width: 50,
    color: 'red'
  }

  // azul: {
  //   color: 'blue',

  // }
});

export default App;
