import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
    },
    button: {
        // backgroundColor: 'rgba(123,104,238,0,8)',
        backgroundColor: "#7e19ff",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: "white",
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
        color: "white",
        letterSpacing: 0.5,
    },
    buttonContainer: {
        justifyContent: "center",
        height: height / 3,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 25,
        borderColor: "rgba(0,0,0,.2)",
        paddingLeft: 10,
    },
    formButton: {
        backgroundColor: "#7e19ff",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 35,
        borderWidth: 1,
        // borderColor: "white",
        shadowColor: "#0000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        borderRadius: 20

    },
    formInputContainer: {},
});
