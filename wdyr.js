import React from 'react';

if (__DEV__) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const ReactRedux = require('react-redux');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOnDifferentValues: true,
    trackExtraHooks: [[ReactRedux, 'useSelector']],
  });
}
