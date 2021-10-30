document.getElementById('btn-deposit').addEventListener('click', function(){
    //DEPOSITE VALUE ADD
   const depositInput = document.getElementById('deposit-input');
   const depositInputValue = depositInput.value;
   const depositInputValuefloat = parseFloat(depositInputValue);
   //console.log(depositInputValuefloat);

   const showValue = document.getElementById('deposite-value-show');
   const showValueInner = showValue.innerText;
   const showValueInnerAmmount = parseFloat(showValueInner);
   const showTotalAmount = depositInputValuefloat + showValueInnerAmmount;

    //TOTAL BALANCE SHOW
    const totalBalanceInput = document.getElementById('total-balance');
    const totalBalanceInputValue = totalBalanceInput.innerText;
    const totalBalanceInputValuefloat = parseFloat(totalBalanceInputValue);
    const totalBalanceAmount = totalBalanceInputValuefloat + depositInputValuefloat;
    
    //console.log(totalBalanceInput);

    if(showTotalAmount > 0){
        showValue.innerText = showTotalAmount;
        totalBalanceInput.innerText = totalBalanceAmount;
    }
      

    depositInput.value = '';

});

document.getElementById('btn-widthdraw').addEventListener('click', function(){
    const widthdrawInput = document.getElementById('widthdraw-input');
    const widthdrawInputValue = widthdrawInput.value;
    const widthdrawInputValuefloat = parseFloat(widthdrawInputValue);
    //console.log(widthdrawInputValuefloat);

    const showWidthdrawValue = document.getElementById('widthdraw-value-show');
    const showWidthdrawValueInner = showWidthdrawValue.innerText;
    const showWidthdrawValueInnerAmmount = parseFloat(showWidthdrawValueInner);
    const showWidthdrawTotalAmount = showWidthdrawValueInnerAmmount + widthdrawInputValuefloat;
   ;

    widthdrawInput.value = '';

    //WIDTHDRAW FROM TOTAL BALANCE 
    const updateBalanceInput = document.getElementById('total-balance');
    const updateBalanceInputValue = updateBalanceInput.innerText;
    const updateBalanceInputValuefloat = parseFloat(updateBalanceInputValue);
    const updateBalanceAmount = updateBalanceInputValuefloat - widthdrawInputValuefloat;
    //console.log(totalBalanceInput);

    if(showWidthdrawTotalAmount > 0){
        showWidthdrawValue.innerText = showWidthdrawTotalAmount
        updateBalanceInput.innerText = updateBalanceAmount;
    }

});