import Button from './components/Button';
import Colors from './components/Colors';
export { Button, Colors };

module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
  return string.replace(/\s/g, "");
};
