import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Modal, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ContactShort from "./src/components/ContactShort";
import {getContacts, showContactInfo} from "./src/store/actions";
import Contact from "./src/components/Contact";

class App extends Component {

    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount() {
        this.props.onGetContacts();
    }

    currentContactHandler = (contact) => {
        this.props.onShowContactInfo(contact);
        this.setState({modalVisible: true});
    };


  render() {
    return (
      <View style={styles.container}>
          <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                alert('Modal has been closed.');
              }}
          >
              <View style={{marginTop: 22}}>
                  <View>
                      <View style={styles.contact}>
                          <Contact
                              photo={this.props.clickedContact.photo}
                              username={this.props.clickedContact.username}
                              phone={this.props.clickedContact.phone}
                              email={this.props.clickedContact.email}
                          />
                      </View>
                      <View style={styles.modalBtn}>
                          <TouchableOpacity
                              style={styles.btnClose}
                              onPress={() => {
                                  this.setModalVisible(!this.state.modalVisible);
                              }}>
                              <Text style={{textAlign: 'center', color: '#fff'}}>Back to List</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </Modal>

          <FlatList
              style={styles.content}
              data={this.props.contacts}
              renderItem={(info) => (
                  <ContactShort
                      username={info.item.username}
                      photo={info.item.photo}
                      pressed={() => this.currentContactHandler(info.item)}
                  />
              )}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 30
    },
    content: {
        padding: 10
    },
    contact: {
        padding: 10,
        height: '70%'
    },
    modalBtn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnClose: {
        width: '50%',
        padding: 10,
        backgroundColor: '#24a3ff'
    }
});

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        clickedContact: state.clickedContact
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetContacts: () => dispatch(getContacts()),
        onShowContactInfo: (contact) => dispatch(showContactInfo(contact))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);