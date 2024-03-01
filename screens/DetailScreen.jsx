import { SafeAreaView, Text, View, StyleSheet } from "react-native"
import { useSelector } from "react-redux";

const DetailScreen = () => {
    const count = useSelector((state) => state.counter.count)
    const globalStyle = useSelector((state) => state.style.globalStyle);

    return (
        <SafeAreaView style={globalStyle.container}>
            {/* <Text style={styles.title}>This is Detail Screen</Text> */}
            <Text style={styles.title}>Count: {count}</Text>
        </SafeAreaView>
    )
}
export default DetailScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 16,
      alignItems: 'center',
    },
    title: {
        marginLeft: 8,
        // color: '#852884',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        // flex:1,
    },
});