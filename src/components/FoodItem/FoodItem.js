import React, { memo, Fragment } from 'react';
import  { TouchableOpacity, View, Image, Text } from 'react-native';
import { stylesHome } from './styles';
import Circle from '../../assets/selected.png';
import CheckMark from '../../assets/mark.png';

export const Item = memo((props) => {
    const { id, image, handleItem, data } = props;

    return (
        <TouchableOpacity onPress={() => handleItem(id)} style={stylesHome.item}>
            <Image source={image}/>

            {data.includes(id) ?
                <Fragment>
                    <Image style={stylesHome.imageCircle} source={Circle}/>
                    <Image style={stylesHome.imageCheck} source={CheckMark}/>
                </Fragment> : null
            }
        </TouchableOpacity>
    )
});