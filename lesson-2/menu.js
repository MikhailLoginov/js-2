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

function Menu(my_items, my_id) {
  Container.call(this);
  this.className = "complex-menu";
  this.id = my_id;
  this.items = my_items;
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;
Menu.prototype.render = function () {
  let result = "";
    result = `<ul class='${this.className}' id='${this.id}'>`;
  for (let item in this.items) {
    if (Array.isArray(this.items[item])) {
      if (this.items[item][0] == undefined) {
        result += `<li class='menu-item' id='${item}'><a href='#'>${this.items[item][1]}</a></li>`;
      } else {
        result += `<li class='menu-item' id='${item}'><a href='${this.items[item][0]}'>${this.items[item][1]}</a></li>`;
      }
    } else if (this.items[item] instanceof Object) {
      let subMenu = new Menu(this.items[item], item);
      result += subMenu.render();
    }
  }
  return `${result}</ul>`;
}





/**
 * Structure of JSON menu: 
 * {
 *   li_id : {"href", "name"},
 *   li_id : {"href", "name"},
 *   submenu_ul_id : {
 *     submenu_li_id : {"href", "name"},
 *     ...
 *     }
 *   ...
 * }
 */
let m_items = {
  main : ["/", "Главная"],
  catalog : ["/catalogue/", "Каталог"],
  gallery : ["/gallery/", "Галерея"],
  promo : [, "Промоакции"],
  promo_sub : {
    discount : ["/discount/", "Скидки"],
    promo : ["/promo/", "Aкции"],
    new_production : ["/new_prods/", "Новинки"]
  },
  private_area : [, "Личный кабинет"],
  private_area_sub : {
    profile : ["/profile/", "Профайл"],
    balance : ["/balance/", "Баланс"],
    cart : ["/cart/", "Корзина"],
    bonus : ["/bonus/", "Бонусы"]
  }
};

let menu = new Menu(m_items, "my_comp_menu");
var div = document.write(menu.render());

Array.from(document.querySelectorAll("li")).forEach(el => {
  if (el.children[0].getAttribute('href') == "#") {
    el.addEventListener("click", () => {
      let ul = el.nextSibling;
      if (ul.style.display == "none") {
        ul.style.display = "block";
      } else if (ul.tagName == "UL") {
        ul.style.display = "none";
      } 
    });
  }
});
