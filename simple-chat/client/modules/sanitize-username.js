// export regex replace function
export default function(value) {
  return value.replace(/[^A-Za-z0-9\s]/g, '') // remove any punctuation from the passed value like !@#$%.
              .toLowerCase() // make sure that the value is all lowercase (i.e., avoid hEyYoUgUyS).
              .trim(); // strip out any whitespaces converting like this or this to likethisorthis.
}
