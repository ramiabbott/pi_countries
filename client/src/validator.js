const validate = (input) => {
    let errors = {}
    if (!input.name) {
        errors.name = 'Name is required'
    }
    //  else if(!input.name.trim()) {
    //         errors.name = "Name in blank"
    //    }
     else if (!/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g.test(input.name)) {
        errors.name = 'Name is invalid'
    }
     if (!input.duration || input.duration < 1) {
            errors.duration = 'Duration is required'
        }
        if (!parseInt(input.difficulty)) {
        errors.difficulty = 'Difficulty is required'
    }
    if (!input.seasons) {
        errors.season = 'You must select at least one season'
    }
    if (!input.countries) {
        errors.countries = 'You must select at least one country'
    }
    return errors
}

export default validate


/*

*/
// const submitHandler= (event) => {
//   event.preventDefault()
  
//   valideSubmit(form)
//   axios.post("http://localhost:3001/activities",form)
//     .then(res=>alert(res.data))
//     .catch(err=>alert(err))

// }