let my_Balance = parseInt(document.getElementById("my_Balance").innerText);

function perform_transaction(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 10000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var my_Balance = parseInt(document.getElementById("my_Balance").innerText) - enterAmount
      document.getElementById("my_Balance").innerText = my_Balance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(` Transaction Successful !!  
      USD ${enterAmount} is successfully transferred  to ${enterName}@gmail.com.`)

      // &copy; Sairam Nomula
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`USD ${enterAmount} is transferred to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}