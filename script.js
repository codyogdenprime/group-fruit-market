
console.log('sourced');
piesArray[strawberryBanana{
  name:'Strawberry Banana'
  pic:
  price:
}, other];


var displayPies = function () {
  console.log('in displayPies');
  console.log('in local array',piesArray);
  $('#outputDiv p').textContent="";
  for (var i = 0; i < piesArray.length; i++) {
    var newHeader= document.createElement('h2');
    var newParagraph=document.createElement('p')

    newHeader.textContent= piesArray[i].first_name+' '+piesArray[i].last_name;
    newParagraph.textContent= piesArray[i].info;

    $('#outputDiv').append(newHeader);
    $('#outputDiv').append(newParagraph);

  }//for loop


};//displayPies
displayPies();
