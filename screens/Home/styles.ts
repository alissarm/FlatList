import { ImageBackground, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',   

    },

    title:{
        color: '#e69a5c',
        fontSize: 25,
        fontWeight: 'bold', 
        marginTop: 50,
        paddingBottom: 10,
    },

    itemList:{
        color: '#000',
        backgroundColor: "#e5ffb8",
        borderRadius: 5,
        fontWeight: "400",

        width: '60%',
        margin: 10,
        padding: 10,
    },

    listEmptyText:{
        color: '#f0cdb1',
        fontWeight: "400",
        width: '60%',
        margin: 10,
        padding: 10,

    },
    checkbox:{

    }
});