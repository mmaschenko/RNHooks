'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

/**
 * Loader Screen with opacity to block user activity
 */

type _t_loaderOverlay = {
  customBackground: string,
  showOverlay: boolean
};

const LoaderOverlay = (props: _t_loaderOverlay): React.Element<*> => {
  let customBackground = props.customBackground ? { backgroundColor: props.customBackground } : {};
  if (props.showOverlay) {
    return (
      <View style={props.showOverlay ? [styles.spinner, customBackground] : styles.hide}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  } else {
    return null;
  }

};

export default LoaderOverlay;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hide: {
    height: 0
  }

});


