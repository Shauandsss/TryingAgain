$(document).ready(function(){

    const app = require('electron').remote.app
    const { remote } = require('electron');
    


    $('#btnCancel').click(function(){
        console.log("Fechar");
        remote.BrowserWindow.getFocusedWindow().close();
    });

    $('#btnPlus').click(function(){
        console.log("Maximizar");
        remote.BrowserWindow.getFocusedWindow().maximize();
    }); 

    $('#btnMinus').click(function(){
        console.log("Minimizar");
        remote.BrowserWindow.getFocusedWindow().minimize();
    });

});