const validation = (values) => {
    let errors={};

    if(!values.firstname){
        errors.firstname="First Name is required."
    }

    if(!values.lastname){
        errors.lastname="Last Name is required."
    }

    if(!values.email){
        errors.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }

    if(!values.password){
        errors.password="Password is required."

    } else if(values.password.length < 8){
        errors.password="Password must be greater or equals to eight characters."
    }

    if(!values.phonenumber){
        errors.phonenumber="Phone Number is Required."
    }else if(/^\d{10}S/.test(values.phonenumber)){
        errors.phonenumber="Phonenumber is invalid."

    }
    return errors;

};

export default validation;