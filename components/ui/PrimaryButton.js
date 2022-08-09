import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../screens/constants/colors';
function PrimaryButton({children, onPress}){

    return (
        <View style={styles.outer}>
        <Pressable 

        style={({pressed})=> pressed 
        ? [styles.inner, styles.pressed]:
        styles.inner } onPress={onPress} android_ripple={{color:'#b40d15'}}>
        
                <Text style={styles.text}>{children}</Text>
         
        </Pressable>
        </View>
    );
    
}

export default PrimaryButton; 

const styles = StyleSheet.create({
    outer: {
   
    },
    inner: {
        backgroundColor: Colors.primary,
        margin:16,

        borderRadius:100,
        paddingVertical: 16,
        paddingHorizontal: 16

    },
    text: {
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    pressed: {
        opacity: .75
    }
})