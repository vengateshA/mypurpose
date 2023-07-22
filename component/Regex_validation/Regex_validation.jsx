export  const usernameval = username =>{
    const usernameregex = /^[^\s@]+@[^\s@]+$/;
    return usernameregex.test(username)
}

export  const passwordval = password =>{
    const passwordregex = /\d{6}$/;
    return passwordregex.test(password)
}
export  const companynameval = companyname =>{
    const companynameregex = /^.+$/;
    return companynameregex.test(companyname)
}

export  const personnameval = personname =>{
    const personnameregex = /^.+$/;
    return personnameregex.test(personname)
}
export  const genderval = gender =>{
    const genderregex = /^.+$/;
    return genderregex.test(gender)
}
export  const phonenumberval = phonenumber =>{
    const phonenumberregex = /\d{10}$/;
    return phonenumberregex.test(phonenumber) 
} 
export  const alternumberval = alternumber =>{
    const alternumberregex = /\d{10}$/;
    return alternumberregex.test(alternumber)
}
export  const emailval = email =>{
    const emailregex = /^[^\s@]+@[^\s@]+$/;
    return emailregex.test(email)
}
export  const addressval = address =>{
    const addressregex = /^.+$/;
    return addressregex.test(address)
}
export  const cityval = city =>{
    const cityregex = /^.+$/;
    return cityregex.test(city)
}
export  const stateval = state =>{
    const stateregex = /^.+$/;
    return stateregex.test(state)
}
export  const pincodeval = pincode =>{
    const pincoderegex = /\d{6}$/;
    return pincoderegex.test(pincode)
}
export  const branchval = branchname =>{
    const branchregex = /^.+$/;
    return branchregex.test(branchname)
}
export  const addedbyval = addedby =>{
    const addedbyregex = /^.+$/;
    return addedbyregex.test(addedby)
}






// if(!myusernamevalidator(values.username))
// return seterror("enter your crt email formate")


// const [error, seterror] = useState('') 
