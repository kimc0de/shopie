import {
  Image,
  View,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';

import {styles} from './styles';

export const Highlights = () => {
  const [highlightsData, setHighlightsData] = useState([]);

  useEffect(() => {
    setHighlightsData([
      "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
      "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
      "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
    ])
  }, []);

  return (
    <ScrollView>
      <View style={styles.highlights_container}>
        <View style={styles.highlights_swiper_wrapper}>
          <Swiper
            style={styles.highlights_swiper}
            showsButtons={false}
            autoplay
            scrollEnabled
            autoplayTimeout={10}
          >
            {highlightsData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.highlights_image}
                  source={{uri: item}}
                />
              )
            })}
          </Swiper>
        </View>
      </View>
    </ScrollView>
  )
}
