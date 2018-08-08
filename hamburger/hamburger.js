/**
* Класс, объекты которого описывают параметры гамбургера. 
* 
* @constructor
* @param size        Размер
* @param stuffing    Начинка
* @throws {HamburgerException}  При неправильном использовании
*/
function Hamburger(size, stuffing) { ... } 
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
    price: "50RUR",
    calories: "20ccal"
}
Hamburger.SIZE_LARGE = ...
Hamburger.STUFFING_CHEESE = ...
Hamburger.STUFFING_SALAD = ...
Hamburger.STUFFING_POTATO = ...
Hamburger.TOPPING_MAYO = ...
Hamburger.TOPPING_SPICE = ...
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