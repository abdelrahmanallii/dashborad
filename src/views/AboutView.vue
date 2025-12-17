<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { formatCurrency } from '@/utility/currency'

// يمكنك تغيير البلد هنا أو جعله متغير
const currentCountry = 'EG'
</script>

<template>
  <div class="flex flex-wrap justify-center items-center gap-3">
    <div class="kt-card w-[250px] h-[220px] pt-3">
      <div class="kt-card-header min-h-0 border-none">
        <div class="kt-card-heading">
          <h2 class="kt-card-title text-lg font-extrabold text-primary">معلومات شخصية</h2>
        </div>
      </div>
      <div class="kt-card-content py-1">
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">اسم الشركة </a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Demo Test</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">إسم المسؤل </a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
      </div>
      <div class="kt-card-footer border-none justify-center">
        <button
          class="kt-link text-md border-2 rounded-full border-orange-500 text-black hover:bg-orange-50 transition-colors px-8 py-1"
        >
          تعديل
        </button>
      </div>
    </div>

    <div class="kt-card pt-3">
      <div class="kt-card-header min-h-0 border-none">
        <div class="kt-card-heading">
          <h2 class="kt-card-title text-lg font-extrabold text-primary">الرصيد</h2>
        </div>
      </div>
      <div class="kt-card-content py-1">
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">رصيد قيد التحصيل </a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">{{
            formatCurrency(19000, currentCountry)
          }}</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">رصيد مسدد من قبل </a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">{{
            formatCurrency(0, currentCountry)
          }}</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">رصيد متاح للتحصيل </a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">{{
            formatCurrency(17793311.82, currentCountry)
          }}</span>
        </div>
      </div>
      <div class="kt-card-footer border-none justify-center">
        <button
          class="kt-link text-md border-2 rounded-full border-orange-500 text-black hover:bg-orange-50 transition-colors px-8 py-1"
        >
          سحب
        </button>
      </div>
    </div>

    <div class="kt-card w-[250px] pt-3">
      <div class="kt-card-header min-h-0 border-none">
        <div class="kt-card-heading">
          <h2 class="kt-card-title text-lg font-extrabold text-primary">منتجاتك</h2>
        </div>
      </div>
      <div class="kt-card-content py-1">
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">المنتجات المعروضة حالياً</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">قيد الموافقة</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">المرفوضة</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
      </div>
      <div class="kt-card-footer border-none justify-center">
        <button
          class="kt-link text-md border-2 rounded-full border-orange-500 text-black hover:bg-orange-50 transition-colors px-8 py-1"
        >
          تعديل
        </button>
      </div>
    </div>

    <div class="kt-card w-[250px] pt-3">
      <div class="kt-card-header min-h-0 border-none">
        <div class="kt-card-heading">
          <h2 class="kt-card-title text-lg font-extrabold text-primary">طلبياتك</h2>
        </div>
      </div>
      <div class="kt-card-content py-1">
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">قيد انتظار الموافقة</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">المستلمة</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">المرفوضة</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
      </div>
      <div class="kt-card-footer border-none justify-center">
        <button
          class="kt-link text-md border-2 rounded-full border-orange-500 text-black hover:bg-orange-50 transition-colors px-8 py-1"
        >
          تعديل
        </button>
      </div>
    </div>

    <div class="kt-card w-[250px] pt-3">
      <div class="kt-card-header min-h-0 border-none">
        <div class="kt-card-heading">
          <h2 class="kt-card-title text-lg font-extrabold text-primary">مبيعاتك</h2>
        </div>
      </div>
      <div class="kt-card-content py-1">
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">مبيعات الاسبوع الحالى</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">مبيعات هذا الشهر</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">إجمالى المبيعات</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
      </div>
      <div class="kt-card-footer border-none justify-center">
        <button
          class="kt-link text-md border-2 rounded-full border-orange-500 text-black hover:bg-orange-50 transition-colors px-8 py-1"
        >
          تعديل
        </button>
      </div>
    </div>

    <div class="kt-card w-[250px] pt-3">
      <div class="kt-card-header min-h-0 border-none">
        <div class="kt-card-heading">
          <h2 class="kt-card-title text-lg font-extrabold text-primary">مرتجعاتك</h2>
        </div>
      </div>
      <div class="kt-card-content py-1">
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">قيد المراجعه</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">مرتجع</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
        <div
          class="flex items-center justify-between gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="flex items-center gap-3">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">تم الرفض</a>
            </div>
          </div>
          <span class="text-sm font-medium text-primary">Ahmed</span>
        </div>
      </div>
      <div class="kt-card-footer border-none justify-center">
        <button
          class="kt-link text-md border-2 rounded-full border-orange-500 text-black hover:bg-orange-50 transition-colors px-8 py-1"
        >
          تعديل
        </button>
      </div>
    </div>

    <div class="kt-card w-[250px] h-[220px] pt-3">
      <div class="kt-card-header min-h-0 border-none">
        <div class="kt-card-heading">
          <h2 class="kt-card-title text-lg font-extrabold text-primary">إضافة منتج</h2>
        </div>
      </div>
      <div class="kt-card-content py-1">
        <div
          class="flex flex-col gap-2 py-2 border-b border-border border-soild last:border-none"
        >
          <div class="">
            <div>
              <a href="#" class="text-sm font-medium text-secondary">إضافة منتج جديد للمتجر</a>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center gap-3">
            <p class="text-sm font-medium text-secondary mb-8">من هنا</p>
            <button type="button" class="kt-btn kt-btn-ghost bg-transparent rounded-full "><img src="@/assets/images/CardsHome/add-button.png" alt="plus" class="w-[50%] shadow-sm shadow-border hover:shadow-orange-600/50 rounded-full"></button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style>
/* تطبيق خط Cairo على جميع العناصر */
* {
  font-family: 'Cairo', sans-serif;
}
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
