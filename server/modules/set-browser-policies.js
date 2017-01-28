export default function() {
  // allow all content types from the specified origin domain.
  BrowserPolicy.content.allowOriginForAll('*');
}
