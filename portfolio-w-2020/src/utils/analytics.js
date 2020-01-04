/** @format */
/**
 * gerenates UTM paramaeter for analytics
 * @param {string} source
 * @param {string} medium
 * @param {string} campaign
 * @param {string} content
 */
const generateUtm = (source, medium, campaign, content) => {
  const linkSource =
    source && typeof source === 'string' ? source.replace(/ /g, '_') : 'portfolio_winter_2020'
  const linkedMedium = medium && typeof source === 'string' ? medium.replace(/ /g, '_') : 'website'
  const linkedCampaign =
    campaign && typeof source === 'string' ? campaign.replace(/ /g, '_') : 'winter_2020'
  const linkedContent = content && typeof content === 'string' ? content.replace(/ /g, '_') : 'link'
  return `utm_source=${linkSource}&utm_medium=${linkedMedium}&utm_campaign=${linkedCampaign}&utm_content=${linkedContent}`
}
/**
 * checls if param is string
 * @param {*} s
 */
const isString = (s) => {
  return typeof s === 'string'
}
/**
 * checks if param is not null or
 * undefined
 * @param {*} n
 */
const isNotNull = (n) => {
  return n !== null || undefined
}
/**
 * checks if param is object and not null
 * @param {*} o
 */
const isObject = (o) => {
  return typeof o === 'object' && o.path
}
const CookieHandler = {
  /**
   * Sets the value of cookie with type checking
   * @param {Object} cookies
   * @param {string} name
   * @param {string} value
   * @param {Object} path
   */
  setCookie: (cookies, name, value, options) => {
    if (!isObject(cookies)) {
      return false
    }
    let ExpireDate = new Date()
    const nameToSet = isString(name) && isNotNull(name) ? name : `cookie${ExpireDate.unix()}`
    const valueToSet = isNotNull(value) ? value : `cookie-${ExpireDate.format()}`
    ExpireDate.setMonth(ExpireDate.getMonth() + 3)
    const optionsToSet = isObject(options)
      ? options
      : { path: '/', expires: ExpireDate, sameSite: 'lax' }
    cookies.set(nameToSet, valueToSet, optionsToSet)
  },
  /**
   * Gets the cookie for a specific param set
   * @param {string} name cookie to get get
   * @param {string} paramIfNull value to  return if cookie is empty
   * @param {boolean} wantsObject check to see if we want to get an object of Cookies
   */
  getCookie: (cookies, name, paramIfNull, wantsObject) => {
    const nameToGet = isString(name) && isNotNull(name) ? name : 'name'
    const paramToGetIfNull = isString(paramIfNull) && isNotNull(paramIfNull) ? paramIfNull : null
    let CookieValues = { cookie: cookies.get(nameToGet) || paramToGetIfNull }
    return wantsObject ? CookieValues : cookies.get(nameToGet) || paramToGetIfNull
  },
  /**
   * removes cookie queried by specifc name or options
   * @param {Object} cookies
   * @param {string} name
   * @param {Object} options
   */
  removeCookie: (cookies, name, options) => {
    if (!isObject(cookies) || !isString(name)) {
      return false
    }
    if (name && (options === null || undefined || '' || {} || [])) {
      cookies.remove(name)
      return true
    }
    cookies.remove(name, options)
  },
}
export { generateUtm, CookieHandler }
