/**
 * Created by ananda on 1/20/19.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem = (library) => {
    console.log("library ====>", library);
    return (
      <ListItem
      library = { library.item }
    />
    )
  };

  render() {
    console.log(this.props.libraries);
    return (
      <FlatList
      data = {this.props.libraries}
      renderItem = { this.renderItem }
      keyExtractor = { library => library.id }
    />
    )
  }
}

const mapStateToProps = state => {
  return {libraries : state.libraries};
};

export default connect(mapStateToProps)(LibraryList);