// Ship Variables

var baseShips = [
  {
    name: '300i',
    role: 'Touring',
    flavorText: 'If you’re going to travel the stars… why not do it in style? The 300i is Origin Jumpworks’ premiere luxury spacecraft. It is a sleek, silver killer that sends as much of a message with its silhouette as it does with its weaponry.',
    buttonExplore: 'Explore the 300i',
    id: 'threeHundredI',
    shipBg: 'http://i.imgur.com/zDdWO4g.jpg',
    maxCrew: 1,
    mass: 20085,
    cargo: 4,
    length: 24,
    height: 7,
    beam: 16,
    upgradeCap: 6,
    hullMat: 'Metal',
    pwrPlantSize: 3,
    pwrPlantFactory: 'VACOM StarHeart IV',
    thrustersMainNum: 1, // 1x TR4
    engineFactory: 'Hammer Propulsion HE 5.3',
    thrustersManeuveringNum: 12, //12x TR4
    thrustersManeuveringMake: '10× Origin Scalpel Precision, 2× Origin Omni Precision',
    sheild: 'Gorgon Defender AllStop',
    weaponSysC1: '2× A&amp;R Omnisky VI Laser Cannons',
    weaponSysC2: 'N/A',
    weaponSysC3: 'N/A',
    vPrecision: 50,
    vSCM: 215,
    vBoost: 645,
    maxSpeedPitch: 65,
    maxSpeedYaw: 65.0,
    maxSpeedRoll: 75,
    maxAccelPitch: 950,
    maxAccelYaw: 50,
    maxAccelRoll: 950,
    modalFlavorTitle: 'DISTINCT LUXURY',
    modalFlavorText: 'The 300i touring model is the premiere spacecraft hull on the market today. A true jack-of-all-trades, the 300i is capable of making any role its own and doing so with the class and sophistication expected of an ORIGIN design. All models feature Gorgon Defender shields and A&amp;R Omnisky VI cannon standard.',
  },
  {
    name: '315p',
    role: 'Exploration',
    flavorText: 'Exploration is man’s highest calling. Prepare to chart distant horizons with man’s most sophisticated piece of technology, the ORIGIN 315p. Featuring a more robust power plant and a custom scanning package, exclusively designed by Chimera Communications.',
    buttonExplore: 'Explore the 315p',
    id: 'three15p',
    shipBg: 'http://i.imgur.com/Gw35AJX.jpg',
    maxCrew: 1,
    mass: 20085,
    cargo: 6,
    length: 24,
    height: 7,
    beam: 16,
    upgradeCap: 6,
    hullMat: 'Metal',
    pwrPlantSize: 4,
    pwrPlantFactory: 'Alliance Startech K3S-9',
    thrustersMainNum: 1, //1x TR4
    engineFactory: 'Dragon Stellar STC Silver',
    thrustersManeuveringNum: 12, //12x TR1
    thrustersManeuveringMake: '10× Origin Scalpel Precision, 2× Origin Omni Precision',
    sheild: 'Gorgon Defender AllStop',
    weaponSysC1: '2× A&amp;R Omnisky VI Laser Cannons',
    weaponSysC2: 'Greycat Industrial SureGrip Tractor Beam',
    weaponSysC3: 'N/A',
    vPrecision: '50.0m/s',
    vSCM: 215,
    vBoost: 700,
    maxSpeedPitch: 65,
    maxSpeedYaw: 65, //65.0°/s
    maxSpeedRoll: 75,
    maxAccelPitch: 950,
    maxAccelYaw: 50,
    maxAccelRoll: 950, //950°/s²
    modalFlavorTitle: 'BEYOND DISCOVERY',
    modalFlavorText: 'Exploration is man’s highest calling. Prepare to chart distant horizons with man’s most sophisticated piece of technology, the ORIGIN 315p. Featuring a more robust power plant and a custom scanning package, exclusively designed by Chimera Communications, the 315p is designed for the pilot who wants to go further, to see things that few have seen.',
  },
  {
    name: '325a',
    role: 'Interdiction',
    flavorText: 'Just because it’s a rough galaxy doesn’t mean you need to sacrifice your comfort: the 325a can come out on top in any dogfight. The 325a features an advanced weapon payload as well as a custom targeting system designed especially for the 325a by WillsOp.',
    buttonExplore: 'Explore the 325a',
    id: 'three25a',
    shipBg: 'http://i.imgur.com/YigEDiE.jpg',
    maxCrew: 1,
    mass: 20085,
    cargo: 4,
    length: 24,
    height: 7,
    beam: 16,
    upgradeCap: 6,
    hullMat: 'Metal',
    pwrPlantSize: 3,
    pwrPlantFactory: 'VHT 2 Plus',
    thrustersMainNum: 1, //1x TR4
    engineFactory: 'Hammer Propulsion',
    thrustersManeuveringNum: 12,  //12x TR1
    thrustersManeuveringMake: '10× Origin Scalpel Precision, 2× Origin Omni Precision',
    sheild: 'Gorgon Defender ForceWall',
    weaponSysC1: '2× Omnisky VI Laser Cannons',
    weaponSysC2: '1× Klaus Werner Mass Driver Cannon',
    weaponSysC3: '2x2 Talon Stalker IR',
    vPrecision: 50, //50 m/s
    vSCM: 210,
    vBoost: 630,
    maxSpeedPitch: 75, //75.0°/s
    maxSpeedYaw: 75, //75.0°/s
    maxSpeedRoll: 85,
    maxAccelPitch: 950, //950°/s²
    maxAccelYaw: 50,
    maxAccelRoll: 950, //950°/s²
    modalFlavorTitle: 'UNEQUALLED STRENGTH',
    modalFlavorText: 'It’s a dangerous universe out there. Be the arbiter of your fate with the combat-enhanced ORIGIN 325a. Just because it’s a rough galaxy doesn’t mean you need to sacrifice your comfort: the 325a can come out on top in any dogfight. The 325a features an advanced weapon payload as well as a custom targeting system designed especially for the 325a by WillsOp.'
  },
]

