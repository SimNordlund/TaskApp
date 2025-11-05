import { reactExports, jsxRuntimeExports, asProperty, pageScope, fromComputation$, ensure, asDynamicValue$, getFormExpressionResultFromStore$, toFriendlyId } from './index-4mfddfkU.js';

function PageFragment({ renderKey: key, children }) {
  const [previousKey, setKey] = reactExports.useState(key);
  return reactExports.useEffect(() => setKey(key), [key]), key !== previousKey ? null : jsxRuntimeExports.jsx(reactExports.Fragment, { children });
}

const ExpressionProperty = asProperty((config, store, widgetId) => {
  const [form$] = store.useSlot(pageScope, "form"), pageTitle$ = fromComputation$(`Form page title of ${widgetId}`, () => ensure(form$.dependOn())[0].getTitle());
  return asDynamicValue$(getFormExpressionResultFromStore$(`Value of ${toFriendlyId(widgetId)}`, config.expression, store, { pageTitle: pageTitle$ }));
});

const Placeholder = (props) => jsxRuntimeExports.jsx("div", { className: "mx-placeholder", children: props.content });

export { ExpressionProperty, PageFragment, Placeholder };
