(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        //OpenFin is ready
        fin.desktop.main(function() {
            //create windows
            const winOpt = {
                name: 'test-window',
                autoShow: true,
            }
            fin.Window.create(winOpt);
        });
    });

}());
