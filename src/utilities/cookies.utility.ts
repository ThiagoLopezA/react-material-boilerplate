import Cookies from 'js-cookie'

export const setCookie = (name:string, value: object, hours: number) => {
    const toExpireValue = hours / 24;
    Cookies.set(name, JSON.stringify(value), { expires: toExpireValue });
}

export const getCookie = (name:string) => {
    const value = Cookies.get(name);
    return value ? JSON.parse(value) : null;
}

export const removeCookie = (name:string) => {
    Cookies.remove(name)
}