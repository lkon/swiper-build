/**
 * Swiper 6.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 25, 2020
 */

import Swiper from './esm/components/core/core-class';
export { default as Swiper, default } from './esm/components/core/core-class';
export { default as Navigation } from './esm/components/navigation/navigation';
export { default as Pagination } from './esm/components/pagination/pagination';
export { default as Autoplay } from './esm/components/autoplay/autoplay';
export { default as EffectFade } from './esm/components/effect-fade/effect-fade';

// Swiper Class
var components = [];
Swiper.use(components);
