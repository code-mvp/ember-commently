export function initialize( /*app*/ ) {
    // if (typeof FastBoot === 'undefined' && navigator.geolocation) {
    //     const geo = navigator.geolocation;
    //     app.deferReadiness();
    //     geo.getCurrentPosition((pos) => {
    //         let pt = pos.coords;
    //         let loc = {
    //             lat: pt.latitude,
    //             lng: pt.longitude
    //         };
    //         app.register('data:location', loc, {
    //             instantiate: false
    //         });
    //         app.advanceReadiness();
    //     });
    // }
}

export default {
    name: 'geo',
    initialize
};