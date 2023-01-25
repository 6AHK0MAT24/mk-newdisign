//Для тестирования установить знак DEV в true, для заливки на prod, поменять на false!!!
export const DEV = false
//Для тестирования
// export const GLOBAL_URL = '194.85.217.98'

export const GLOBAL_URL = DEV ? '192.168.100.11' : window.location.hostname


