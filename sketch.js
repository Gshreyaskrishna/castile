/*var roof,roof2,roof3,;
var body,body2,body3,body4,body5;




function setup() {
  createCanvas(800,400);
  roof = createSprite(400, 200, 50, 50);
  roof2 = createSprite(400, 200, 50, 50);
  roof3 = createSprite(400, 200, 50, 50);

  body = createSprite(400, 200, 50, 50);
  body2 = createSprite(400, 200, 50, 50);
  body3 = createSprite(400, 200, 50, 50);
  body4 = createSprite(400, 200, 50, 50);
  body5 = createSprite(400, 200, 50, 50);

}
*/
function draw() {
  background(255,255,255); 
  
  regularPolygon(200, 200,3, 50);


  drawSprites();
}