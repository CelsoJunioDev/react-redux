export default function(state =0, action) { //state é o estado inicial
switch(action.type){
    case 'SUM':
        return action.payload[0] + action.payload[1]

    case 'SUBTACT':
        return action.payload[0] - action.payload[1]

        //caso a action não exista, retorna o state ATUAL (não inicial) como default
        default:
            return state
}
}