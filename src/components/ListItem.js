/**
 * Created by ananda on 1/21/19.
 */

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common/CardSection'
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.library.id === this.props.selectedLibraryId){
      return(
        <CardSection><Text style = { { flex: 1}}> {this.props.library.description} </Text></CardSection>
      )
    }
  }

  render() {
    console.log(this.props.library.id);
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress = { () => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style = { styles.titleTextStyle }> { title }</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = {
  titleTextStyle : {
    fontSize : 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId : state.selectedLibraryId}
};
export  default connect(mapStateToProps, actions)(ListItem);

