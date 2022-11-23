export class Quiz {
  constructor(pregunta, r1, r2, r3, r4, cor) {
    this.pregunta = pregunta;
    this.r1 = r1;
    this.r2 = r2;
    this.r3 = r3;
    this.r4 = r4;
    this.cor = cor;
  }

  get Pregunta() { return this.pregunta; }
  set Pregunta(p) {this.pregunta = p}

  get R1() { return this.r1; }
  set R1(r1) {this.r1 = r1;}

  get R2() { return this.r2; }
  set R2(r2) {this.r2 = r2;}

  get R3() { return this.r3; }
  set R3(r3) {this.r3 = r3;}

  get R4() { return this.r4; }
  set R4(r4) {this.r4 = r4;}

  get Cor() { return this.cor; }
  set Cor(cor) {this.cor = cor;}
}