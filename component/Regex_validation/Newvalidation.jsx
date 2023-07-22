    export default function NewValidation(addtrader) {
        const errors = {};
    
        const emailPattern = /^[^\s@]+@[^\s@]+$/;
        const passwordPattern = /\d{6}$/;
        const phonePattern = /\d{10}$/;
    
        if (!emailPattern.test(addtrader.username)) {
        errors.username = 'Invalid email format';
        
    }

        if (addtrader.password === '') {
            errors.password = 'Password is required';
        } else if (!passwordPattern.test(addtrader.password)) {
            errors.password = 'Password must be 6 digits';
        }
        

    
        if (addtrader.companyname === '') {
        errors.companyname = 'Company name is required for verification';
        }
    
        if (addtrader.branchname === '') {
        errors.branchname = 'Branch name is required for verification';
        }
    
        if (addtrader.gender === '') {
        errors.gender = 'Gender is required';
        }
    
        if (addtrader.phonenumber === '') {
        errors.phonenumber = 'Phone number is required';
        } else if (!phonePattern.test(addtrader.phonenumber)) {
        errors.phonenumber = 'Phone number must be 10 digits';
        }
    
        if (addtrader.alternumber === '') {
        errors.alternumber = 'Alternate number is required';
        } else if (!phonePattern.test(addtrader.alternumber)) {
        errors.alternumber = 'Alternate number must be 10 digits';
        }
    
        if (addtrader.email === '') {
        errors.email = 'Email is required';
        } else if (!emailPattern.test(addtrader.email)) {
        errors.email = 'Invalid email format';
        }
    
        if (addtrader.address === '') {
        errors.address = 'Address is required';
        }
    
        if (addtrader.city === '') {
        errors.city = 'Select the city';
        }
    
        if (addtrader.state === '') {
        errors.state = 'Select the state';
        }
    
        if (addtrader.pincode === '') {
        errors.pincode = 'Pincode is required';
        } else if (!passwordPattern.test(addtrader.pincode)) {
        errors.pincode = 'Pincode must be 6 digits';
        }
    
        if (addtrader.addedby === '') {
        errors.addedby = 'Added by is required for verification';
        }
    
        if (addtrader.personname === '') {
        errors.personname = 'Person name is required';
        }
    
        return errors;
    }
    