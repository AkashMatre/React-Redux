


 const logreducer = (state = {} , action) =>{   
     //console.log(action);
    if(action.type === 'login'){
        return {
            ...state,
            name : action.payload
        }
    }else{
    return state;
    }
}

export default logreducer;