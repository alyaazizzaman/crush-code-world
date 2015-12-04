//Entity this is the parent class
function Entity(){
  return {
  };
}

//The wall element inherits from Entity
function Wall() {
  var self = new Entity();
  //override act
  self.act=false;
  self.act = function(){
    //do nothing
  };
  return self;
}
// Your code here


//uncomment entities from the legend as you implement them
var legend = {
  "#": Wall,
  "O": Entity
  //"*": Plant
};

//to add an entity to the map replace an empty character with your entitycharacter
var map =
["############################",
 "#####                 ######",
 "##                        ##",
 "#    ##                   ##",
 "#                 ##       #",
 "#                 ##       #",
 "#                 ##       #",
 "#           #              #",
 "#           #              #",
 "#           ##             #",
 "##         ###           ###",
 "############################"];
var world = new LifelikeWorld(map, legend);

//Megaman EXECUTE! \o/
animateWorld(world);
