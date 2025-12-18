<script setup lang="ts"></script>

<template>
  <!-- <div class="kt-card px-5 py-1 w-screen shadow-none">
    <div class="kt-card-header w-full py-2 min-h-0 border-none">
      <div class="kt-card-heading">
        <h2 class="kt-card-title text-third">المنتجات</h2>
      </div>
    </div>

    <div class="grid grid-cols-5">
      <div class="card1">
        <div class="kt-card-header min-h-0 border-none">
          <div class="kt-card-heading">
            <h2 class="kt-card-title text-primary">اسم المنتج</h2>
          </div>
        </div>
        <div class="kt-card px-5 py-1 border-none shadow-none">
          <div class="flex w-fit py-2">
            <div class="flex items-center gap-3">
              <div>
                <a
                  href="#"
                  class="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                  >آيفون 15 برو - 8 جيجا رام - 256 جيجا - أسود</a
                >
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <a
                  href="#"
                  class="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                  >سامسونج جالاكسي إس 24 - 12 جيجا رام - 512 جيجا - أزرق</a
                >
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <a
                  href="#"
                  class="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                  >شاومي ريدمي نوت 13 - 6 جيجا رام - 128 جيجا - أحمر</a
                >
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <a
                  href="#"
                  class="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                  >ون بلس 12 - 16 جيجا رام - 1 تيرا - أبيض</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card2 col-span-1 flex flex-col items-center">
        <div class="kt-card-header min-h-0 border-none">
          <div class="kt-card-heading">
            <h2 class="kt-card-title text-primary">SKU</h2>
          </div>
        </div>
        <div class="kt-card px-5 py-1 border-none shadow-none space-y-1.5">
          <div class="flex w-fit py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">VU000330</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">VU000330</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">VU000330</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">VU000330</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card3 col-span-1 flex flex-col items-center">
        <div class="kt-card-header min-h-0 border-none">
          <div class="kt-card-heading">
            <h2 class="kt-card-title text-primary">عدد المشاهدات</h2>
          </div>
        </div>
        <div class="kt-card px-5 py-1 border-none shadow-none space-y-1.5">
          <div class="flex w-fit py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">999</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">999</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">999</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">999</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card4 col-span-1 flex flex-col items-center">
        <div class="kt-card-header min-h-0 border-none">
          <div class="kt-card-heading">
            <h2 class="kt-card-title text-primary">تكلفة عدد المشاهدات</h2>
          </div>
        </div>
        <div class="kt-card px-5 py-1 border-none shadow-none space-y-1.5">
          <div class="flex w-fit py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">45.75</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">32.50</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">67.25</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">89.90</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card5 col-span-1 flex flex-col items-center">
        <div class="kt-card-header min-h-0 border-none">
          <div class="kt-card-heading">
            <h2 class="kt-card-title text-primary">عدد مرات إضافة فى السلة</h2>
          </div>
        </div>
        <div class="kt-card px-5 py-1 border-none shadow-none space-y-1.5">
          <div class="flex w-fit py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">5</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">3</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">7</p>
              </div>
            </div>
          </div>
          <div class="flex w-fit gap-2 py-2">
            <div class="flex items-center gap-3">
              <div>
                <p class="text-sm font-medium text-foreground">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="grid w-full space-y-5">
    <div class="kt-card">
      <div class="kt-card-header min-h-16">
        <h2 class="text-third text-lg">المنتجات</h2>
      </div>
      <div
        id="kt_datatable_basic"
        class="kt-card-table"
        data-kt-datatable="true"
        data-kt-datatable-page-size="5"
        data-kt-datatable-state-save="true"
      >
        <div class="kt-table-wrapper">
          <table class="kt-table" data-kt-datatable-table="true">
            <thead>
              <tr>
                <th scope="col" class="w-30" data-kt-datatable-column="label">
                  <span class="kt-table-col"
                    ><span class="kt-table-col-label text-primary">اسم المنتج</span></span
                  >
                </th>
                <th scope="col" class="w-20" data-kt-datatable-column="method">
                  <span class="kt-table-col"
                    ><span class="kt-table-col-label text-primary">SKU</span></span
                  >
                </th>
                <th scope="col" class="w-24" data-kt-datatable-column="status">
                  <span class="kt-table-col"
                    ><span class="kt-table-col-label text-primary">عدد المشاهدات</span></span
                  >
                </th>
                <th scope="col" class="w-24" data-kt-datatable-column="lastSession">
                  <span class="kt-table-col"
                    ><span class="kt-table-col-label text-primary">تكلفة عدد المشاهدات</span></span
                  >
                </th>
                <th scope="col" class="w-24" data-kt-datatable-column="lastSession">
                  <span class="kt-table-col"
                    ><span class="kt-table-col-label text-primary"
                      >عدد مرات إضافة فى السلة</span
                    ></span
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="#"
                    class="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                    >آيفون 15 برو - 8 جيجا رام - 256 جيجا - أسود</a
                  >
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">VU000330</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">999</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">45.75</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">5</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    class="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                    >سامسونج جالاكسي إس 24 - 12 جيجا رام - 512 جيجا - أزرق</a
                  >
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">VU000330</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">999</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">32.50</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">3</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    class="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                    >شاومي ريدمي نوت 13 - 6 جيجا رام - 128 جيجا - أحمر</a
                  >
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">VU000330</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">999</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">67.25</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">7</p>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="#"
                    class="text-sm font-medium text-foreground hover:text-primary whitespace-nowrap"
                    >ون بلس 12 - 16 جيجا رام - 1 تيرا - أبيض</a
                  >
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">VU000330</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">999</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">89.90</p>
                </td>
                <td>
                  <p class="text-sm font-medium text-foreground">2</p>
                </td>
              </tr>
            </tbody>
          </table>
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
