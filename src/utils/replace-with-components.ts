const replaceComponentInPart = (
  part: string, key: string,
  component: JSX.Element,
) => part.split(key).reduce<Array<string | JSX.Element>>((list, ele, index, self) => {
  // remove empty strings (e.g. at the beginning)
  if (ele !== '') list.push(ele);

  // insert the component between splits
  if (index !== self.length - 1) list.push(component);
  return list;
}, []);

const replaceComponentInPartList = (
  parts: (string | JSX.Element)[],
  key: string,
  component: JSX.Element,
) => parts.reduce<Array<string | JSX.Element>>((list, part) => {
  const replacements = typeof part === 'string' ? replaceComponentInPart(part, key, component) : [part];
  list.push(...replacements);
  return list;
}, []);

// replace multiple components within a string
// from     'The age of {name} is {age}.', [['{name}', <b>Heidi</b>], [{age}, <b>24</b>]
// to       ['The age of ', <b>Heidi</b>, ' is ', <b>24</b>]
const replaceWithComponents = (text: string, components: [string, JSX.Element][]) => {
  let result: (string | JSX.Element)[] = [text];
  components.forEach(([key, component]) => {
    result = replaceComponentInPartList(result, key, component);
  });

  return result;
};

export default replaceWithComponents;
