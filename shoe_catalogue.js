var shoes = [{
        Stock: '5',
        Size: '8',
        Price: 'R1200',
        Brand: 'Barker',
        Colour: 'Black'
    },
    {
        Stock: '4',
        Size: '7',
        Price: 'R899.00',
        Brand: 'Crocket & Jones',
        Colour: 'Brown'
    },
    {
        Stock: '5',
        Size: '9',
        Price: 'R999.00',
        Brand: 'Bass',
        Colour: 'Black'
    },
    {
        Stock: '6',
        Size: '9',
        Price: '2200',
        Brand: 'Florsheim',
        Colour: 'Tan'
    },
    {
        Stock: '5',
        Size: '6',
        Price: '1200',
        Brand: 'Barker',
        Colour: 'Brown'
    },
    {
        Stock: '7',
        Size: '8',
        Price: '1999.00',
        Brand: 'Florsheim',
        Colour: 'Black'
    },
    {
        Stock: '5',
        Size: '8',
        Price: '1200',
        Brand: 'Barker',
        Colour: 'Black'
    },
    {
        Stock: '6',
        Size: '8',
        Price: '2200',
        Brand: 'Florsheim',
        Colour: 'Tan'
    },
    {
        Stock: '6',
        Size: '7',
        Price: '2200',
        Brand: 'Bass',
        Colour: 'Tan'
    },
];

var myTemplate = document.querySelector('.shoeTamplate').innerHTML;
var compiledTemplate = Handlebars.compile(myTemplate);

function checkingStock() {

    var shoeType = document.querySelector('.Stock').value;
    var shoeSize = document.querySelector('.shoeSize').value;
    var shoeColors = document.querySelector('.shoeColors').value;
    var checkedShoes = [];

    //filter the data - find the elements that you want to display

    if (shoeColors == ''){
      var stockListHtml = compiledTemplate({
        shoeList : shoes
      })
      if (shoeType == '') {
        var stockListHtml = compiledTemplate({
          shoeList : shoes
        })
      }

      return document.getElementById('tableStock').innerHTML = stockListHtml;

    }


    var filteredList = [];
    for (var i = 0; i < shoes.length; i++) {
        var shoe = shoes[i];
        //
        if (shoe.Colour == shoeColors){
          filteredList.push(shoe);
        }
if (shoe.Brand == shoeType) {
  filteredList.push(shoe);
}
    }

    //display the elements...

    var stockListHtml = compiledTemplate({
      shoeList : filteredList
    });

    document.getElementById('tableStock').innerHTML = stockListHtml;

}
