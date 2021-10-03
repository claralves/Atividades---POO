const NL = 9;
const NC = 9;

const LADO = 50;

let cobra_x = 0;
let cobra_y = 0;

let cobra_vx = 0;
let cobra_vy = 0;

let food_x = 0;
let food_y = 0;
let food_cor;

let cobra_cor;
let cell_cor;

let timer = 0;
let food_count = 0;

function draw_cell(x, y, cor){
  noStroke();
  fill(cor);
  square(x*LADO+1, y*LADO+1, LADO-1);
}

function draw_mat(){
  fill(200);
  
  for(let c=0; c<NC; c++){
    for(let l=0; l<NL; l++){
      draw_cell(c, l, cell_cor);
    }
  }
}

function setup() {
  createCanvas(NC * LADO, NL * LADO);
  cobra_cor = color(255, 204, 0);
  cell_cor = color(150);
  food_mover();
}

function keyPressed(){
   
  if(keyCode == LEFT_ARROW){
    cobra_vx = -1;
    cobra_vy = 0;
}
  if(keyCode == RIGHT_ARROW){
    cobra_vx = 1
    cobra_vy = 0;
}
  if(keyCode == UP_ARROW){
    cobra_vy = -1;
    cobra_vx = 0;
}
  if(keyCode == DOWN_ARROW){
    cobra_vy = 1;
    cobra_vx = 0;
  }
}

function deslocar(){
  if(cobra_x > NC - 1){
    cobra_x = 0;
  }
  if(cobra_x < 0){
    cobra_x = NC - 1;
  }
  if(cobra_y > NL - 1){
    cobra_y = 0;
  }
  if(cobra_y < 0){
    cobra_y = NL - 1;
  }
}

function automatico(){
  if(frameCount - timer > 10){
    timer = frameCount;
    cobra_x += cobra_vx;
    cobra_y += cobra_vy;
  }
}

function food_mover(){
  food_x = parseInt(random(0, NC));
  food_y = parseInt(random(0, NL));
  food_cor = color(random(255), random(255), random(255));
}

function contagem(){
  if(cobra_x == food_x && cobra_y == food_y){
    cobra_cor = food_cor;
    food_mover();
    food_count +=1;
  }
}

function draw() {
  background(0);
  
  draw_mat();
  draw_cell(food_x, food_y, food_cor);
  draw_cell(cobra_x, cobra_y, cobra_cor);
  deslocar();
  automatico();
  contagem();
  
  fill(300);
  textSize(20);
  text(food_count, 10, 30);
  //console.log(keyCode)
}