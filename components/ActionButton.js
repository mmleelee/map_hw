import React from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionScreen from '../screens/ActionScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;

  return (
    <>
      <Pressable onPress={onOpen}>
        <Center bg="#f8f9fa" borderRadius={60} p={3 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="#606c38">
          <MaterialCommunityIcons name={"bicycle"} size={30 * zoomRatio} color="#606c38" />
        </Center>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </>
  );
}
