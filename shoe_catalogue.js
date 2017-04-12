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
        Price: 'R2200',
        Brand: 'Florsheim',
        Colour: 'Tan'
    },
    {
        Stock: '5',
        Size: '6',
        Price: 'R1200',
        Brand: 'Barker',
        Colour: 'Brown'
    },
    {
        Stock: '7',
        Size: '8',
        Price: 'R1999.00',
        Brand: 'Florsheim',
        Colour: 'Black'
    },
    {
        Stock: '5',
        Size: '8',
        Price: 'R1200',
        Brand: 'Barker',
        Colour: 'Black'
    },
    {
        Stock: '6',
        Size: '8',
        Price: 'R2200',
        Brand: 'Florsheim',
        Colour: 'Tan'
    },
    {
        Stock: '6',
        Size: '7',
        Price: 'R2200',
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

    if (shoeColors == '') {
        var stockListHtml = compiledTemplate({
            shoeList: shoes
        })
        return document.getElementById('tableStock').innerHTML = stockListHtml;

    }

    var filteredList = [];
    for (var i = 0; i < shoes.length; i++) {
        var shoe = shoes[i];
        //
        if (shoe.Colour == shoeColors) {
            filteredList.push(shoe);
        }
    }
    //display the elements...

    var stockListHtml = compiledTemplate({
        shoeList: filteredList
    });
    document.getElementById('tableStock').innerHTML = stockListHtml;
}


var add = document.querySelector('.addButton');

add.addEventListener('click', function() {

    var stock = document.querySelector('.stock');
    var price = document.querySelector('.price');
    var brand = document.querySelector('.brand');
    var colour = document.querySelector('.colour');
    var size = document.querySelector('.size');

    var newStock = stock.value;
    var newPrice = price.value;
    var newBrand = brand.value;
    var newColour = colour.value;
    var newSize = size.value;


    var shoeList = {
        Stock: stock.value,
        Size: size.value,
        Price: price.value,
        Brand: brand.value,
        Colour: colour.value
    };
    console.log(shoeList);
    shoes.push(shoeList);

});




var colorTemp = document.querySelector('.colorTemp');
var compileColor = Handlebars.compile(colorTemp.innerHTML);
var colorDisplay = document.getElementById('colorDisplay');


(function () {
  var results = compileColor({
    color: shoes});
 colorDisplay.innerHTML = results;
})
()
