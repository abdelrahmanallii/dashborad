import { ref, computed } from 'vue'
import api from './index'

/**
 * Composable function للتعامل مع بيانات الصفحة الرئيسية
 */
export function useHomeData() {
  const loading = ref(false)
  const error = ref(null)
  const homeData = ref(null)
  const productsData = ref(null)
  const products = ref([])
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  })

  // computed property لـ vendorWallet من homeData
  const vendorWallet = computed(() => {
    return homeData.value?.vendor_wallet || null
  })

  /**
   * جلب بيانات الصفحة الرئيسية
   */
  const fetchHomeData = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await api.get('home')
      homeData.value = response.data.data || response.data

      return { success: true, data: homeData.value }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.response?.data?.error ||
        'حدث خطأ أثناء جلب بيانات الصفحة الرئيسية'

      error.value = errorMessage
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  /**
   * جلب أفضل المنتجات
   * @param {number} limit - عدد المنتجات (افتراضي: 10)
   * @param {number} page - رقم الصفحة (افتراضي: 1)
   */
  const fetchTopProducts = async (limit = 10, page = 1) => {
    try {
      loading.value = true
      error.value = null

      const response = await api.get(`variants/top-products/${limit}/get`, {
        params: { page },
      })

      if (response.data?.data) {
        productsData.value = response.data.data
        products.value = response.data.data.data || []

        // حفظ معلومات pagination
        pagination.value = {
          current_page: response.data.data.current_page || 1,
          last_page: response.data.data.last_page || 1,
          per_page: response.data.data.per_page || 10,
          total: response.data.data.total || 0,
        }
      }

      console.log('تم جلب بيانات المنتجات بنجاح:', productsData.value)
      return {
        success: true,
        data: productsData.value,
        products: products.value,
        pagination: pagination.value,
      }
    } catch (err) {
      error.value =
        err.response?.data?.message || err.message || 'حدث خطأ أثناء جلب بيانات المنتجات'
      console.error('خطأ في جلب بيانات المنتجات:', err)
      throw err
    } finally {
      loading.value = false
    }
  }
  /**
   * جلب جميع البيانات دفعة واحدة
   */
  const fetchAllData = async () => {
    loading.value = true
    error.value = null

    try {
      await Promise.all([fetchHomeData(), fetchTopProducts(10, 1)])

      return { success: true }
    } catch (err) {
      const errorMessage = 'حدث خطأ أثناء جلب البيانات'
      error.value = errorMessage
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  return {
    // Data
    homeData,
    productsData,
    vendorWallet,
    products,
    pagination,
    // Methods
    fetchHomeData,
    fetchTopProducts,
    fetchAllData,
  }
}
