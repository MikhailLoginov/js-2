function Container() {
  this.id = "";
  this.className = "";
  this.htmlCode = "";
}
Container.prototype.render = function () {
  return this.htmlCode;
}
Container.prototype.remove = function () {
  try {
    let removingContainer = document.getElementById(this.id);
    removingContainer.remove();
  } catch (err) {
    return -1;
  }
}

function Menu(my_id, my_class, my_items) {
  Container.call(this);
  this.id = my_id;
  this.className = my_class;
  this.items = my_items;
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function () {
  var result = "<ul class='" + this.className + "' id='" + this.id + "'>";
  for (var item in this.items) {
    if (this.items[item] instanceof MenuItem) {
      result += this.items[item].render();
    }
  }
  result += "</ul>";
  return result;
}

function MenuItem(my_href, my_name, my_id) {
  Container.call(this);
  this.className = "menu-item";
  this.href = my_href;
  this.itemName = my_name;
  this.id = my_id;
}
MenuItem.prototype = Object.create(Menu.prototype);
MenuItem.prototype.constructor = MenuItem;
MenuItem.prototype.render = function () {
  return "<li class='" + this.className + "' href='" + this.href + "' id ='" + this.id + "'>" + this.itemName + "</li>";
}



function ComplexMenu(my_id, my_items) {
  Container.call(this);
  this.className = "complex-menu";
  this.id = my_id;
  this.items = my_items;
}
ComplexMenu.prototype = Object.create(Menu.prototype);
ComplexMenu.prototype.constructor = ComplexMenu;
ComplexMenu.prototype.render = function () {
  let result = "<ul class='" + this.className + "' id= '" + this.id + "'>";
  for (var item in this.items) {
    if (this.items[item] instanceof ComplexMenu) {
      result += this.items[item].render();
    } else if (this.items[item] instanceof MenuItem) {
      result += this.items[item].render();
    }
  }
  return result + "</ul>";
}



var m_item1 = new MenuItem("/", "Главная", "main");
var m_item2 = new MenuItem("/catalogue/", "Каталог", "catalog");
var m_item3 = new MenuItem("/gallery/", "Галерея", "gallery");

var m_items2 = {
  0: m_item1,
  1: m_item2,
  2: m_item3
};
let menu = new ComplexMenu("my_comp_menu2", m_items2);

var m_items3 = {
  0: m_item1,
  1: m_item2,
  2: menu,
  3: m_item3
};
let menu2 = new ComplexMenu("my_comp_menu2", m_items3);

var m_items = {
  0: m_item1,
  1: m_item2,
  2: m_item3,
  3: menu2
};

let cMenu = new ComplexMenu("my_comp_menu", m_items);
var div = document.write(cMenu.render());
