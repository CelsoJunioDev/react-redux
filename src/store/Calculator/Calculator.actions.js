//action creator (uma func que retorna uma action)
export function sum (a, b){
    return {
        type: 'SUM',
        payload: [a,b]
    }
}
export function sub (a, b){
    return {
        type: 'SUB',
        payload: [a,b]
    }
}