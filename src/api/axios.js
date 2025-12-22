import axios from 'axios'

// إنشاء instance من axios
const apiClient = axios.create({
  baseURL: 'https://api-test.mobilemasr.com/vendor/',
  headers: {
    'Content-Type': 'application/json',
  },
})

// إضافة interceptor لإضافة التوكن تلقائياً مع كل طلب
apiClient.interceptors.request.use(
  (config) => {
    // جلب التوكن من localStorage
    const token = localStorage.getItem('token')

    if (token) {
      const tokenData = JSON.parse(token)
      if (tokenData?.accessToken) {
        config.headers.Authorization = `Bearer ${tokenData.accessToken}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// إضافة interceptor للتعامل مع الأخطاء
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // إذا كان الخطأ 401 (غير مصرح)
    if (error.response?.status === 401) {
      console.warn('تم رفض الطلب - قد تحتاج إلى تسجيل الدخول مرة أخرى')
      // يمكن إضافة منطق إعادة التوجيه هنا إذا لزم الأمر
    }
    return Promise.reject(error)
  },
)

export default apiClient
