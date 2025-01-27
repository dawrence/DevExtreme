import {
    TElement
} from '../core/element';

import {
    TPromise
} from '../core/utils/deferred';

import {
    template
} from '../core/templates/template';

import {
    ComponentEvent,
    ComponentInitializedEvent,
    ChangedOptionInfo
} from '../events/index';

import Widget, {
    WidgetOptions
} from './widget/ui.widget';

/** @public */
export type DisposingEvent = ComponentEvent<dxSlideOutView>;

/** @public */
export type InitializedEvent = ComponentInitializedEvent<dxSlideOutView>;

/** @public */
export type OptionChangedEvent = ComponentEvent<dxSlideOutView> & ChangedOptionInfo;

export interface dxSlideOutViewOptions extends WidgetOptions<dxSlideOutView> {
    /**
     * @docid
     * @type_function_param1 contentElement:dxElement
     * @default "content"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    contentTemplate?: template | ((contentElement: TElement) => any);
    /**
     * @docid
     * @type Enums.SlideOutMenuPosition
     * @default "normal"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    menuPosition?: 'inverted' | 'normal';
    /**
     * @docid
     * @type_function_param1 menuElement:dxElement
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    menuTemplate?: template | ((menuElement: TElement) => any);
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    menuVisible?: boolean;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    swipeEnabled?: boolean;
}
/**
 * @docid
 * @inherits Widget
 * @hasTranscludedContent
 * @module ui/slide_out_view
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxSlideOutView extends Widget {
    constructor(element: TElement, options?: dxSlideOutViewOptions)
    /**
     * @docid
     * @publicName content()
     * @return dxElement
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    content(): TElement;
    /**
     * @docid
     * @publicName hideMenu()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hideMenu(): TPromise<void>;
    /**
     * @docid
     * @publicName menuContent()
     * @return dxElement
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    menuContent(): TElement;
    /**
     * @docid
     * @publicName showMenu()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showMenu(): TPromise<void>;
    /**
     * @docid
     * @publicName toggleMenuVisibility()
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    toggleMenuVisibility(): TPromise<void>;
}

export type Options = dxSlideOutViewOptions;

/** @deprecated use Options instead */
export type IOptions = dxSlideOutViewOptions;
