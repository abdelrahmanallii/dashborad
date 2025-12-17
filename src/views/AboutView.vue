<template>
<div
  class="inline-flex"
  data-kt-dropdown="true"
  data-kt-dropdown-trigger="click"
>
  <button class="kt-btn" data-kt-dropdown-toggle="true">Show Dropdown</button>
  <div
    class="kt-dropdown w-full max-w-56 p-3 text-sm"
    data-kt-dropdown-menu="true"
  >
    The Tailwind Dropdown component offers a sleek, user-friendly interface for
    presenting overlay content.
  </div>
</div>
</template>

<style>

</style>
<!-- <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { nextTick, onMounted as vueOnMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import KTComponent from './assets/metronic/core/index'
  import KTLayout from './assets/metronic/app/layouts/demo1'

  const router = useRouter()

  // دالة لتهيئة جميع مكونات KTUI
  const initKTUI = () => {
    if (window.KTDropdown) window.KTDropdown.init()
    if (window.KTModal) window.KTModal.init()
    if (window.KTDrawer) window.KTDrawer.init()
    if (window.KTCollapse) window.KTCollapse.init()
    if (window.KTDismiss) window.KTDismiss.init()
    if (window.KTTabs) window.KTTabs.init()
    if (window.KTAccordion) window.KTAccordion.init()
    if (window.KTScrollspy) window.KTScrollspy.init()
    if (window.KTScrollable) window.KTScrollable.init()
    if (window.KTScrollto) window.KTScrollto.init()
    if (window.KTSticky) window.KTSticky.init()
    if (window.KTReparent) window.KTReparent.init()
    if (window.KTToggle) window.KTToggle.init()
    if (window.KTTooltip) window.KTTooltip.init()
    if (window.KTStepper) window.KTStepper.init()
    if (window.KTThemeSwitch) window.KTThemeSwitch.init()
    if (window.KTImageInput) window.KTImageInput.init()
    if (window.KTTogglePassword) window.KTTogglePassword.init()
    if (window.KTDataTable) window.KTDataTable.init()
    if (window.KTSelect) window.KTSelect.init()
    if (window.KTToast) window.KTToast.init()
  }

  // استدعاء بعد كل route change
  router.afterEach(() => {
    nextTick(() => {
      KTComponent.init()
      KTLayout.init()
      initKTUI()
    })
  })

  vueOnMounted(() => {
    nextTick(() => {
      KTComponent.init()
      KTLayout.init()
      initKTUI()
    })
  })
  </script> -->
