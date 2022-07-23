import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import COLORS from '@constants/COLORS';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Continue } from '@components/registration/Continue/Continue';
import { Title } from '@components/general/Title/Title';
import { PhotosScreenStyle } from '@screens/registration/PhotosScreen/PhotosScreen.style';
import { PhotoPlaceholder } from '@components/registration/PhotoPlaceholder/PhotoPlaceholder';
import { RegistrationScreens } from '@navigation/RootStackNavigator/RootStackNavigator.enum';

export const PhotosScreen = (): JSX.Element => {
    const navigation = useNavigation();

    const continuePressed = () => {
        navigation.navigate(RegistrationScreens.FavePlacesScreen);
    };

    return (
        <SafeAreaProvider>
            <LinearGradient
                colors={[COLORS.MAIN_RED, COLORS.MAIN_BLUE]}
                locations={[0.15, 0.9]}
                style={PhotosScreenStyle.container}
            >
                <Title title="Choose photos" />
                <View style={PhotosScreenStyle.photoPlaceholderContainer}>
                    <PhotoPlaceholder />
                </View>
                <Continue onPress={continuePressed} />
            </LinearGradient>
        </SafeAreaProvider>
    );
};