var raceShip = [
  {
    name: '350r',
    role: 'Racing',
    flavorText: 'The combination of a Gangleri BP 707 Standard powerplant with a 300i fuselage re-engineered to accommodate twin Hammer Propulsion HM 4.3 thrusters makes the 350r the fastest personal craft you’ll ever call your own.',
    buttonExplore: 'Explore the 325a',
    id: 'three50r',
    shipBg: 'http://i.imgur.com/gYLaaBj.jpg',
    maxCrew: 1,
    mass: 20085,
    cargo: 0,
    length: 24,
    height: 7,
    beam: 16,
    upgradeCap: 6,
    hullMat: 'Metal',
    pwrPlantSize: 4,
    pwrPlantFactory: 'VACOM StarHeart IV',
    thrustersMainNum: 2, //2x TR4
    engineFactory: 'Hammer Propulsion HM 4.3',
    thrustersManeuveringNum: 12,  //12x TR1
    thrustersManeuveringMake: '10× Origin Scalpel Precision, 2× Origin Omni Precision',
    sheild: 'Gorgon Defender AllStop',
    weaponSysC1: '2× A&amp;R Omnisky III Laser Cannons',
    weaponSysC2: 'N/A',
    weaponSysC3: 'N/A',
    vPrecision: 70, //70 m/s
    vSCM: 270,
    vBoost: 810,
    maxSpeedPitch: 95, //75.0°/s
    maxSpeedYaw: 95, //75.0°/s
    maxSpeedRoll: 105,
    maxAccelPitch: 950, //950°/s²
    maxAccelYaw: 50,
    maxAccelRoll: 950, //950°/s²
    modalFlavorTitle: 'PURE SPEED',
    modalFlavorText: 'Since the dawn of civilization, Humans have striven to build faster machines. Now, ORIGIN presents the culmination of that effort: the ORIGIN 350r. The combination of a Gangleri BP 707 Standard powerplant with a 300i fuselate re-engineered to ac- commodate twin Hammer Propulsion HM 4.3 thrusters makes the 350r the fastest personal craft you’ll ever call your own.'
  }
]



