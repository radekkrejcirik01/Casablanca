import React from 'react';
import { Text, View } from 'react-native';
import { LoginHeaderStyle } from '@components/general/LoginHeader/LoginHeader.style';
import { Icon } from '@components/icon/Icon';
import { IconEnum } from '@components/icon/Icon.enum';

export const LoginHeader = (): JSX.Element => (
    <View style={LoginHeaderStyle.container}>
        <Icon name={IconEnum.FLASH} />
        <Text style={LoginHeaderStyle.text}>Casablanca</Text>
    </View>
);