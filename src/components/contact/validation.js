const validation = (input) =>{
    let errors = {};
    
    if(input.from_name ===""){
        errors.from_name = "Please Tell me what´s your name"
    }
    if(! /^[^\d\s]+$/.test(input.from_name)){
        errors.from_name = "Your name must have letters only"
    }
       
    if(input.from_email ===""){
        errors.from_email = "Please send me your email"
    }
    if(! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.from_email)){
        errors.from_email = "Email invalid"
    }
    
    // if(input.life ===""){
    //     errors.life = "Ingresa un número"
    // }
    // if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.life)){
    //     errors.life = "Ingresa un valor entre 0 y 100"
    // }
    
    // if(input.attack ===""){
    //     errors.attack = "Ingresa un número"
    // }
    // if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.attack)){
    //     errors.attack = "Ingresa un valor entre 0 y 100"
    // }
    
    // if(input.defense === ""){
    //     errors.defense = "Ingresa un número"
    // }
    // if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.defense)){
    //     errors.defense = "Ingresa un valor entre 0 y 100"
    // }
    
    // if(input.speed === ""){
    //     errors.speed = "Ingresa un valor entre 0 y 100"
    // }
    // if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.speed)){
    //     errors.speed = "Ingresa un valor entre 0 y 100"
    // }
    
    // if(input.height ===""){
    //     errors.height = "Ingresa un número"
    // }
    // if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.height)){
    //     errors.height = "Ingresa un valor entre 0 y 100"
    // }
    
    // if(input.weight === ""){
    //     errors.weight = "Ingresa un número"
    // }
    // if(! /^(?:100|[1-9][0-9]?|0)$/.test(input.weight)){
    //     errors.weight = "Ingresa un valor entre 0 y 100"
    // }
    return errors;
    
    }   
    
    
    export default(validation)