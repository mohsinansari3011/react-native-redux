import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';






export default class CounterApp extends React.Component {

    state = {
        counter: 0
    }

    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    decreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.increaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>{this.state.counter}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


function mapStateToProps(state) {
return{
    counter:state.counter
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
