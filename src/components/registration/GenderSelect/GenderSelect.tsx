import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { GenderSelectStyle } from '@components/registration/GenderSelect/GenderSelect.style';
import COLORS from '@constants/COLORS';
import { TouchableOpacity } from '@components/general/TouchableOpacity/TouchableOpacity';
import { GenderSelectEnum } from '@components/registration/GenderSelect/GenderSelect.enum';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerProps } from '@store/index.props';
import { setGenderAction } from '@store/RegistrationReducer';

export const GenderSelect = (): JSX.Element => {
    const gender = useSelector(
        (state: ReducerProps) => state.registration.gender
    );

    const dispatch = useDispatch();

    const femalePress = () => {
        dispatch(setGenderAction(GenderSelectEnum.WOMAN));
    };

    const malePress = () => {
        dispatch(setGenderAction(GenderSelectEnum.MAN));
    };

    return (
        <View style={GenderSelectStyle.container}>
            <TouchableOpacity
                onPress={femalePress}
                style={GenderSelectStyle.row}
            >
                <Text style={GenderSelectStyle.text}>Woman</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === GenderSelectEnum.WOMAN}
                    style={GenderSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={malePress} style={GenderSelectStyle.row}>
                <Text style={GenderSelectStyle.text}>Man</Text>
                <CheckBox
                    disabled={false}
                    tintColor={COLORS.WHITE}
                    onTintColor={COLORS.WHITE}
                    onCheckColor={COLORS.WHITE}
                    value={gender === GenderSelectEnum.MAN}
                    style={GenderSelectStyle.checkBox}
                    onAnimationType="one-stroke"
                    offAnimationType="fade"
                    lineWidth={1.85}
                    animationDuration={0.4}
                />
            </TouchableOpacity>
        </View>
    );
};
