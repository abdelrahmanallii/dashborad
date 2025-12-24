<template>
  <div class="min-h-screen grid md:grid-cols-2 grid-cols-1">
    <!-- Left Side - Images Section -->
    <div
      class="hidden md:flex flex-col justify-center items-center p-4 lg:p-8 xl:p-6 gap-4 lg:gap-6"
    >
      <div class="flex justify-center">
        <img
          src="@/assets/pics/momasr pic.png"
          alt="image"
          class="w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
        />
      </div>

      <div class="flex justify-center">
        <p
          class="font-bold text-4xl sm:text-5xl md:text-[57px] lg:text-7xl xl:text-[84px] text-primary text-center"
        >
          Seller Account
        </p>
      </div>

      <div class="flex justify-center">
        <img
          src="@/assets/pics/seller.png"
          alt="seller"
          class="w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
        />
      </div>
    </div>

    <!-- Right Side - Login Form -->
    <div
      class="md:mx-auto flex items-center justify-center min-h-screen bg-secondary2 p-4 sm:px-6 md:px-8 lg:px-10 xl:px-16"
    >
      <div class="w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div class="flex flex-col items-center gap-y-4 sm:gap-y-5 lg:gap-y-6">
          <!-- Logo -->
          <div class="w-full flex justify-center">
            <img
              src="@/assets/pics/logomomasr.png"
              alt="logo"
              class="w-auto h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
            />
          </div>

          <!-- Title Section -->
          <div class="text-center space-y-2 sm:space-y-3 lg:space-y-4 w-full">
            <h3 class="text-white text-lg sm:text-2xl md:text-2xl font-semibold">حساب البائع</h3>
            <h2 class="text-primary text-xl sm:text-3xl font-bold">تسجيل الدخول</h2>
          </div>

          <!-- Welcome Message -->
          <div class="text-center w-full space-y-1 sm:space-y-2">
            <h2 class="text-white sm:text-2xl text-xl font-semibold">👋مرحبا بكم في موبايل مصر!</h2>
            <p class="text-primary text-xs">يرجى تسجيل الدخول إلى حسابك وبدء التحكم</p>
          </div>

          <!-- Form -->
          <form action="" @submit.prevent="handleSubmit" class="flex flex-col gap-y-3 w-full">
            <!-- Email Input -->
            <div class="flex flex-col w-full">
              <input
                type="email"
                v-model="email"
                @focus="handleEmailFocus"
                @blur="handleEmailBlur"
                class="kt-input w-full border-2 border-orange-500 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5"
                :class="{ 'border-red-500': showEmailError() }"
                placeholder="البريد الإلكتروني"
                :aria-invalid="showEmailError()"
              />
              <span v-if="showEmailError()" class="text-destructive text-xs mt-1 text-right">
                حقل البريد الإلكتروني مطلوب
              </span>
            </div>

            <!-- Password Input -->
            <div class="flex flex-col w-full">
              <input
                type="password"
                v-model="password"
                @focus="handlePasswordFocus"
                @blur="handlePasswordBlur"
                class="kt-input w-full border-2 border-orange-500 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5"
                :class="{ 'border-red-500': showPasswordError() }"
                placeholder="كلمة المرور"
                :aria-invalid="showPasswordError()"
              />
              <span v-if="showPasswordError()" class="text-destructive text-xs mt-1 text-right">
                حقل كلمة المرور مطلوب
              </span>
            </div>

            <!-- Error Message -->
            <div v-if="loginError" class="w-full">
              <div
                class="bg-red-500/20 border border-red-500 text-red-200 text-sm p-3 rounded text-right"
              >
                {{ loginError }}
              </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center gap-2">
              <input type="checkbox" class="kt-checkbox" id="check" value="1" />
              <label class="kt-label text-sm sm:text-base cursor-pointer text-white" for="check">
                تذكرنى
              </label>
            </div>

            <!-- Buttons -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
              <button
                type="submit"
                :disabled="loading"
                class="kt-btn bg-primary text-white text-sm sm:text-base p-5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="loading">جاري تسجيل الدخول...</span>
                <span v-else>تسجيل دخول</span>
              </button>
              <button
                type="button"
                class="kt-btn shadow-none bg-transparent text-primary text-sm sm:text-base p-5"
              >
                <RouterLink to="/signup"> تسجيل حساب جديد </RouterLink>
              </button>
              <button
                type="button"
                class="kt-btn shadow-none bg-transparent text-sm sm:text-base p-5"
              >
                نسيت كلمة المرور
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthData } from '@/api/AuthData'

const router = useRouter()
const email = ref('')
const password = ref('')
const emailTouched = ref(false)
const passwordTouched = ref(false)
const loginError = ref('')

const { Login, loading } = useAuthData()

const handleEmailFocus = () => {
  emailTouched.value = false
  loginError.value = ''
}

const handleEmailBlur = () => {
  emailTouched.value = true
}

const handlePasswordFocus = () => {
  passwordTouched.value = false
  loginError.value = ''
}

const handlePasswordBlur = () => {
  passwordTouched.value = true
}

const showEmailError = () => {
  return emailTouched.value && !email.value.trim()
}

const showPasswordError = () => {
  return passwordTouched.value && !password.value.trim()
}

async function handleSubmit() {
  if (!email.value.trim() || !password.value.trim()) {
    emailTouched.value = true
    passwordTouched.value = true
    return
  }
  const result = await Login(email.value.trim(), password.value.trim() ,)

  if (result.success) {
    router.push('/')

  } else {
    loginError.value = 'حدث خطأ أثناء تسجيل الدخول'
  }
}
</script>
