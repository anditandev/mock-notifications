import { NotificationType } from '@srctypes/index';
import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native';

interface Props {
    item: NotificationType;
    deleteNotificationHandler: (id: number) => void;
};

const NotificationItem = (props: Props) => {

    const pressHandler = () => {
        props.deleteNotificationHandler(props.item.id);
    };

    return (
        <Pressable onPress={pressHandler} style={[styles.container]}>
            <Text style={[styles.textStyle, styles.titleStyle]}>
                {props.item.title}
            </Text>
            <Text style={[styles.textStyle, styles.messageStyle]}>
                {props.item.message}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: '#767676',
        borderBottomWidth: 1,
    },
    textStyle: {
        color: 'white',
    },
    titleStyle: {
        fontWeight: 'bold',
    },
    messageStyle: {
        marginVertical: 5,
    },
});

export default NotificationItem;
