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

import Event from './components/Event';
import FullScreen from './components/FullScreen';
import Graph from './components/Graph';
import HeightTranslation from './components/HeightTranslation';
import HoverSelect from './components/HoverSelect';
import MVVM from './components/MVVM';
import MVVMComponent from './components/MVVMComponent';
import mix from './components/mix';
import NotificationHelper from './components/NotificationHelper';
import ObserverAttribute from './components/ObserverAttribute';
import ObserverClassName from './components/ObserverClassName';
import ObserverMutation from './components/ObserverMutation';
import ObserverNode from './components/ObserverNode';
import ObserverObject from './components/ObserverObject';
import PopupDismiss from './components/PopupDismiss';
import ResponsiveIFrame from './components/ResponsiveIFrame';
import SharedWorkers from './components/SharedWorkers';
import WebWorker from './components/WebWorker';

const YX = {
  Util: {
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
  event: new Event(),
};

export default YX;
