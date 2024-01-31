import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
categorias : string[] = ['bar-chart','line-chart','pie-chart'];
categoriaElegida: string = "bar-chart";
nameTab :string = "tab5";
  
  constructor() { }

  ngOnInit() {
  }

  cambiarCategoria(tipo :any){
    this.categoriaElegida=tipo.detail.value;

  }

}
