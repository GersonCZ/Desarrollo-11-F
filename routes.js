//
var controllercalculadora= require('./calculadoracontroller.js');
module.exports= function(app){


  app.post('/Asumar', controllercalculadora.Sumar);
  app.post('/Arestar', controllercalculadora.Restar);
  app.post('/AMulti', controllercalculadora.Multi);
  app.post('/ADiv', controllercalculadora.Div)

};
