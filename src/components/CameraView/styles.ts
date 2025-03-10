import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
        width: '100%', 
        height: '100%'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    takePhoto:{
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    takePhotoText:{
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    }
});

export default styles;