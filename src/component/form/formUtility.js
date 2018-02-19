const checkValidation=(rule,item)=>{
    switch (rule) {
        case "required": {
            if (item.value.length == 0) {
                item.isValid = false;
                item.errorMessage = "this is required";
            } else {
                item.isValid = true;
                item.errorMessage = "";
            }
        }
        break;
        default:
            return true;
    } 
}


const validate = (formObj) => {
    for (var key in formObj) {
        formObj[key]["rules"].forEach((rule)=>{
            checkValidation(rule,formObj[key]);
        });
    }

    return formObj;
};

export default validate;