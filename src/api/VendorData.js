import { ref } from 'vue'
import apiClient from '@/api/axios'
import { useUserStore } from '@/stores/Auth'

export function useVendorData() {
  const vendorData = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const userStore = useUserStore()

  const fetchVendorData = async () => {
    try {
      loading.value = true
      error.value = null

      const response = await apiClient.get('/home')

      // التحقق من البنية المختلفة للاستجابة
      let data = null

      if (response.data?.data) {
        data = response.data.data
      } else if (response.data) {
        data = response.data
      }

      if (data) {
        vendorData.value = data
        userStore.setUser(data)

        // طباعة البيانات للتحقق (يمكن حذفها لاحقاً)
        // console.log('تم جلب بيانات Vendor بنجاح:', vendorData.value)
        // console.log('vendor_wallet:', vendorData.value?.vendor_wallet)
        // console.log('account_manager:', vendorData.value?.account_manager)
        // console.log(vendorData.value?.account_manager?.profile_picture)
      } else {
        throw new Error('لا توجد بيانات في الاستجابة')
      }

      return vendorData.value
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'حدث خطأ أثناء جلب بيانات Vendor'
      console.error('خطأ في جلب بيانات Vendor:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    vendorData,
    loading,
    error,
    fetchVendorData,
  }
}
