import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { RadioButton } from 'react-radio-buttons';
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Register</Text>
            </View>
            <View style={styles.Illustration4}>
                <Image
                    source={require('../assets/Illustration4.png')}
                />
            </View>
            <View style={styles.VInputfields} >
                <View style={styles.inputfields}>
                    <View style={styles.name}>
                        <Image
                            source={require('../assets/IconName.png')}
                        />
                        <TextInput style={styles.textinput}></TextInput>
                    </View>
                    <View style={styles.email}>
                        <Image
                            source={require('../assets/IconEmail.png')}
                        />
                        <TextInput style={styles.textinput}></TextInput>
                    </View>
                    <View style={styles.password}>
                        <Image
                            source={require('../assets/IconPassword.png')}
                        />
                        <TextInput style={styles.textinput}></TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.conditions}>
                <RadioButton>
                    <Text style={styles.textConditions}>I hereby agree to the T&C and Privacy Policy.</Text>
                </RadioButton>
            </View>
            <View style={styles.member}>
                <Text>Already a member? <View>
                        <TouchableOpacity >
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity></View>           here.
                </Text>
            </View>
            <View style={styles.VRegister}>
                <TouchableOpacity style={styles.buttonRegister} >
                    <Text style={styles.textRegister}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomWidth: 1,
        borderBlockColor: '#FFCCCC',
        marginTop: 18,
        height: 51,
        width: 375,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,

    },
    Illustration4: {
        alignItems: 'center',
        marginTop: 50,
    },
    VInputfields: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputfields: {
        alignItems: 'center',
        justifyContent: 'center',

        height: 190,
        width: 335,
        marginTop: 50,
    },
    name: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 4,
        paddingLeft: 12,
        height: 50,
        width: 335,
    },
    email: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 4,
        paddingLeft: 12,
        height: 50,
        width: 335,
        marginTop: 20,
    },
    password: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',     
        borderRadius: 4,
        paddingLeft: 12,
        height: 50,
        width: 335,
        marginTop: 20,
    },
    textinput:{
        marginLeft: 10,
    },
    conditions: {
        paddingLeft: 24,
        flexDirection: 'row',
        height: 20,
        width: 333,
        marginTop: 25,
    },
    buttonRadius: {
        padding: 1,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    textConditions: {
        marginLeft: 20,
        fontSize: 14,
    },
    member: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        fontSize: 14,
    },
    login: {
        color: 'blue',
        position: 'absolute',
        bottom: -4, 
    },
    VRegister: {
        marginTop: 110,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRegister: {
        borderRadius: 4,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 280,

    },
    textRegister: {
        color: 'white',
        fontSize: 13,
    },
});