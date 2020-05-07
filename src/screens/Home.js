import React, { memo } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { addItem, removeItem } from '../redux/actions/FoodDataActions';
import { FoodData } from '../helpers/foodData';
import { Item } from '../components/FoodItem/FoodItem';
import { stylesHome } from '../components/FoodItem/styles';
import { Button } from '../components/Button';

const Home = memo((props) => {
    const { data, navigation } = props;
    const checkActive = data.length > 0 ? stylesHome.activeTextButton : stylesHome.disableTextButton;
    const checkOpacity = data.length > 0 ? 0.2 : 1.0;
    const onPress = data.length > 0 ? () => navigation.navigate('Success') : null;

    const handleItem = (id) => {
        if (!data.includes(id)) {
            props.addItem(id);
        } else {
            props.removeItem(id);
        }
    };

    return (
        <View style={stylesHome.container}>
            <FlatList
                data={FoodData}
                columnWrapperStyle={stylesHome.column}
                style={stylesHome.listContainer}
                numColumns='3'
                renderItem={({ item }) => ( <Item {...item} handleItem={handleItem} data={data} /> )}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={<View style={{ paddingBottom: 100 }} />}
                extraData={data}
            />

            <LinearGradient colors={[ 'rgba(252,250,250,0.2)', 'rgba(252,250,250,0.5)', 'rgba(252,250,250,1)' ]}
                 style={stylesHome.buttonContainer}
            >
                <Button checkOpacity={checkOpacity} onPress={onPress} checkActive={checkActive}>Далее</Button>
            </LinearGradient>
        </View>
    )
});

const mapStateToProps = (state) => {
    return {
        data: state.foodData.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (id) => dispatch(addItem(id)),
        removeItem: (id) => dispatch(removeItem(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);