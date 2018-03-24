import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ContactShort = (props) => {
    return (
        <TouchableOpacity onPress={props.pressed} style={styles.contact}>
            <View style={styles.contactInner}>
                <Image  resizeMode="contain" source={{uri: props.photo}} style={styles.image}/>
                <View style={styles.contactText}>
                    <Text>{props.username}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    contact: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#eee',
        marginVertical: 5,
        padding: 10
    },
    contactInner: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    contactText: {
        marginRight: 10
    }
});

export default ContactShort;