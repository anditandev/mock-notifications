import React from 'react';
import {
    Pressable,
  	StyleSheet,
		Text,
} from 'react-native';

interface Props {
	text: string;
	pressHandler: () => void;
};

const MainTextButton = (props: Props) => {

    return (
        <Pressable onPress={props.pressHandler} style={[styles.container]}>
			<Text style={[styles.textStyle]}>
				{props.text}
			</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
		backgroundColor: '#B539F7',
		paddingHorizontal: 20,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
    },
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export default MainTextButton;
