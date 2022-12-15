import {FlatList} from 'react-native';
import React from "react";
import ListItem from "../../app/components/Listitem";
import Screen from "../Screen";
import ListitemSeperator from "../../app/components/ListitemSeperator";

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    uri: 'https://picsum.photos/70/70'
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    uri: 'https://picsum.photos/70/70'
  },
];

export default function ListScreen04() {
  return (
    <Screen>
      <FlatList data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => (
                  <ListItem
                    title={item.title}
                    subTitle={item.description}
                    uri={item.uri}
                    onPress={() => console.log("Message selected", item)}
                  />
                )}
                // ItemSeparatorComponent={() =>
                //   <View style={{width: '100%', height: 1, backgroundColor: '#000'}}/>
                // }
                ItemSeparatorComponent={ListitemSeperator}

      />
    </Screen>
  );
}