$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// Regular HTML Elements

var div = document.createElement('div')

var h1 = document.createElement('h1')
var h2 = document.createElement('h2')
var h3 = document.createElement('h3')
var h4 = document.createElement('h4')
var h5 = document.createElement('h5')

var link = document.createElement('a')



/* Bootstrap Variables
var container = document.createElement('div')
row.classList.add ('container')

var row = document.createElement('div')
row.classList.add ('row')

var col4 = document.createElement('div')
col.classList.add ('col-xs-4')

var col12 = document.createElement('div')
col.classList.add ('col-xs-12')

var buttonDefault = document.createElement('button')
row.classList.add ('btn btn-default')

var buttonPrimary = document.createElement('button')
row.classList.add ('btn btn-primary')

var buttonSuccess = document.createElement('button')
row.classList.add ('btn btn-success')

var buttonInfo = document.createElement('button')
row.classList.add ('btn btn-info')

var buttonWarning = document.createElement('button')
row.classList.add ('btn btn-warning')

var buttonDanger = document.createElement('button')
row.classList.add ('btn btn-danger')

var tableHvr = document.createElement('table')
row.classList.add ('table table-hover')
*/


// add base ships


var baseShipsRow = document.getElementById('baseShips')

function baseShipsCol (arrayOfShips) {
  for (var i = 0; i < arrayOfShips.length; i++) {
    var $col = document.createElement('div')
    $col.classList.add ('col-xs-4')
    $col.id = arrayOfShips[i].id

    document.querySelector('#baseShips').appendChild($col)
  }
}

function raceShipCol (arrayOfShips) {
  for (var i = 0; i < arrayOfShips.length; i++) {
    var $col = document.createElement('div')
    var $description = document.createElement('div')
    var $name = document.createElement('h2')
    var $flavorText = document.createElement('p')
    var $exploreButton = document.createElement('button')

    $col.classList.add ('col-xs-12')
    $col.id = arrayOfShips[i].id
    $description.classList.add ('description')

    $name.textContent = arrayOfShips.name
    $flavorText.textContent = arrayOfShips.flavorText
    $exploreButton.textContent = arrayOfShips.buttonExplore

    document.querySelector('#raceShip').appendChild($col)

    $name.appendChild($description)
    $flavorText.appendChild($name)
    $exploreButton.appendChild($flavorText)
    document.querySelector('#three50r').appendChild($description)
  }
}


// On Page load functions

function start() {
  baseShipsCol(baseShips)
  raceShipCol(raceShip)

}
window.onload=start()


/* other method of ship adding
function renderBaseShipsCol(ship) {

  var $ship = document.createElement('div')
  var $name = document.createElement('h2')
  var $flavorText = document.createElement('p')
  var $exploreButton = document.createElement('button')

  $ship.classList.add('col-xs-4')
  $ship.id = ship[i].id
  $name.textContent = baseShips.name
  $exploreButton.textContent = baseShips.buttonExplore

  $ship.appendChild($name)
  $name.appendChild($flavorText)
  $flavorText.appendChild(exploreButton)

  return $ship
}
*/




/*  event listeners
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});


$details.addEventListener('click', function() {
  if (event.target.tagName !== 'button') {
    return
  }
* /
})

/*  add to cart function

$cartAdd.addEventListener('click', function() {
  if (event.target.tagName !== 'button') {
    return
  }
  app.cart.quantity += 1  //create car var
  $cartCount.textContent  app.cart.quantity
  var itemID = event.target.getAttribute ('data-item-id')
  var item = findItem
})

function findItem (item, itemId){
  for (var i=0; i < ; i ++){
    var item = items[i]
    if (item.id.toString() === itemId){
      return item
    }
  }
}
*/


/* <div class="col-xs-4" id="threeHundredI">
    <div class="description">
      <h2 >300i</h2>
      <p>If you’re going to travel the stars… why not do it in style?
        The 300i is Origin Jumpworks’ premiere luxury spacecraft.
        It is a sleek, silver killer that sends as much of a message
        with its silhouette as it does with its weaponry.</p>
        */
