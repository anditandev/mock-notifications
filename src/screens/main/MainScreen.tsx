import MainTextButton from '@components/buttons/MainTextButton';
import NotificationsList from '@components/recyclers/NotificationsList';
import { NotificationType } from '@srctypes/index';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
} from 'react-native';

interface Props {
    list: NotificationType[];
    addNewNotification: () => void;
    deleteNotification: (id: number) => void;
};

const MainScreen = (props: Props) => {

    return (
        <SafeAreaView style={[styles.mainContainer]}>
            <View style={[styles.buttonsContainer]}>
                <MainTextButton pressHandler={props.addNewNotification} text='Add Notification'/>
            </View>
            <View style={[styles.listContainer]}>
                <NotificationsList
                    list={props.list}
                    deleteNotificationHandler={props.deleteNotification}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2B2B2B',
    },
    buttonsContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    listContainer: {
        flex: 1,
        marginTop: 10,
        borderTopColor: '#767676',
        borderTopWidth: 1,
    },
});

export default MainScreen;
