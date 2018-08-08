/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
function Hamburger(size, stuffing) {
  if (size != "small" && size != "large") {
      //throw Error('Wrong size data')
      throw new HamburgerException('Wrong size data');
  }
  const size = SIZE_SMALL
} 
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    price: "50",
    calories: "20"
}
Hamburger.SIZE_LARGE = {
    price: "100",
    calories: "40"
}
Hamburger.STUFFING_CHEESE = {
    price: "10",
    calories: "20"
}
Hamburger.STUFFING_SALAD = {
    price: "20",
    calories: "5"
}
Hamburger.STUFFING_POTATO = {
    price: "15",
    calories: "10"
}
Hamburger.TOPPING_MAYO = {
    price: "20",
    calories: "5"
}
Hamburger.TOPPING_SPICE = {
    price: "15",
    calories: "0"
}
/**
* Добавить добавку к гамбургеру. Можно добавить несколько
* добавок, при условии, что они разные.
* 
* @param topping     Тип добавки
* @throws {HamburgerException}  При неправильном использовании
*/
Hamburger.prototype.addTopping = function (topping) ...
/**
 * Убрать добавку, при условии, что она ранее была 
 * добавлена.
 * 
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) ...
/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () ...
/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () ...
/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () ...
/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () ...
/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () ...
/**
 * Представляет информацию об ошибке в ходе работы с гамбургером. 
 * Подробности хранятся в свойстве message.
 * @constructor 
 */
function HamburgerException (...) { ... }