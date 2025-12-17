/*
 * Metronic
 * @author: Keenthemes
 * Copyright 2024 Keenthemes
 */

import KTDom from './helpers/dom';
import KTUtils from './helpers/utils';
import KTEventHandler from './helpers/event-handler';
import { KTMenu } from './components/menu';

export { KTMenu } from './components/menu';

const KTComponents = {
	init(): void {
		if (window.KTModal) window.KTMenu.init();
		if (window.KTModal) window.KTModal.init();
    if (window.KTDropdown) window.KTDropdown.init();
		if (window.KTDrawer) window.KTDrawer.init();
		if (window.KTCollapse) window.KTCollapse.init();
		if (window.KTDismiss) window.KTDismiss.init();
		if (window.KTTabs) window.KTTabs.init();
		if (window.KTAccordion) window.KTAccordion.init();
		if (window.KTScrollspy) window.KTScrollspy.init();
		if (window.KTScrollable) window.KTScrollable.init();
		if (window.KTScrollto) window.KTScrollto.init();
		if (window.KTSticky) window.KTSticky.init();
		if (window.KTReparent) window.KTReparent.init();
		if (window.KTToggle) window.KTToggle.init();
		if (window.KTTooltip) window.KTTooltip.init();
		if (window.KTStepper) window.KTStepper.init();
		if (window.KTThemeSwitch) window.KTThemeSwitch.init();
		if (window.KTImageInput) window.KTImageInput.init();
		if (window.KTTogglePassword) window.KTTogglePassword.init();
		if (window.KTDataTable) window.KTDataTable.init();
		if (window.KTSelect) window.KTSelect.init();
		if (window.KTToast) window.KTToast.init();
	},
};

declare global {
	interface Window {
		KTUtils: typeof KTUtils;
		KTDom: typeof KTDom;
		KTEventHandler: typeof KTEventHandler;
		KTMenu: typeof KTMenu;
		KTComponents: typeof KTComponents;
	}
}

window.KTUtils = KTUtils;
window.KTDom = KTDom;
window.KTEventHandler = KTEventHandler;
window.KTMenu = KTMenu;
window.KTComponents = KTComponents;

export default KTComponents;

KTDom.ready(() => {
	KTComponents.init();
});
