import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { appointments } from "../../utils/appointments";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState(0);

  function handleCategorySelect(categoryId: number) {
    categoryId === category ? setCategory(0) : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total: (6)" />
        <FlatList 
          data={appointments} 
          keyExtractor={item => item.id.toString()} 
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}