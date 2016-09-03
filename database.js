module.exports = {
    
  mesas: function () {
        var mesas = [];
        for (i = 0; i <= 40; i++) {          
        mesas.push({id:i,numero:i+1,nombre:"Mesa "+(i+1),cantidad_personas:i%2*2+i%3+1,ocupada:false});
        }
        return mesas;
    
  },
    
    
  usuarios: function () {
          var meseros = [
    {id:"1",nombre:"Maria",apellido:"Cornovel",PUESTO:"Mesera",foto_perfil:"img/mesera.jpg"  },
    {id:"6",nombre:"Pedro",apellido:"Mancovi",PUESTO:"Mesera",foto_perfil:"foto.jpg"  },
    {id:"7",nombre:"Ariel",apellido:"Asturias",PUESTO:"Mesera",foto_perfil:"foto.jpg"  },
    {id:"2",nombre:"Pedro",apellido:"Brusles",PUESTO:"Mesera",foto_perfil:"foto.jpg"  },
    {id:"3",nombre:"Krusheinska",apellido:"Medinilla",PUESTO:"Mesera",foto_perfil:"foto.jpg"},
    {id:"4",nombre:"Marina",apellido:"Barrios",PUESTO:"Mesera",foto_perfil:"foto.jpg"},
    {id:"10",nombre:"Estuardo",apellido:"Cosero",PUESTO:"Mesera",foto_perfil:"foto.jpg"},
    {id:"11",nombre:"Kurt",apellido:"Osorio",PUESTO:"Mesera",foto_perfil:"foto.jpg"},
    {id:"12",nombre:"Karin",apellido:"Benzema",PUESTO:"Mesera",foto_perfil:"foto.jpg"},
    {id:"13",nombre:"Rosario",apellido:"Juarez",PUESTO:"Mesera",foto_perfil:"foto.jpg"},
    {id:"14",nombre:"Cindy",apellido:"Lopez",PUESTO:"Mesera",foto_perfil:"foto.jpg"}
                  
              ];
      return meseros;
  }
     
    
    
    
    
    
    
    
};

var zemba = function () {
}