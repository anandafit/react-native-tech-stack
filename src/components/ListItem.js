/**
 * Created by ananda on 1/21/19.
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common/CardSection'
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component {
  render() {
    console.log(this.props);
    return (
      <CardSection>
        <Text style = { styles.titleTextStyle }> { this.props.library.title }</Text>
      </CardSection>
    )
  }
}

const styles = {
  titleTextStyle : {
    fontSize : 18,
    paddingLeft: 15
  }
};

export  default connect(null, actions)(ListItem);

