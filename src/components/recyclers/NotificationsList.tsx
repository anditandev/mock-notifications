import { NotificationType } from '@srctypes/index';
import React from 'react';
import {
    FlatList,
    ListRenderItem,
} from 'react-native';
import NotificationItem from './items/NotificationItem';

interface Props {
    list: NotificationType[];
    deleteNotificationHandler: (id: number) => void;
};

const NotificationsList = (props: Props) => {
    const renderItem:ListRenderItem<any> = (item) => {

        return (
            <NotificationItem 
                item={item.item}
                deleteNotificationHandler={props.deleteNotificationHandler}
            />
        );
    };

    return (
        <FlatList 
            data={props.list}
            renderItem={renderItem}
        />
    );
};

export default NotificationsList;
