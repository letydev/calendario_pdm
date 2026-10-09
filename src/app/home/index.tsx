import { StyleSheet, Text, View } from 'react-native';
import {Calendar} from 'react-native-calendars'; //é um componente da biblioteca Calendars
import { style, styles } from "./style"
import {useState} from "react";
export  function Home() {
    const [day, setDay] = useState<DateData>(

    )
return (
    <View style = {styles.container}>
        <Calendar style = {styles.calendar}
            headerStyle = {{//é uma propreidade do componente calendars
                borderBottomWidth: 0.5,
                borderBottomColor: "#e8e8e8",
                paddingBottom: 10,
                marginBottom: 10,
            }}
            theme={{
                textMonthFontSize: 18,
                monthTextColor: "#e8e8e8",
                todayTextColor: "#f57505",
                selectedDayBackgroundColor: "#f57505",
                selectedDayTextColor: "#e8e8e8",
                calendarBackground: "transparent",
                textDayStyle: {color: "#e8e8e8"},
                textDisabledColor: "#717171"
            }}
        
        />
    </View>
);
}



