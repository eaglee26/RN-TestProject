import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


const Success = memo((props) => {
    const { selectedItem } = props;
    console.log(selectedItem, 'selectedItem');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Success</Text>
            <Text style={{ fontSize: 25 }}>Selected Food:
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}> {selectedItem.join(',')}</Text>
            </Text>
        </View>
    )
});

const mapStateToProps = (state) => {
    return {
        selectedItem: state.foodData.data,
    }
};

export default connect(mapStateToProps)(Success);