import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import tw from 'twrnc';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => counter > 0 && setCounter(counter - 1);

  return (
    <View
      style={tw`flex flex-1 items-center justify-center relative bg-gray-900`}
    >
      <Text style={tw`text-2xl text-gray-100`}>{counter}</Text>

      <View style={tw`flex flex-row absolute bottom-0 right-0 mb-4 mr-4`}>
        <TouchableOpacity
          style={tw`bg-blue-500 flex items-center justify-center px-4 py-2 rounded mr-4`}
          onPress={handleIncrement}
        >
          <Text style={tw`text-lg text-white font-bold`}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-blue-500 flex items-center justify-center px-4 py-2 rounded mr-4`}
          onPress={handleDecrement}
        >
          <Text style={tw`text-lg text-white font-bold`}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-blue-500 flex items-center justify-center px-4 py-2 rounded`}
          onPress={() => setCounter(0)}
        >
          <Text style={tw`text-base text-white font-bold`}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
