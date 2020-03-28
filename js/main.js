var mainMenuComponent = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <ul class="nav nav-pills">
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
                        </ul>
        );
    }
});