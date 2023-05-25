

export default function Newvalidation(addtrader) {
const errors={}


const email_pattern = /^[^\s@]+@[^\s@]+$/;
const password_pattern =/\d{6}$/;
const phone_pattern =/\d{10}$/;

 if(!email_pattern.test(addtrader.username))
{
   errors.username = 'like email@emil.com'
}

 if(addtrader.password === ""){
    errors.password = "password is required"
}
else if(!password_pattern.test(addtrader.password))
{
   errors.password = 'password is 6 number'
}

 if(addtrader.companyname === ""){
    errors.companyname = "companyname for verfication"
}



 if(addtrader.branchname === ""){
    errors.branchname = " branchname for verfication"
}


if(addtrader.gender === ""){
    errors.gender = "gender is required"
}

if(addtrader.phonenumber === ""){
    errors.phonenumber = "phonenumber is required"
}
else if(!phone_pattern.test(addtrader.phonenumber))
{
   errors.phonenumber = '10 numbers only '
}

if(addtrader.alternumber === ""){
    errors.alternumber = "alternumber is required"
}
else if(!phone_pattern.test(addtrader.alternumber))
{
   errors.alternumber = '10 numbers only'
}

if(addtrader.email === ""){
    errors.email = "email is required"
}
else if(!email_pattern.test(addtrader.email))
{
   errors.email = 'like email@emil.com'
}


if(addtrader.address === ""){
    errors.address = "address is required"
}

if(addtrader.city === ""){
    errors.city = "select the city"
}

if(addtrader.state === ""){
    errors.state = "select the state"
}

if(addtrader.pincode === ""){
    errors.pincode = "pincode is required"
}
else if(!password_pattern.test(addtrader.pincode))
{
   errors.pincode = '6 number only'
}


if(addtrader.addedby === ""){
    errors.addedby = "addedby For verfication"
    }
if(addtrader.personname === ""){
errors.personname = "personname is required"
}
    

return errors;
}

