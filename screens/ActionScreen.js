import React from 'react';
import {
   Box, VStack,
   Center,
   Text, Pressable,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { VictoryPie } from 'victory-native';

const ActionScreen = ({ onClose, site }) => {
   const {
      sna,
      sbi,
      sarea,
      mday,
      lat,
      lng,
      ar,
      bemp,
   } = site;

   const getTime = (m) => {
      const mday = String(m);
      const year = mday.slice(0, 4);
      const month = Number(mday.slice(4, 6));
      const date = Number(mday.slice(6, 8));
      const hour = Number(mday.slice(8, 10));
      const min = Number(mday.slice(10, 12));
      const sec = Number(mday.slice(12));
      const time = `${year}/${month}/${date} ${hour}:${min}:${sec}`;
      return time;
   }
   return (

      <VStack h="50%" w="100%" bg="#2f3e46" opacity={0.9} borderRadius={20} >
         <Pressable onPress={onClose} position="absolute" top={2} right={3}>
            <MaterialCommunityIcons name="close" color="#b8d8d8" size={30} />
         </Pressable>
         <Box borderBottomColor={"white"} w={"15%"} h={1} borderRadius={3} bg="gray" mt={3} alignSelf="center"></Box>
         <Text fontSize="lg" my={6} textAlign="center" color="#fffcf2">{sna}{" "}站</Text>
         <Box px={6} >
            <Text color="#ced4da"><Text fontWeight={'bold'} color="#ced4da">地址：</Text>{sarea}{" "}{ar}</Text>
            <Text mt={2} color="#ced4da"><Text fontWeight={'bold'} color="#ced4da">經度/緯度：</Text>{Number(lng).toFixed(2)}/{Number(lat).toFixed(2)}</Text>
            <Text mt={2} color="#ced4da"><Text fontWeight={'bold'} color="#ced4da">更新時間：</Text>{getTime(mday)}</Text>
            <Center>
               <VictoryPie
                  startAngle={90}
                  endAngle={-90}
                  width={250}
                  height={250}
                  colorScale={["#dee2e6","#6c757d" ]}
                  data={[
                     { x: 1, y: Number(sbi), label: `可借 (${sbi})` },
                     { x: 2, y: Number(bemp), label: `可還 (${bemp})` },
                  ]}
                  style={{
                     data: {
                        fillOpacity: 1
                     },
                     labels: {
                        fontSize: 12, fill: "#fffcf2",
                        padding: 10,

                     }
                  }}
               />
            </Center>
         </Box>

      </VStack>
   );
};

export default ActionScreen;
