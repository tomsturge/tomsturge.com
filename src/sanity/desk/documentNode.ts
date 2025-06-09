import type { SanityDocument } from "sanity";
import type { DefaultDocumentNodeResolver } from "sanity/structure";
import { Iframe } from "sanity-plugin-iframe-pane";

export const documentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: ExtendedSanityDocument) => getPreviewUrl(doc),
            reload: {
              button: true,
            },
          })
          .title(`Preview`),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

interface ExtendedSanityDocument extends SanityDocument {
  slug: { current?: string };
  _type: string;
}

function getPreviewUrl(doc: ExtendedSanityDocument) {
  let url = window.location.origin;
  const docSlug = doc?.slug as { current?: string };

  if (!docSlug.current) {
    return url;
  }

  const { _type } = doc;

  if (_type === `article`) {
    url += `/articles`;
  }

  return `${url}/${docSlug.current}?preview=true`;
}
