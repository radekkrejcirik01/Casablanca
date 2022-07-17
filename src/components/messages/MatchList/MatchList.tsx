import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { MatchListProps } from '@components/messages/MatchList/MatchList.props';
import { CardDataProps } from '@components/swipe/Swiper/Swiper.props';
import { MatchListStyle } from '@components/messages/MatchList/MatchList.style';
import { MatchItem } from '@components/messages/MatchItem/MatchItem';

export const MatchList = ({ data }: MatchListProps): JSX.Element => {
    const onPress = (item: CardDataProps) => {
        console.log(item.name);
    };
    return (
        <FlatList
            data={data}
            renderItem={(item: ListRenderItemInfo<CardDataProps>) => (
                <MatchItem
                    key={item.item.name}
                    item={item.item}
                    onPress={onPress}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={MatchListStyle.flatList}
        />
    );
};