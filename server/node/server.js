import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
const renderServer = (Component,props) => {
    return renderToString(React.createFactory(Component)(props));
};
export default renderServer