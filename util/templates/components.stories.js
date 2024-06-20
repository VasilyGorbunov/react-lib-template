module.exports = (componentName) => ({
  name: "components",
  content: `import React from 'react';

import { ${componentName} } from './components';

export default {
    title: '${componentName}',
    component: '${componentName}'
};

`,
  extension: `.stories.tsx`,
});
