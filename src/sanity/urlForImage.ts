// @ts-ignore
import { sanityClient } from 'sanity:client';

import imageUrlBuilder from '@sanity/image-url';

export const imageBuilder = imageUrlBuilder(sanityClient);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format');
