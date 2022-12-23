import { setCookie, getCookie, removeCookie } from "./cookies.utility";
import { Tokens } from "../models";

export const setTokens = (tokens: Tokens) : void => setCookie('tokens', tokens, 5)

export const getTokens = () : Tokens => getCookie('tokens')

export const removeTokens = () : void => removeCookie('tokens')

export const getRefreshToken = () : string => {
    const tokens = getTokens()
    return tokens?.refreshToken
}

export const getAccessToken = () : string => {
    const tokens = getTokens()
    return tokens?.accessToken
}

export const setRefreshToken = (token:string) => {
    const tokens = getTokens()
    tokens.refreshToken = token
    setTokens(tokens)
}
