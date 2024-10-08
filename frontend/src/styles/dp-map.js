import {
    Dimensions,
    PixelRatio,
} from 'react-native';

// The provided design is based on a 375px screen width (common for mobile design)
const BASE_WIDTH = 375;

const {width: screenWidth} = Dimensions.get('window');
const scale = screenWidth / BASE_WIDTH;

/**
 * Accepts size in px value and returns the size in dp value based on the current screen resolution
 *
 *  @param {number} size
 */
export const toDp = (size) => {
    if (isNaN(size) || typeof size !== 'number') {
        console.warn('toDp: Size must be a number!');

        return 0;
    }

    const scaledSize = size * scale;

    return PixelRatio.roundToNearestPixel(scaledSize);
};
