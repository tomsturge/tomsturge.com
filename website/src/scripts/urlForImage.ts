// @ts-ignore
import { sanityClient } from "sanity:client";

import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(sanityClient);

export const urlForImage = (
  source: SanityImageSource,
  quality?: number = 80,
  format?: string = "webp",
) => imageBuilder.image(source).format(format).quality(quality);
