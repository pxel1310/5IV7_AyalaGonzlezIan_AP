class FiguraGeometrica {
  constructor() {}
  area() {}
  perimetro() {
    console.log("Este metodo calcula el perimetro de una fig.");
  }
}

class Rectangulo extends FiguraGeometrica {
  constructor(base, altura) {
    super();
    this._base = base;
    this._altura = altura;
    this._area = null;
    this._perimetro = null;
    this._actualizarArea = false;
    this._actualizarPerimietro = false;
  }

  calcularArea() {
    return this._base * this._altura;
  }

  calcularPerimetro() {
    return (this._base + this._altura) * 2;
  }

  set base(base) {
    this._base = base;
    this._actualizarArea = true;
    this._actualizarPerimietro = true;
  }

  set altura(altura) {
    this._altura = altura;
    this._actualizarArea = true;
    this._actualizarPerimietro = true;
  }

  get area() {
    if (this._actualizarArea || !this._area) {
      this._area = this._actualizarArea();
    }
    return this._area;
  }

  get perimetro() {
    if (this._actualizarPerimietro || !this._perimetro) {
      this._perimetro = this._actualizarPerimietro();
    }
    return this._perimetro;
  }
}

const objetoRectangulo = new Rectangulo(2,5);
console.log(objetoRectangulo.area)
console.log(objetoRectangulo.perimetro)