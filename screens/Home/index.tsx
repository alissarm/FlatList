import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";

export default function Home(){

    const [data, setData] = useState<string[]>([
            '3 pacotes de folha sulfite A4', '15 marcadores de texto', '20 Lápis', '10 apontadores', 
            '15 borrachas', '7 pacotes de post-it', '3 agendas'
        ]);

    return(
        // <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Lista de reposição de materiais para o mês de outubro</Text>
                
                <Text style={styles.itemList} >
                    25 canetas
                </Text>      
              
                {
                    data.map(item => (
                        <Text 
                            key={item}
                            style={styles.itemList}                            
                        >
                            { item }
                        </Text>
                    ))
                }
                
            </View>
        // </ScrollView>
    )
}