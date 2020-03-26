import * as algorithm from './util/Algorithm';
import * as animateElement from './util/AnimateElement';
import * as animateTiming from './util/AnimateTiming';
import * as array from './util/Array';
import * as browser from './util/Browser';
import * as device from './util/Device';
import * as element from './util/Element';
import * as event from './util/Event';
import * as html from './util/HTML';
import * as is from './util/IS';
import * as load from './util/Load';
import * as math from './util/Math';
import * as navigator from './util/Navigator';
import * as page from './util/Page';
import * as plugin from './util/Plugin';
import * as regExp from './util/RegExp';
import * as string from './util/String';
import * as tool from './util/Tool';
import * as url from './util/URL';

import Event from './class/Event';
import FullScreen from './class/FullScreen';
import Graph from './class/Graph';
import HeightTranslation from './class/HeightTranslation';
import HoverSelect from './class/HoverSelect';
import MVVM from './class/MVVM';
import MVVMComponent from './class/MVVMComponent';
import mix from './class/mix';
import NotificationHelper from './class/NotificationHelper';
import ObserverAttribute from './class/ObserverAttribute';
import ObserverClassName from './class/ObserverClassName';
import ObserverMutation from './class/ObserverMutation';
import ObserverNode from './class/ObserverNode';
import ObserverObject from './class/ObserverObject';
import PopupDismiss from './class/PopupDismiss';
import ResponsiveIFrame from './class/ResponsiveIFrame';
import SharedWorkers from './class/SharedWorkers';
import WebWorker from './class/WebWorker';

const YX = {
  util: {
    algorithm,
    animateElement,
    animateTiming,
    array,
    browser,
    device,
    element,
    event,
    html,
    is,
    load,
    math,
    navigator,
    page,
    plugin,
    regExp,
    string,
    tool,
    url,
  },
  class: {
    Event,
    FullScreen,
    Graph,
    HeightTranslation,
    HoverSelect,
    mix,
    MVVM,
    MVVMComponent,
    NotificationHelper,
    ObserverAttribute,
    ObserverClassName,
    ObserverMutation,
    ObserverNode,
    ObserverObject,
    PopupDismiss,
    ResponsiveIFrame,
    SharedWorkers,
    WebWorker,
  },
  event: new Event(),
};

export default YX;
