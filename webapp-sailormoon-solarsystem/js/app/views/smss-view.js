define(function () {
    var internals = {
        handlers: {},
        elements: {}
    };

    var externals = {};


    internals.createButton = function () {
        return (

            '<div class="stop-button-div"><button class="stop-button">PAUSE TO CHOOSE YOUR SAILOR</button>' +
            '</div>')
    }
    internals.createSolarSystem = function () {
        return (
            '<body id="solarSystem"><div class="sun"></div>' +
            '<div class="mercury_orbit">' +
            '<div class="mercury"></div></div>' +
            '<div class="venus_orbit">' +
            '<div class="venus"></div></div>' +
            '<div class="earth_orbit">' +
            '<div class="earth">' +
            '<div class="moon_orbit">' +
            '<div class="moon"></div></div></div></div>' +
            '<div class="mars_orbit">' +
            '<div class="mars"></div></div>' +
            '<div class="jupiter_orbit">' +
            '<div class="jupiter"></div></div>' +
            '<div class="saturn_orbit">' +
            '<div class="saturn">' +
            '<div class="saturn_ring"></div></div></div>' +
            '<div class="uranus_orbit">' +
            '<div class="uranus"></div></div>' +
            '<div class="neptune_orbit">' +
            '<div class="neptune" title="Go to Neptune"></div></div></body>'

        );

    };

    internals.createOrbits = function () {
        return (

            '<div class="mercury1_orbit">' +

            '<div class="venus1_orbit">' +

            '<div class="earth1_orbit">' +

            '<div class="mars1_orbit">' +

            '<div class="jupiter1_orbit">' +

            '<div class="saturn1_orbit">' +


            '<div class="uranus1_orbit">' +

            '<div class="neptune1_orbit">'


        );
    }
    internals.renderOrbits = function () {
        if (internals.elements.orbits) {
            internals.elements.orbits.empty();
        }
        internals.elements.orbits = $(internals.createOrbits());
        internals.elements.app.append(internals.elements.orbits);
    }

    internals.renderSolarSystem = function () {

        if (internals.elements.solarSystem) {
            internals.elements.solarSystem.empty();
        }

        
        internals.elements.solarSystem = $(internals.createSolarSystem());
        //internals.elements.solarSystem.click(internals.handlers['neptune']('neptune'))

        internals.elements.solarSystem.click(function (event) {

            const classToHandler = {


                'mercury': () => internals.handlers['mercury']('sailors/mercury'),
                'venus': () => internals.handlers['venus']('sailors/venus'),
                'moon': () => internals.handlers['moon']('sailors/moon'),
                'mars': () => internals.handlers['mars']('sailors/mars'),
                'jupiter': () => internals.handlers['jupiter']('sailors/jupiter'),
                'saturn_ring': () => internals.handlers['saturn']('sailors/saturn'),
                'uranus': () => internals.handlers['uranus']('sailors/uranus'),
                'neptune': () => internals.handlers['neptune']('sailors/neptune'),


            };

            const clickedClass = Array.from(event.target.classList).find(className => classToHandler.hasOwnProperty(className));

            if (clickedClass) {
                console.log('Clicked class:', clickedClass);
                classToHandler[clickedClass]();
            } else {
                console.log('Class not mapped:', event.target.classList);
                // Handle the case where the class is not mapped

            }
        });
        internals.elements.app.append(internals.elements.solarSystem);



    };

    internals.renderButton = function () {

        internals.elements.button = $(internals.createButton())
        internals.elements.button.click(internals.handlers['stop-button']);


        internals.elements.app.append(internals.elements.button);

    };


    externals.bind = function (event, handler) {

        internals.handlers[event] = handler;

    };

    externals.render = function () {

        internals.elements.app = $('#app');
        internals.renderButton();
        internals.renderSolarSystem();
        internals.renderOrbits();


    };
    return externals;
});