import { randomTextGenerator } from '@helpers/randomTextGenerator';
import { NotificationType } from '@srctypes/index';
import React, { useState } from 'react';
import MainScreen from './MainScreen';

const MainScreenContainer = () => {

    const [list, setList] = useState<NotificationType[]>([]);

    const addNewNotification = () => {
        // Simple ID Designation based on last item index
        const id = list.length
        ? list[list.length - 1].id + 1
        : list.length + 1;
        const wordsCount = Math.floor((Math.random() * 40) + 5);
		const newNotification: NotificationType = {
            id: id,
            title: `Notification ${id}`,
            message: randomTextGenerator(wordsCount),
		};

        setList([...list, newNotification]);
    };

    const deleteNotification = (id: number) => {
        const itemIndex = list.findIndex(item => item.id === id);
        if (itemIndex >= 0) {
            const newList = [...list];
            newList.splice(itemIndex, 1);
            setList(newList);
        };
    };

    return (
        <MainScreen 
			list={list}
			addNewNotification={addNewNotification}
			deleteNotification={deleteNotification}
		/>
    );
};

export default MainScreenContainer;
