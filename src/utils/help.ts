/**
 * 检测设备是否为手机。
 * @param strict 严格模式，验证`UA`和触摸屏。
 * @returns 
 */
export function isMobileDevice(strict?: boolean) {
  const isTouchDevice = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (!!navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 0))
  const isMobileUA = /iPhone|iPod|BlackBerry|Mobile|Opera Mini/i.test(navigator.userAgent)

  if (strict) {
    return isMobileUA && isTouchDevice
  } else {
    return window.innerWidth < 768
  }
}


export function openHtml(url:string){

  if(isMobileDevice()) return;
  const params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=1200,height=800'
  window.open(url, '', params)
}