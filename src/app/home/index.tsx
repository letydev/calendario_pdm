import { StyleSheet, Text, View } from 'react-native';
import {Calendar, DateData} from 'react-native-calendars'; //é um componente da biblioteca Calendars
import { style, styles } from "./style"
import {useState} from "react";
export  function Home() {
    const [day, setDay] = useState<DateData>()
return (
    <View style = {styles.container}>
        <Calendar style = {styles.calendar}//componente
            headerStyle = {{//é uma propreidade do componente calendars
                borderBottomWidth: 0.5,
                borderBottomColor: "#e8e8e8",
                paddingBottom: 10,
                marginBottom: 10,
            }}
            theme={{
                textMonthFontSize: 18,
                monthTextColor: "#e8e8e8",
                todayTextColor: "#05b9f5",
                selectedDayBackgroundColor: "#435af1",
                selectedDayTextColor: "#e8e8e8",
                calendarBackground: "transparent",
                textDayStyle: {color: "#e8e8e8"},
                textDisabledColor: "#717171",
            }}
        minDate={new Date().toDateString()}
        hideExtraDays = {true} //propriedade booleana, é para esconder os dias extras
        onDayPress={setDay} //seleciona o dia que esta e dps coloca a  bolinha
        markedDates={ day && { [day.dateString]: { selected: true }, }}
        // o primeiro ve se tem a data marcada se nao tiver ele seleciona o dia


        />
    </View>
);
}



