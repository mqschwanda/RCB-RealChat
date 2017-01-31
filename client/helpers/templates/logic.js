// check if two values are equal to eachother
Template.registerHelper('equals', (valueOne, valueTwo) => {
  return valueOne === valueTwo;
});
// check if two values are not equal to eachother
Template.registerHelper('notEqual', (valueOne, valueTwo) => {
  return valueOne !== valueTwo;
});
// build 'or' conditional with two values
Template.registerHelper('or', (valueOne, valueTwo) => {
  return valueOne || valueTwo;
});
// build 'and' conditional with two values
Template.registerHelper('and', function(valueOne, valueTwo) {
  return valueOne && valueTwo;
});
