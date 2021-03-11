/* eslint-disable */
import Event from './Event.js';
import {addClass, removeClass} from '../util/ClassName.js';

/**!
 * Javascript plugin: popupDismiss v5.6.0.20200201
 */
class Util {
	// Utils
	static findParent(element, selector)
	{
		let matches = (el, selector) => {
			return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
		};
		while ((element = element.parentElement) && !matches(element, selector))
		{
		}
		return element;
	}

	static hasClosest(el, parentElement)
	{
		if (el === parentElement)
		{
			return true;
		}
		if (parentElement === undefined)
		{
			return false;
		}

		let parents = [], p = el.parentNode;
		while (p !== parentElement && p.parentNode)
		{
			let o = p;
			parents.push(o);
			p = o.parentNode;
		}
		return p === parentElement;
	}

	static getSelectorsElements(selectorString)
	{
		if (!selectorString || (selectorString && selectorString.trim() === ''))
		{
			return [document];
		}
		let selectorsElements = [],
				selectorsArray = selectorString.split(',').map((selectorStringItem) => {
					return selectorStringItem.trim();
				});
		selectorsArray = Util.uniqueArray(selectorsArray);
		for (let i = 0, l = selectorsArray.length; i < l; i++)
		{
			if (selectorsArray[i] === 'document')
			{
				selectorsElements.push(document);
			}
			else
			{
				let scopeNodeList = [].slice.call(document.querySelectorAll(selectorsArray[i]));
				selectorsElements = selectorsElements.concat(scopeNodeList);
			}
		}
		return selectorsElements;
	}

	static uniqueArray(sourceArray)
	{
		let resultArray = [], hash = {};
		for (let i = 0, elem, l = sourceArray.length; i < l && (elem = sourceArray[i]) !== null; i++)
		{
			if (!hash[elem])
			{
				resultArray.push(elem);
				hash[elem] = true;
			}
		}
		return resultArray;
	}

	//Extend on/off methods
	static extendOnOff(el)
	{
		if (el.length === 0)
			return null;
		let events = {
			on: function (event, callback, opts) {
				if (!this.namespaces) // save the namespaces on the DOM element itself
					this.namespaces = {};

				this.namespaces[event] = callback;
				let options = opts || false;

				this.addEventListener(event.split('.')[0], callback, options);
				return this;
			},
			off: function (event) {
				this.removeEventListener(event.split('.')[0], this.namespaces[event]);
				delete this.namespaces[event];
				return this;
			}
		};

		// Extend the DOM with these above custom methods
		if (!el.isExtendOnOff)
		{
			el.on = Element.prototype.on = events.on;
			el.off = Element.prototype.off = events.off;
			el.isExtendOnOff = true;
		}
		return el;
	}

	static getElements(elements)
	{
		let resultElement = [];
		if (elements === undefined || elements === null)
		{
			resultElement = [];
		}
		else if (elements.jquery)
		{
			resultElement = elements.get();
		}
		else if (elements instanceof window.NodeList || elements instanceof NodeList || elements instanceof HTMLCollection)
		{
			resultElement = Array.prototype.slice.call(elements);
		}
		else if (Array.isArray(elements))
		{
			resultElement = elements.filter(function (element) {
				return element.nodeType === 1 || element.jquery;
			});
		}
		else if (elements.nodeType === 1)
		{
			resultElement = [elements];
		}
		else if (typeof elements === 'string')
		{
			resultElement = document.querySelectorAll(elements);
		}
		return resultElement;
	}
}

class PopupDismiss extends Event {
	constructor(elements, isDelegated = false)
	{
		// Event constructor
		super();

		this.name = 'popupDismiss';
		this.isTap = undefined;
		this.isDelegated = isDelegated;
		this.attr = {
			dataToggle: 'data-toggle',
			dataTarget: 'data-target',
			dataTargetParent: 'data-target-parent',
			dataDismissScope: 'data-dismiss-scope',
			dataToggleClass: 'data-toggle-class',
			dataPopupHandler: 'data-popup-handler',
			dataDismissHandler: 'data-dismiss-handler',
			dataIsPopup: 'data-isPopup',
			dataPopupDismiss: 'data-popup-dismiss',
		};
		this._elements = elements;
		this.popupEvent = this.popupEvent.bind(this);

		if (elements === undefined)
		{
			this.isDelegated = true;
			this.elements = [document.body];
		}
		else
		{
			this.elements = Util.getElements(elements);
		}
		[].forEach.call(this.elements, element => this.initElement(element));
	}

