MainCustomLogic = {
    mainMenuComponent: function() {
        return React.createClass({
            propTypes: {
                items: React.PropTypes.array.isRequired
            },
            render: function() {
                var items = this.props.items;
                if (items && Array.isArray(items)) {
                    items.map((x) => React.DOM.li(null, ));
                } else {
                    return null;
                }
                /*<ul class="nav nav-pills">
                                  <li class="active"><a href="#">Главная</a></li>
                                  <li class="dropdown ml-3">
                                      <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                                          Меню
                                          <b class="caret"></b>
                                      </a>
                                      <ul class="dropdown-menu">
                                          <li class="text-center"><a href="#">Текст подпункта</a></li>
                                          <li class="text-center"><a href="#">Текст подпункта</a></li>
                                          <li class="text-center"><a href="#">Текст подпункта</a></li>
                                      </ul>
                                  </li>
                                  <li class="dropdown ml-3">
                                      <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                                          Меню
                                          <b class="caret"></b>
                                      </a>
                                      <ul class="dropdown-menu">
                                          <li class="text-center"><a href="#">Текст подпункта</a></li>
                                          <li class="text-center"><a href="#">Текст подпункта</a></li>
                                          <li class="text-center"><a href="#">Текст подпункта</a></li>
                                      </ul>
                                  </li>
                              </ul>*/
            }
        });
    },
    initialize: function() {
        var mainMenuComponent = MainCustomLogic.mainMenuComponent;
        var items = [
            [
                "Main shope"
            ]
            [
                "Cars",
                [
                    "Mazda",
                    "Toyota",
                    "Infinity",
                    "BMW",
                    "Mercedec"
                ]
            ],
            [
                "PC",
                [
                    "Asus",
                    "Asus laptop",
                    "ACER",
                    "Mac book pro"
                ]
            ]
        ];
        ReactDOM.render(
            React.createElement(mainMenuComponent, items),
            document.getElementById('main-menu')
        );
    }
}

MainCustomLogic.initialize();