function showInputError (formElement,inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    errorElement.classList.add(config.errorClass);
    errorElement.textContent= inputElement.validationMessage;
    inputElement.classList.add (config.inputErrorClass);
  
  };
  
  function  hiddeInputError(formElement,inputElement, config) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent='';
    inputElement.classList.remove(config.inputErrorClass);
  }
  
  function  checkInputValidity(formElement,inputElement,config){
     if(inputElement.validity.valid){
      hiddeInputError(formElement,inputElement,config)
     }
     else{
      showInputError(formElement,inputElement,config)
     }
  };

  function hasInvalidInput (inputList){
    return inputList.some((inputElement)=> !inputElement.validity.valid);
  };

  function toggleButtonState (inputList,config,buttonElement){
    if (hasInvalidInput(inputList)){
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true;
    }
    else{
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false; 
    }
  };
  
  function setEventListeners (formElement,config){
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    
    toggleButtonState(inputList,config,buttonElement);

    inputList.forEach((inputElement)=> {
      inputElement.addEventListener('input', ()=>{
        checkInputValidity(formElement,inputElement,config);
        toggleButtonState(inputList,config,buttonElement);
      })
    })
    };
    
    function enableValidation(config) {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    
    formList.forEach ((formElement) => {
    setEventListeners(formElement,config)
    })
    };

    enableValidation(validationConfig);