	initElement(element)
	{
		if ((this.isDelegated || element.getAttribute(this.attr.dataToggle) === this.name) && element.getAttribute(`data-${this.name}`) !== this.name)
		{
			element.setAttribute(`data-${this.name}`, this.name);
			element.addEventListener("click", this.popupEvent);
		}
	}

	popupTarget(dataTarget, triggerElement, dataTargetParent)
	{
		let targetElement = null;
		if (!!dataTargetParent)
		{
			let commonParent = Util.findParent(triggerElement, dataTargetParent);
			if (commonParent)
			{
				targetElement = commonParent.querySelector(dataTarget);
			}
		}
		else if (dataTarget === 'parent')
		{
			targetElement = triggerElement.parentNode;
		}
		else
		{
			targetElement = document.querySelector(dataTarget);
		}
		return targetElement;
	}

	popupEvent(event)
	{
		let popupTrigger = event.target,
				that = this;
		if (popupTrigger.getAttribute(this.attr.dataToggle) !== this.name)
		{
			popupTrigger = Util.findParent(popupTrigger, `[${this.attr.dataToggle}="${this.name}"]`);
		}
		if (!popupTrigger)
		{
			return ;
		}
		let dataDismissScope = popupTrigger.getAttribute(this.attr.dataDismissScope),
				dismissScopes = Util.getSelectorsElements(dataDismissScope),
				eventData = {
					type: event.type,
					namespace: popupTrigger.getAttribute(this.attr.dataTarget) + '-' + new Date().getTime(),
					popupTrigger: popupTrigger,
					popupTarget: this.popupTarget(popupTrigger.getAttribute(this.attr.dataTarget), popupTrigger, popupTrigger.getAttribute(this.attr.dataTargetParent)),
					toggledClass: popupTrigger.getAttribute(this.attr.dataToggleClass) || null, // Recommend: 'open'
					popupHandler: popupTrigger.getAttribute(this.attr.dataPopupHandler) || null,
					dismissHandler: popupTrigger.getAttribute(this.attr.dataDismissHandler) || null,
					dismissScopes: dismissScopes
				};

		// In dismissed status
		if (eventData.popupTarget.getAttribute(this.attr.dataIsPopup) !== 'true')
		{
			this.monitorTap();
			if (eventData.toggledClass)
			{
				addClass(eventData.popupTrigger, eventData.toggledClass);
				addClass(eventData.popupTarget, eventData.toggledClass);
			}
			eventData.popupTarget.setAttribute(this.attr.dataIsPopup, 'true');
			eventData.dismissScopes.forEach((scope) => {
				Util.extendOnOff(scope)
						.on(`${eventData.type}.${eventData.namespace}`, (newEvent) => {
							if (event === newEvent)
								return;
							let newEventData = {
								type: eventData.type,
								namespace: eventData.namespace,
								dismissTrigger: newEvent.target,
								popupTrigger: eventData.popupTrigger,
								popupTarget: eventData.popupTarget,
								toggledClass: eventData.toggledClass,
								dismissHandler: eventData.dismissHandler,
								dismissScopes: eventData.dismissScopes
							};
							that.dismiss(newEventData, true);
						});
			});

			this._eventHandler(eventData.popupHandler, eventData.popupTarget);

			PopupDismiss.setBodyCursorInIOS("pointer");
		}
		// In popped up status
		else
		{
			eventData.dismissTrigger = popupTrigger;
			that.dismiss(eventData);
		}
	}

