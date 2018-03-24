import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const Contact = (props) => {
    return (
        <View style={styles.contact}>
            <View style={styles.contactInner}>
                <Image  resizeMode="contain" source={{uri: props.photo}} style={styles.image}/>
                <View style={styles.contactText}>
                    <Text style={styles.textTitle}>{props.username}</Text>
                    <Text>Phone: {props.phone}</Text>
                    <Text>Email: {props.email}</Text>
                </View>
            </View>

        </View>
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
        width: '70%'
    },
    textTitle: {
        fontWeight: 'bold',
        color: '#0b80c8'
    }
});

export default Contact;