import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'





 class CounterApp extends React.Component {

 


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}



function mapStateToProps(state) {
    return{
        counter : state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return{
        increaseCounter : () => dispatach({ type : 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatach({ type: 'DECREASE_COUNTER' })        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
