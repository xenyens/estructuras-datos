import ListaEnlazada  from "./src/lista_enlazada.js";

const lista = new ListaEnlazada();

lista.insertarInicio(10);
lista.insertarInicio(70);
lista.insertarInicio(1);
lista.insertarInicio(5);
lista.impresion();

lista.eliminar(70);
lista.impresion();

lista.insertarEntre(200,1);
lista.impresion();

lista.insertarInicio(500);
lista.insertarInicio(600);
lista.insertarInicio(700);