	/**
	 * @param eventData
	 * @param notFromPopupTrigger
	 */
	dismiss(eventData, notFromPopupTrigger = false)
	{
		if (this.isTap === false)
			return;

		if ((!notFromPopupTrigger
				&& this.notDismissBypass(eventData.dismissTrigger, eventData.popupTrigger)) ||
				(!Util.hasClosest(eventData.dismissTrigger, eventData.popupTrigger)
						&& this.notDismissBypass(eventData.dismissTrigger, eventData.popupTarget)
						&& eventData.popupTarget.getAttribute(this.attr.dataIsPopup) === 'true'
				)
		)
		{
			if (eventData.toggledClass)
			{
				removeClass(eventData.popupTrigger, eventData.toggledClass);
				removeClass(eventData.popupTarget, eventData.toggledClass);
			}
			eventData.popupTarget.setAttribute(this.attr.dataIsPopup, 'false');
			eventData.dismissScopes.forEach((scope) => {
				scope.off(`${eventData.type}.${eventData.namespace}`, () => this.dismiss(eventData, true));
			});

			this._eventHandler(eventData.dismissHandler, eventData.popupTarget);

			PopupDismiss.setBodyCursorInIOS("default");
		}
	}

	monitorTap()
	{
		let that = this,
				start = {},
				end = {};
		this.isTap = undefined;

		document.body.addEventListener('mousedown', mouseDown);
		document.body.addEventListener('mouseup', mouseUp);

		function mouseDown(event)
		{
			that.isTap = false;
			start.x = event.pageX;
			start.y = event.pageY;
		}

		function mouseUp(event)
		{
			end.x = event.pageX;
			end.y = event.pageY;

			if (Math.abs(end.x - start.x) < 5 && Math.abs(end.y - start.y) < 5)
			{
				that.isTap = true;
				document.body.removeEventListener('mousedown', mouseDown);
				document.body.removeEventListener('mouseup', mouseUp);
			}
		}
	}

	/**
	 * Check if the dismiss trigger (event) should dismiss the popup or bypass
	 * Default: true, means dismiss normally
	 * Only when `data-popup-dismiss="false"` being defined on a trigger element, return false
	 *
	 * @param child
	 * @param parent
	 * @returns {boolean|*}
	 */
	notDismissBypass(child, parent)
	{
		if (Util.hasClosest(child, parent))
		{
			let dataPopupDismiss = child.getAttribute(this.attr.dataPopupDismiss),
					parentDismissFalse;
			if (dataPopupDismiss === 'false' || dataPopupDismiss === 'true')
			{
				return dataPopupDismiss === 'true';
			}
			else if (parentDismissFalse = Util.findParent(child, `[${this.attr.dataPopupDismiss}="false"]`))
			{
				let parentDismissTrue = Util.findParent(child, `[${this.attr.dataPopupDismiss}="true"]`);
				return parentDismissTrue ? Util.hasClosest(parentDismissTrue, parentDismissFalse) : false;
			}
		}
		return true;
	}

	destroy()
	{
		[].forEach.call(this.elements, (element) => {
			delete element[`data-${this.name}`];
			element.removeEventListener('click', this.popupEvent);
		});

		super.destroy();
	}

	_eventHandler(eventName, targetElement)
	{
		if (eventName !== null)
		{
			if (eventName in window)
			{
				window[eventName](targetElement);
			}
			else
			{
				this.trigger(eventName, targetElement);
			}
		}
	}

	// Fix issue : In iOS device, the dismiss function could not be triggered;
	static setBodyCursorInIOS(val)
	{
		if (/iPhone|iPad|iPod/i.test(navigator.userAgent))
		{
			let body = document.querySelector('body'),
					popupCount = parseInt(body.getAttribute('popup-count') || '0', 10);
			if (val === 'pointer')
			{
				++popupCount === 1 && (body.style.cursor = val);
			}
			else if (val === 'default')
			{
				--popupCount && (body.style.cursor = val);
			}
			body.setAttribute('popup-count', popupCount.toString());
		}
	}
}

export default PopupDismiss;
