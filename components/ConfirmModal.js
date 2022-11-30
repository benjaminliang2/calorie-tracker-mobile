import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux"


export const ConfirmModal = ({ title, action, actionName, value, setShowModal, showModal }) => {
    const dispatch = useDispatch()

    return <>
        {/* <View style={styles.centeredView}> */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setShowModal(!showModal);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>{title}</Text>
                    <View style={styles.buttonRow}>
                        <Button title="Cancel" onPress={() => setShowModal(false)} style={styles.cancelButton} />
                        <Pressable style={styles.actionButton} onPress={() => (dispatch(action(value)), setShowModal(false))}>
                            <Text style={styles.actionText}>{actionName}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
        {/* </View> */}
    </>
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    modalView: {
        // margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonRow: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    cancelButton: {
        flex: 1,

    },
    actionButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 26,
        borderRadius: 4,
        // flex: 1,

    },
    actionText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        
    }

})