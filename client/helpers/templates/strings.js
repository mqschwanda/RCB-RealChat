//  capitalize a string
Template.registerHelper('capitalize', (string) => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
});
// make string lowercase
Template.registerHelper('lowercase', (string) => {
  if (string) return string.toLowerCase();
});
// parse a string of markdown
Template.registerHelper('parseMarkdown', (string) => {
  if (string && parseMarkdown) return parseMarkdown(string);
});
