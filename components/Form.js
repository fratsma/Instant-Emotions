import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, Keyboard, KeyboardAvoidingView, Modal, modalVisibile, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from './AppButton';
// import { ScrollView } from 'react-native';
// import { View } from 'react-native';
import Screen from './Screen';
import colours from '../config/colours';
import { Formik, Field, Form } from 'formik';
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Moment from 'moment';
import {getImage} from '../config/images'
import DailyView from './DailyView';
import * as yup from 'yup';
import { AntDesign } from '@expo/vector-icons';
import { defaultConfiguration } from 'express/lib/application';

export default function FormikInput(props) {
            return(

                <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
              >
          
                          <View style={styles.whiteBackground}>
                              
                          <Text style={styles.subText}>Why are you feeling {values.feeling}?</Text>
          
              
                          <View style={styles.viewInput}>
                              <TextInput 
                                  style={styles.input}
                                  onChangeText={handleChange("reason")}
                                  onChange={(e) => setReasonText(e.target.value)}
                                  maxLength={19}
                                  // clearButtonMode="always"    
                                  value={reasonText}                    
                                  
                              />
                          </View>
              
              
              
                          <Text style={styles.subText}>Rate your mood: {values.mood}</Text>
              
                          <View style={styles.viewScore}>
                              <View style={styles.spacesBetween2}>
                                  <TouchableOpacity 
                                          onPress={() => {setFieldValue("mood", "1"); setFieldValue("time", Date())}}>
                                      <Text style={styles.mainText}>1</Text>
                                  </TouchableOpacity>
                              </View>   
              
                              <View style={styles.spacesBetween2}>
                                  <TouchableOpacity  
                                          onPress={() => {setFieldValue("mood", "2"); setFieldValue("time", Date())}}>
                                      <Text style={styles.mainText}>2</Text>
                                  </TouchableOpacity>
                              </View> 
              
              
                              <View style={styles.spacesBetween2}>
                                  <TouchableOpacity 
                                          onPress={() => {setFieldValue("mood", "3"); setFieldValue("time", Date())}}>
                                      <Text style={styles.mainText}>3</Text>
                                  </TouchableOpacity>
                              </View> 
              
              
                              <View style={styles.spacesBetween2}>
                                  <TouchableOpacity 
                                          onPress={() => {setFieldValue("mood", "4"); setFieldValue("time", Date())}}>
                                      <Text style={styles.mainText}>4</Text>
                                  </TouchableOpacity>
                              </View> 
              
              
                              <View style={styles.spacesBetween2}>
                                  <TouchableOpacity 
                                          onPress={() => {setFieldValue("mood", "5"); setFieldValue("time", Date())}}>
                                      <Text style={styles.mainText}>5</Text>
                                  </TouchableOpacity>
                              </View> 
                          </View>      
              
              
              
              
              
              
                          <View style={styles.gap}>
                              <AppButton type="submit" onPress={handleSubmit} title="submit"/>
          
          
          
                              
                          
                          </View>
          
                          </View>
                          </KeyboardAvoidingView>);
                          
}
