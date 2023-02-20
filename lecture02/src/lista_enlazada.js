/**
 * Author: Xenia Padilla
 * Description: LinkedList algorith
 * Date: Feb 14, 2023
 */

import Nodo from "./nodo.js";

export default class ListaEnlazada{
    constructor(cabeza = null){
        this.cabeza = cabeza;                
    }

    /**
     * Este método insertar los nodos al inicio de la lista     * 
     * @param {*} data El parámetro data puede tomar cualquier valor
     */
    insertarInicio(data){
        let nuevo;
        nuevo = new Nodo(data);
        nuevo.enlace = this.cabeza;
        this.cabeza = nuevo;
    }

    /**
     * Este método inserta entre dos nodos en una lista enlazada simple
     * @param {*} valorInsertado Es el valor que se insertará en la lista
     * @param {*} buscar Indica detrás de qué nodo se debe insertar
     */
    insertarEntre(valorInsertado, buscar){

    }

    /**
     * 
     * @param {*} dato Es el dato a eliminar de la lista enlazada
     */
    eliminar(entrada){
        let temp = this.cabeza;
        let encontrado = false
        let actual = temp;
        let anterior = null;
        while( (actual !== null) && !encontrado ){
            encontrado = (actual.data === entrada);
            if( !encontrado ){
                anterior = actual;
                actual = actual.enlace;
            }
            if( actual !== null ){
                if( actual === this.cabeza ){
                    this.cabeza = actual.enlace;                    
                } else{
                    anterior.enlace = actual.enlace;
                }
            }
        }
        console.log(`Nodo eliminado....`);

    }
    

    /**
     * Este método recorre la lista e imprime su contenido
     */
    impresion(){
        let temp = this.cabeza;
        let valores = '';
        
        do{
            valores += temp.data + '-> ';
            temp = temp.enlace;
        }while(temp !== null);
        console.log(valores + 'null')
    }
}

