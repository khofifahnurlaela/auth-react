import { createSlice } from "@reduxjs/toolkit";
import { StyleSheet } from "react-native";

const styleSlice = createSlice({
    name: 'global-style',
    initialState: {
        globalStyle: StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: 'pink',
                justifyContent: 'center',
                padding: 16,
                alignItems: 'center',
              },
              space: {
                  flexDirection: 'row',
                  padding: 8,
                  alignItems: 'center'
              },
              title: {
                  marginLeft: 8,
                  color: '#852884',
                  fontSize: 18,
                  fontWeight: 'bold',
                  // flex:1,
              }
        })
    },
    reducer: {

    }
})

const StyleReducer = styleSlice.reducer;

export default StyleReducer;