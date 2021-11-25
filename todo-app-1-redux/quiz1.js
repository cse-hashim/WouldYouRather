function appReducer(infoArray,typeObject){
    if(typeObject.type==='DELETE_FLAVOR'){
        return infoArray.filter(function (e){
            return e.flavor!==typeObject.flavor;
        });
    }
    return infoArray;
}
console.log(appReducer([{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }],{ type: 'DELETE_FLAVOR', flavor: 'Vanilla' }))