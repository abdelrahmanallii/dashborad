import { ref } from 'vue'
import apiClient from '@/api/axios'

export function useProductsData() {
  const productsData = ref(null)
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)
  const pagination = ref({
    current_page: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
  })

  const fetchTopProducts = async (limit = 10, page = 1) => {
    try {
      loading.value = true
      error.value = null

      const response = await apiClient.get(`/variants/top-products/${limit}/get`, {
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
      return productsData.value
    } catch (err) {
      error.value =
        err.response?.data?.message || err.message || 'حدث خطأ أثناء جلب بيانات المنتجات'
      console.error('خطأ في جلب بيانات المنتجات:', err)
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    productsData,
    products,
    loading,
    error,
    pagination,
    fetchTopProducts,
  }
}
