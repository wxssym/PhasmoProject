function preload() {
  number_of_evidences = 3;
  spirit= new spirit;
  emf = new emf;
  cold=new cold;
  writing = new writing;
  dots = new dots;
  orbs = new orbs;
  prints = new prints;
}

function setup() {
  language_selector_ui();
  noCanvas();
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
