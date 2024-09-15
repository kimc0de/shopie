import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';

import * as enums from './enums';
import styles from './styles';

export const Button = ({ title, type = enums.PRIMARY, size = enums.MEDIUM, onPress, children }) => {
  const isPrimary = type === enums.PRIMARY;
  const isSecondary = type === enums.SECONDARY;
  const isDanger = type === enums.DANGER;
  const isLink = type === enums.LINK;

  const isSmall = size === enums.SMALL;
  const isMedium = size === enums.MEDIUM;
  const isLarge = size === enums.LARGE;
  const isFullWidth = size === enums.FULL_WIDTH;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary && styles.primary,
        isSecondary && styles.secondary,
        isDanger && styles.danger,
        isLink && styles.link,
        isSmall && styles.small,
        isMedium && styles.medium,
        isLarge && styles.large,
        isFullWidth && styles.fullWidth,
      ]}
      onPress={onPress}
    >
      {children}
      <Text style={ [
        styles.text,
        (isSecondary || isLink) ? styles.darkText : styles.lightText,
      ]}>{title}</Text>
    </TouchableOpacity>
  );
};
