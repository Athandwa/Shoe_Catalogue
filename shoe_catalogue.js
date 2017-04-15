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

var shoeColorsDropDown = document.getElementById('shoeColorsDropDown');
var compiledColorTemplate = Handlebars.compile(shoeColorsDropDown.innerHTML);


var handleColors = compiledColorTemplate({
    colorList: shoes
});

document.querySelector('.colorDisplay').innerHTML = handleColors;

var shoeSizeDropDown = document.getElementById('shoeSizeDropDown');
var compiledSizesTemplate = Handlebars.compile(shoeSizeDropDown.innerHTML);

var handleSizes = compiledSizesTemplate({
    sizeList: shoes
});

document.querySelector('.sizeDisplay').innerHTML = handleSizes;


var shoeBrandsDropDown = document.getElementById('shoeBrandsDropDown');
var compiledBrandsTemplate = Handlebars.compile(shoeBrandsDropDown.innerHTML);

var handleBrands = compiledBrandsTemplate({
    brandList: shoes
});

document.querySelector('.displayBrands').innerHTML = handleBrands;


function checkingStock() {

    alert(Handlebars);
    var stockListHtml = compiledTemplate({
        shoeList: shoes
    })
    return document.getElementById('tableStock').innerHTML = stockListHtml;
}


var addButton = document.querySelector('.addButton');

addButton.addEventListener('click', function() {

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
    shoes.push(shoeList);

});
