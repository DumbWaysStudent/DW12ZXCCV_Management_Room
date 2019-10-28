import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'
import  { PRIMARY_COLOR } from '../../config/constant/color'
import Icon from 'react-native-vector-icons/AntDesign'

const Login = () => {
    const [username, setusername] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [loadin,setIsLoading]   = React.useState(false)
    const handleLoginClick = (e) => {
        
    } 
    
  return (
      <>
        <View style={styles.container}>

            <View style={styles.lead}>
                <View style={styles.logo}>
                    <Icon name="home" style={styles.logoIcon} />
                </View>
                <Text style={styles.logoText}>iRoom</Text>
            </View>

            <View style={styles.form}>
                <View style={[styles.formGroup,{marginTop : 30}]}>
                    <Text style={styles.formLabel}>Username</Text>
                    <TextInput style={styles.formInput} />
                
                </View>
                <View style={[styles.formGroup,{marginTop : 20}]}>
                    <Text style={styles.formLabel}>Password</Text>
                    <TextInput style={styles.formInput} />
                </View>
                <TouchableOpacity onPress={handleLoginClick}>
                <View style={styles.formButton}>
                    <Text style={{color:'whitesmoke',fontSize: 17}}>Login</Text>
                </View>
                </TouchableOpacity>
            </View>

        </View>
      </>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#f4f4f4'
    },
    lead : {
        flex: 1.5,
        backgroundColor : PRIMARY_COLOR,
        justifyContent : 'center',
        borderBottomRightRadius : 100
    },
    logo : {
        width : 75,
        height : 75,
        alignSelf:'center',
        borderWidth : 3,
        borderColor : 'white',
        borderRadius:100,
        justifyContent: 'center',
        alignItems : 'center',
    },
    logoIcon : {
        color : 'white',
        fontSize : 40
    }, 
    logoText : {
        alignSelf : 'center',
        marginTop : 10,
        fontSize : 19,
        fontWeight : 'bold',
        color : 'whitesmoke',
        fontFamily : 'Monstserrat-Regular'
    },  
    form : {
        flex : 2,
        marginHorizontal : 30,
    },
    formLabel : {
        fontSize : 17,
        color : '#666'
    },
   
    formInput : {
        marginTop : 10,
        backgroundColor : 'white'
    },
    formButton :{ 
        width : '100%',
        backgroundColor:PRIMARY_COLOR,
        padding : 15,
        marginTop : 25,
        borderRadius : 3,
        alignItems : 'center'
    }
})

export default Login;
