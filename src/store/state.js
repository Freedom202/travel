//不能直接用localStorage，因为有的浏览器不支持本地存储，所以最好用try、catch
let defaultCity = '上海'    //default: 违约、系统默认值的意思（英译中）
try {
    if (localStorage.city){
        defaultCity = localStorage.city
    }
} catch(e) {}

export default {
    city: defaultCity
}