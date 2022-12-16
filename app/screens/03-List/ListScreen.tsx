import {FlatList} from 'react-native';
import React, {useState} from "react";
import ListItem from "../../components/Listitem";
import Screen from "../Screen";
import ListItemSeparator from "../../components/ListitemSeperator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";

const initialMessages = [
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
  // const array = useState(0);
  // const count = array[0];
  // const setCount = array[1];
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    // Delete the message from messages
    const newMessages = messages.filter(m => m.id !== message.id);
    console.log(newMessages)
    setMessages(newMessages);
  }

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
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                  />
                )}
                // ItemSeparatorComponent={() =>
                //   <View style={{width: '100%', height: 1, backgroundColor: '#000'}}/>
                // }
                ItemSeparatorComponent={ListItemSeparator}

      />
    </Screen>
  );
}