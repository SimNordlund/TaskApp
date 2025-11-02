import { createElement } from "react";
const React = { createElement };

import { PlaceholderProperty } from "mendix/PlaceholderProperty";

import { Placeholder } from "mendix/widgets/web/Placeholder";
import { addEnumerations, asPluginWidgets, t } from "mendix";


const { $Placeholder } = asPluginWidgets({ Placeholder });

const region$Main = [
    <$Placeholder key="l.TaskTracker.FullScreenPopup.Main"
        $widgetId="l.TaskTracker.FullScreenPopup.Main"
        content={PlaceholderProperty({
            "id": "TaskTracker.FullScreenPopup.Main"
        })} />
];

export const content = {
    "Main": region$Main,
};
