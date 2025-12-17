// تعريف العملات حسب البلد
export const currencies: Record<string, { name: string; symbol: string; locale: string }> = {
  EG: { name: 'جنية', symbol: 'EGP', locale: 'ar-EG' },
  SA: { name: 'ريال', symbol: 'SAR', locale: 'ar-SA' },
  AE: { name: 'درهم', symbol: 'AED', locale: 'ar-AE' },
  US: { name: 'دولار', symbol: 'USD', locale: 'en-US' },
  EU: { name: 'يورو', symbol: 'EUR', locale: 'de-DE' },
  GB: { name: 'جنيه', symbol: 'GBP', locale: 'en-GB' },
}

/**
 * Function لتنسيق العملة بناءً على البلد
 * @param amount - المبلغ (رقم أو string)
 * @param countryCode - كود البلد (افتراضي: 'EG')
 * @returns المبلغ المنسق مع اسم العملة
 *
 * @example
 * formatCurrency(19000, 'EG')        // "19000 جنية"
 * formatCurrency(17793313.82, 'EG')  // "17793313.82 جنية"
 * formatCurrency(1000, 'SA')         // "1000 ريال"
 * formatCurrency(500.5, 'US')       // "500.50 دولار"
 */
export const formatCurrency = (amount: number | string, countryCode: string = 'EG'): string => {
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount

  if (isNaN(numAmount)) {
    return '0'
  }

  const currency = currencies[countryCode] || currencies['EG']

  // تنسيق الرقم بدون فواصل - إذا كان float نعرض منزلتين عشريتين، وإلا بدون
  let formattedNumber: string
  if (numAmount % 1 !== 0) {
    // رقم عشري - نعرض منزلتين عشريتين بدون فواصل
    formattedNumber = numAmount.toFixed(2)
  } else {
    // رقم صحيح - بدون فواصل
    formattedNumber = numAmount.toString()
  }

  // إرجاع الرقم مع اسم العملة
  return `${formattedNumber} ${currency.name}`
}
