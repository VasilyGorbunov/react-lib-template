module.exports = (componentName) => ({
  name: "components",
  content: `import React from 'react';

import type { ${componentName}Props } from './components.types';

import {} from './styled';

export const ${componentName}: React.FC<${componentName}Props> = () => (
    <div></div>
);
`,
  extension: `.tsx`,
});
