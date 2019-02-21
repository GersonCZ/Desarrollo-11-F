var Item = require('./pelicula');//Pide el archivo pelicula.js donde se encuentran los items de la base de datos
module.exports = class _Pelicula {
   constructor( ) {//Crear un constructor vacio para insertar los datos despues

   }
Guardar(req,res) {
	Item.create(//Pide los items de moongose que se crearon en pelicula.js
			{
  NOMBRE: req.body.NOMBRE,
    DURACIONMINUTOS: req.body.DURACIONMINUTOS,
    GENERO: req.body.GENERO,
    IDIOMAAUDIO: req.body.IDIOMAAUDIO,
    IDIOMASUB: req.body.IDIOMASUB,
    SINOPSIS: req.body.SINOPSIS,
    CLASIFICACION: req.body.CLASIFICACION,
    PRECIO: req.body.PRECIO,
    HORAINICIO: req.body.HORAINICIO,
    FECHA: req.body.FECHA,
    MINUTOINICIO: req.body.MINUTOINICIO,
    ASIENTOS: req.body.ASIENTOS,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO
            }, 
			function(err, item) {//determina si hay un error en la conexion
				if (err)
                    {
					res.send(err);}//si lo hay,lo manda a un codigo error
				
          else{
                Item.find(function(err, item) {//se crea una funcion anonima para determinar si hay un error
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
    
 Modificar(req,res) {//modifica los datos en caso de ser necesario
		Item.update( {_id : req.body.id},
					{$set:
			{
   NOMBRE: req.body.NOMBRE,
    DURACIONMINUTOS: req.body.DURACIONMINUTOS,
    GENERO: req.body.GENERO,
    IDIOMAAUDIO: req.body.IDIOMAAUDIO,
    IDIOMASUB: req.body.IDIOMASUB,
    SINOPSIS: req.body.SINOPSIS,
    CLASIFICACION: req.body.CLASIFICACION,
    PRECIO: req.body.PRECIO,
    HORAINICIO: req.body.HORAINICIO,
    FECHA: req.body.FECHA,
    MINUTOINICIO: req.body.MINUTOINICIO,
    ASIENTOS: req.body.ASIENTOS,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO
            }}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}   
    
    Eliminar(req,res) {//elimar un item 
	Item.remove({_id : req.body.id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtine y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});
    
    
    
}
Seleccionartodos(req,res) {//se seleccionan los todos los items
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);
    
    
    
}
    
    Seleccionarporfecha(req,res) {//selecciona por una fecha especifica
	Item.find({FECHA:req.body.FECHA}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
    
    Seleccionarporid(req,res) {//selecciiona el item por el id solicitado
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
}
    
    Seleccionarpornombre(req,res) {//selecciona por nombre
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }
    
    
    
    
    
    
    
    }
			);
    
    
    
}
}