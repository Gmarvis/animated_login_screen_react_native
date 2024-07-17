import {Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    button: {
        backgroundColor: 'rgb(244, 107, 53)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        // borderWidth: 1,
        borderColor: 'white'
    },
    absoluteFill: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        letterSpacing: 0.5
    },
    buttonContainer: {
        justifyContent: "center",
        height: height / 4,
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(244, 107, 53)',
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        paddingLeft: 20
    },
    formButton: {
        backgroundColor: 'rgb(244, 107, 53)',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    formInputContainer: {
        marginBottom: 50,
        // ...styles.absoluteFill,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: -1,
        justifyContent: 'center',
    
    },
    closeButtonContainer: {
        marginBottom: 70,
        height: 40,
        width: 40,
        justifyContent: "center",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 1,
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 20,
        top: -20,
        color: "#7e19ff",
    },
});
