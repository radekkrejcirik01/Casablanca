import React from 'react';
import { ScrollView } from 'react-native';
import { SettingsListItem } from '@components/settings/SettingsListItem/SettingsListItem';
import COLORS from '@constants/COLORS';
import { SettingsListStyle } from '@components/settings/SettingsList/SettingsList.style';

export const SettingsList = (): JSX.Element => {
    const openAboutScreen = () => {};

    const toggleSwitch = (value: boolean) => {};

    const openDistanceScreen = () => {};

    const openHelpCenterScreen = () => {};

    const openCommunityRulesScreen = () => {};

    const openPrivacyPolicyScreen = () => {};

    const openAccountScreen = () => {};

    const LogOut = () => {};

    return (
        <ScrollView style={SettingsListStyle.container}>
            <SettingsListItem
                title="About Casablanca"
                description="Description"
                hasArrow
                onPress={openAboutScreen}
            />
            <SettingsListItem
                title="Push notification"
                hasSwitch
                toggleSwitch={toggleSwitch}
            />
            <SettingsListItem
                title="Distance"
                description="100km"
                hasArrow
                onPress={openDistanceScreen}
            />
            <SettingsListItem
                title="Help center"
                hasArrow
                onPress={openHelpCenterScreen}
            />
            <SettingsListItem
                title="Community rules"
                hasArrow
                onPress={openCommunityRulesScreen}
            />
            <SettingsListItem
                title="Privacy policy"
                hasArrow
                onPress={openPrivacyPolicyScreen}
            />
            <SettingsListItem
                title="Account"
                hasArrow
                onPress={openAccountScreen}
            />
            <SettingsListItem
                title="Log Out"
                hasArrow
                onPress={LogOut}
                style={SettingsListStyle.lastItem}
            />
        </ScrollView>
    );
};
