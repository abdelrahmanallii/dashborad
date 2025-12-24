import { ref, computed } from 'vue'
import api from './index'


export function useHomeData() {
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

  const vendorWallet = computed(() => {
    return homeData.value?.vendor_wallet || null
  })

  const fetchHomeData = async () => {
    error.value = null

    try {
      const response = await api.get('home')
      homeData.value = response.data.data
      return { data: homeData.value }
    } catch (err) {
      const errorMessage = 'حدث خطأ أثناء جلب بيانات الصفحة الرئيسية'
      error.value = errorMessage
      return { error: errorMessage }
    }
  }

  /**
   * @param {number} limit
   * @param {number} page
   */
  const fetchTopProducts = async (limit = 10, page = 1) => {
    try {
      error.value = null

      const response = await api.get(`variants/top-products/${limit}/get`, {
        params: { page },
      })

      if (response.data?.data) {
        products.value = response.data.data.data || []

        pagination.value = {
          current_page: response.data.data.current_page || 1,
          last_page: response.data.data.last_page || 1,
          per_page: response.data.data.per_page || 10,
          total: response.data.data.total || 0,
        }
      }
      return {
        products: products.value,
        pagination: pagination.value,
      }
    } catch (err) {
      error.value ='حدث خطأ أثناء جلب بيانات المنتجات'
      return { error: error.value }
    }
  }
  const fetchAllData = async () => {
    error.value = null

    try {
      await Promise.all([fetchHomeData(), fetchTopProducts(10, 1)])
      // return { success: true }
    } catch (err) {
      const errorMessage = 'حدث خطأ أثناء جلب البيانات'
      error.value = errorMessage
      return { error: errorMessage }
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
