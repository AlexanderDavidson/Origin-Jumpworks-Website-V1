// ----- Ship Variables -----

var baseShips = [
  {
    name: '300i',
    role: 'Touring',
    flavorText: 'If you’re going to travel the stars… why not do it in style? The 300i is Origin Jumpworks’ premiere luxury spacecraft. It is a sleek, silver killer that sends as much of a message with its silhouette as it does with its weaponry.',
    buttonExplore: 'Explore the 300i',
    id: 'threeHundredI',
    shipBg: 'http://i.imgur.com/zDdWO4g.jpg',
    vidEmbed: 'https://www.youtube.com/embed/JrQ0qMRZ_1Q?autoplay=1',
    sketchFab: 'https://sketchfab.com/models/504663144d53469199baa53f5b934cd1/embed?autospin=0.2&amp;autostart=1&amp;preload=1;transparent=1;ui_general_controls=0&amp;ui_settings=0&amp;ui_help=0&amp;ui_vr=0&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_infos=0&amp',
    threeDfileLocal: '../assets/ORIGIN-300i3.obj',
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
    vidEmbed: 'https://www.youtube.com/embed/lzlNuCJ0NqE?autoplay=1',
    sketchFab: 'https://sketchfab.com/models/48328d2b7e9c454a88da91f4b0d81311/embed?autospin=0.2&amp;autostart=1&amp;preload=1;transparent=1;ui_general_controls=0&amp;ui_settings=0&amp;ui_help=0&amp;ui_vr=0&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_infos=0&amp',
    threeDfileLocal: '../assets/ORIGIN-315p3.obj',
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
    vidEmbed: 'https://www.youtube.com/embed/OvIuzXmkTDY?autoplay=1',
    sketchFab: 'https://sketchfab.com/models/2d050f5296e24debba9436958d1e4921/embed?autospin=0.2&amp;autostart=1&amp;preload=1;transparent=1;ui_general_controls=0&amp;ui_settings=0&amp;ui_help=0&amp;ui_vr=0&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_infos=0&amp',
    threeDfileLocal: '../assets/ORIGIN-325a3.obj',
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
  {
    name: '350r',
    role: 'Racing',
    flavorText: 'The combination of a Gangleri BP 707 Standard powerplant with a 300i fuselage re-engineered to accommodate twin Hammer Propulsion HM 4.3 thrusters makes the 350r the fastest personal craft you’ll ever call your own.',
    buttonExplore: 'Explore the 325a',
    id: 'three50r',
    shipBg: 'http://i.imgur.com/gYLaaBj.jpg',
    vidEmbed: 'https://www.youtube.com/embed/fYjD1wiTBmM?autoplay=1',
    sketchFab: 'https://sketchfab.com/models/ac1b0d41f1ff40d18bccb0af0e94216f/embed?autospin=0.2&amp;autostart=1&amp;preload=1;transparent=1;ui_general_controls=0&amp;ui_settings=0&amp;ui_help=0&amp;ui_vr=0&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_infos=0&amp',
    threeDfileLocal: '../assets/ORIGIN-350r3.obj',
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
  },
]

// ----- 3js -----

var scene, camera, renderer;

  init();
  animate();



// ------- ADD SHIPS -------

function baseShip(ship, size) {
  var $col = document.createElement('div')
  var $descriptionBase = document.createElement('div')
  var $name = document.createElement('h2')
  var $flavorText = document.createElement('p')
  var $exploreButton = document.createElement('button')

  $col.classList.add('col-xs-' + size)
  $col.id = ship.id
  $descriptionBase.classList.add('descriptionBase')

  if (ship.name === '350r') {
    $descriptionBase.classList.add('featured')
  }

  $name.classList.add('shipName')
  $name.id = ship.name
  $flavorText.classList.add('flavorText')
  $exploreButton.classList.add('btn', 'btn-default')
  $exploreButton.setAttribute('data-ship-id', ship.id)

  $name.textContent = ship.name
  $flavorText.textContent = ship.flavorText
  $exploreButton.textContent = ship.buttonExplore

  $col.appendChild($descriptionBase)
  $descriptionBase.appendChild($name)
  $descriptionBase.appendChild($flavorText)
  $descriptionBase.appendChild($exploreButton)

  return $col
}



// ----- Explore Button Modal/Column -----


// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').focus()
// })

function renderShipDetails(ship) {

  var $ship = document.createElement('div')
  var $panel = document.createElement('div')
  var $heading = document.createElement('div')
  var $name = document.createElement('h1')

  var $body = document.createElement('div')

  var $vid = document.createElement('div')
  var $vidEmbed = document.createElement('iframe')


  var $modalFlavorTitle = document.createElement('h2')
  var $sketchFab = document.createElement('iframe')
  var $description = document.createElement('p')

  var $addToCart = document.createElement('button')
/*
  // ----- 3d -----

  // Sets up the scene.
  function init(ship) {

    // Create the scene and set the scene size.
    scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    document.body.appendChild(renderer.domElement);

    // Create a camera, zoom it out from the model a bit, and add it to the scene.
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(0,6,0);
    scene.add(camera);

    // Create an event listener that resizes the renderer with the browser window.
    window.addEventListener('resize', function() {
      var WIDTH = window.innerWidth,
         HEIGHT = window.innerHeight;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });

    // Set the background color of the scene.
    renderer.setClearColorHex(0x333F47, 1);

    // Create a light, set its position, and add it to the scene.
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);

    // Load in the mesh and add it to the scene.
    var loader = new THREE.OBJLoader();
    loader.load( ship.threeDfileLocal, function(geometry){
      var material = new THREE.MeshLambertMaterial({color: 0x55B663});
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    });

    // Add OrbitControls so that we can pan around with the mouse.
   //controls = new THREE.OrbitControls(camera, renderer.domElement);
  }

  // Renders the scene and updates the render as needed.
  function animate() {

   // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimationFrame(animate);

   // Render the scene.
    renderer.render(scene, camera);
    controls.update();

 }
*/
  //----- classes & attributes -----

  $ship.classList.add('col-xs-12')
  $panel.classList.add('panel', 'panel-primary')
  $heading.classList.add('panel-heading')
  $name.classList.add('panel-title')
  $name.textContent = ship.name
  $modalFlavorTitle.textContent = ship.modalFlavorTitle
  // ------ Video Embed ----
  $vid.classList.add('panel-body', 'embed-responsive', 'embed-responsive-16by9')
  $vidEmbed.setAttribute('src', ship.vidEmbed)
  $vidEmbed.setAttribute('modestbranding', 0)
  $vidEmbed.classList.add('embed-responsive-item')
// -----Body-----
  $body.classList.add('panel-body')

  $sketchFab.setAttribute('width', 400)
  $sketchFab.setAttribute('height', 220)
  $sketchFab.classList.add('sketchFab')
  $sketchFab.setAttribute('src', ship.sketchFab)
  $sketchFab.classList.add('frameborder', 0)

  $description.textContent = ship.modalFlavorText
  $description.classList.add('description')

  $addToCart.classList.add('btn', 'btn-default', 'cartButton')
  $addToCart.textContent = 'Add to Cart'
  $addToCart.setAttribute('href', '#')

// ----- Appends -----
  $ship.appendChild($panel)
  $panel.appendChild($heading)
  $heading.appendChild($name)
  $body.appendChild($modalFlavorTitle)
  $body.appendChild($description)
  $body.appendChild($sketchFab)
  $body.appendChild($addToCart)

  $panel.appendChild($vid)
  $vid.appendChild($vidEmbed)

  $panel.appendChild($body)

  return $ship
}


function findBaseShip(baseShips, shipId) {
  for (var i = 0; i < baseShips.length; i++) {
    if (baseShips[i].id === shipId) {
      return baseShips[i]
    }
  }
}

function findRaceShip(raceShip, shipId) {
  for (var i = 0; i < raceShip.length; i++) {
    if (raceShip[i].id === shipId) {
      return raceShip[i]
    }
  }
}

function showView($views, viewId) {
  for (var i = 0; i < $views.children.length; i++) {
    var $view = $views.children[i]
    if ($view.id === viewId) {
      $view.classList.remove('hidden')
    }
    else {
      $view.classList.add('hidden')
    }
  }
}


// ----- EVENT LISTENERS -----

document.addEventListener('DOMContentLoaded', function() {
  var $baseShips = document.querySelector('#base-ships')
  baseShips.forEach(function(ship) {
    var $ship = baseShip(ship, 4)
    $baseShips.appendChild($ship)
  })

  var $views = document.querySelector('#views')
  var $home = document.querySelector('nav a') //link to navbar
  var $shipList = document.querySelector('.ship-list')
  var $shipDetails = document.querySelector('#ship-details')

  $shipList.addEventListener('click', function (event) {
    if (event.target.tagName !== 'BUTTON') {
      return
    }
    var shipId = event.target.getAttribute('data-ship-id')
    var ship = findBaseShip(baseShips, shipId)
    showView($views, 'ship-details')
    $shipDetails.innerHTML = ''
    $shipDetails.appendChild(renderShipDetails(ship))
  })


  $home.addEventListener('click', function (event) {
    showView($views, 'base-ships')
  })

})
