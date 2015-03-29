(function(){
    function _$rapyd$_extends(child, parent) {
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
    }
    function _$rapyd$_in(val, arr) {
        if (arr instanceof Array || typeof arr === "string") return arr.indexOf(val) != -1;
        else {
            if (arr.hasOwnProperty(val)) return true;
            return false;
        }
    }
    function len(obj) {
        if (obj instanceof Array || typeof obj === "string") return obj.length;
        else {
            var count = 0;
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) count++;
            }
            return count;
        }
    }
    var ENTER_KEY_CODE, ReactPropTypes, DOM, todoActions, dispatcher, todoStore, APP_ALL_TODOS, APP_ACTIVE_TODOS, APP_COMPLETED_TODOS, todoApp;
    "\n Copyright (c) 2015, Sinergetica S.R.L.\n All rights reserved.\n\n  This source code is licensed under the BSD-style license found in the\n  LICENSE file in the root directory of this source tree. An additional grant\n  of patent rights can be found in the PATENTS file in the same directory.\n ";
            DOM = React.DOM;
    function Component() {
        Component.prototype.__init__.apply(this, arguments);
    }
    Component.prototype.__init__ = function __init__(){
        var self = this;
        var args = [].slice.call(arguments, 0);
        var params, pkeys, keys, arg, key, react_component;
        self.props = {};
        params = {
            render: self.render,
            getInitialState: self.getInitialState,
            getDefaultProps: self.getDefaultProps,
            propTypes: self.propTypes,
            mixins: self.mixins,
            statics: self.statics,
            displayName: self.displayName,
            componentWillMount: self.componentWillMount,
            componentDidMount: self.componentDidMount,
            componentWillReceiveProps: self.componentWillReceiveProps,
            shouldComponentUpdate: self.shouldComponentUpdate,
            componentWillUpdate: self.componentWillUpdate,
            componentDidUpdate: self.componentDidUpdate,
            componentWillUnmount: self.componentWillUnmount
        };
        keys = Object.keys(self);
        pkeys = Object.keys(params);
        var _$rapyd$_Iter0 = keys;
        for (var _$rapyd$_Index0 = 0; _$rapyd$_Index0 < _$rapyd$_Iter0.length; _$rapyd$_Index0++) {
            key = _$rapyd$_Iter0[_$rapyd$_Index0];
            if (!(_$rapyd$_in(key, [ "constructor", "__proto__" ])) || !(_$rapyd$_in(key, pkeys))) {
                params[key] = self[key];
            }
        }
        if (args[0] !== undefined) {
            keys = Object.keys(args[0]);
            var _$rapyd$_Iter1 = keys;
            for (var _$rapyd$_Index1 = 0; _$rapyd$_Index1 < _$rapyd$_Iter1.length; _$rapyd$_Index1++) {
                key = _$rapyd$_Iter1[_$rapyd$_Index1];
                params[key] = args[0][key];
            }
            if (args[0][0] !== undefined) {
                keys = Object.keys(args[0][0]);
                arg = args[0];
                var _$rapyd$_Iter2 = keys;
                for (var _$rapyd$_Index2 = 0; _$rapyd$_Index2 < _$rapyd$_Iter2.length; _$rapyd$_Index2++) {
                    key = _$rapyd$_Iter2[_$rapyd$_Index2];
                    if (!(_$rapyd$_in(key, [ "constructor", "__proto__" ])) || !(_$rapyd$_in(key, pkeys))) {
                        params[key] = args[0][0][key];
                    }
                }
            }
        }
        react_component = React.createClass(params)();
        self.c = react_component;
        self.c = self._extend(self.c, params);
        return self.c;
    };
    Component.prototype._extend = function _extend(target, source){
        var self = this;
        var options, copy, name;
        options = Object.keys(source);
        var _$rapyd$_Iter3 = options;
        for (var _$rapyd$_Index3 = 0; _$rapyd$_Index3 < _$rapyd$_Iter3.length; _$rapyd$_Index3++) {
            name = _$rapyd$_Iter3[_$rapyd$_Index3];
            copy = source[name];
            if (target === copy) {
                continue;
            }
            if (copy !== undefined) {
                target[name] = copy;
            }
        }
        return target;
    };

    function Dispatcher() {
        Dispatcher.prototype.__init__.apply(this, arguments);
    }
    Dispatcher.prototype.__init__ = function __init__(act){
        var self = this;
        var keys, key;
        self.actions = {};
        keys = Object.keys(act);
        var _$rapyd$_Iter4 = keys;
        for (var _$rapyd$_Index4 = 0; _$rapyd$_Index4 < _$rapyd$_Iter4.length; _$rapyd$_Index4++) {
            key = _$rapyd$_Iter4[_$rapyd$_Index4];
            self.actions[key] = [];
        }
    };
    Dispatcher.prototype.attach = function attach(action, ds, func){
        var self = this;
        if (!(_$rapyd$_in(action, self.actions))) {
            self.actions[action] = [];
        }
        self.actions[action].push({
            ds: ds,
            func: func
        });
    };
    Dispatcher.prototype.action = function action(payload){
        var self = this;
        var act;
        var _$rapyd$_Iter5 = self.actions[payload.action];
        for (var _$rapyd$_Index5 = 0; _$rapyd$_Index5 < _$rapyd$_Iter5.length; _$rapyd$_Index5++) {
            act = _$rapyd$_Iter5[_$rapyd$_Index5];
            act.func.call(act.ds, payload.payload);
        }
    };

    function DataStore() {
        DataStore.prototype.__init__.apply(this, arguments);
    }
    DataStore.prototype.__init__ = function __init__(){
        var self = this;
        self.observers = [];
    };
    DataStore.prototype.getData = function getData(){
        var self = this;
        return self.data;
    };
    DataStore.prototype.attach = function attach(comp){
        var self = this;
        if (self.observers === undefined) {
            self.observers = [];
        }
        self.observers.push(comp);
    };
    DataStore.prototype.notify = function notify(){
        var self = this;
        var observer;
        var _$rapyd$_Iter6 = self.observers;
        for (var _$rapyd$_Index6 = 0; _$rapyd$_Index6 < _$rapyd$_Iter6.length; _$rapyd$_Index6++) {
            observer = _$rapyd$_Iter6[_$rapyd$_Index6];
            observer();
        }
    };

        "\n Copyright (c) 2015, Sinergetica S.R.L.\n All rights reserved.\n\n  This source code is licensed under the BSD-style license found in the\n  LICENSE file in the root directory of this source tree. An additional grant\n  of patent rights can be found in the PATENTS file in the same directory.\n ";
    
        function TodoActions() {
    }
    TodoActions.prototype.create = function create(data){
        var self = this;
        dispatcher.action({
            action: "create",
            payload: data
        });
    };
    TodoActions.prototype.destroy = function destroy(data){
        var self = this;
        dispatcher.action({
            action: "destroy",
            payload: data
        });
    };
    TodoActions.prototype.toggleComplete = function toggleComplete(data){
        var self = this;
        dispatcher.action({
            action: "toggleComplete",
            payload: data
        });
    };
    TodoActions.prototype.updateText = function updateText(data){
        var self = this;
        dispatcher.action({
            action: "updateText",
            payload: data
        });
    };
    TodoActions.prototype.toggleCompleteAll = function toggleCompleteAll(data){
        var self = this;
        dispatcher.action({
            action: "toggleCompleteAll",
            payload: data
        });
    };
    TodoActions.prototype.destroyCompleted = function destroyCompleted(data){
        var self = this;
        dispatcher.action({
            action: "destroyCompleted",
            payload: data
        });
    };

    todoActions = new TodoActions();
    ReactPropTypes = React.PropTypes;
    function Footer() {
        Footer.prototype.__init__.apply(this, arguments);
    }
    _$rapyd$_extends(Footer, Component);
    Footer.prototype._onClearCompletedClick = function _onClearCompletedClick(){
        var self = this;
        todoActions.destroyCompleted();
    };
    Footer.prototype.render = function render(){
        var self = this;
        var allTodos, nowShowing, total, isCompleted, completed, key, itemsLeft, itemsLeftPhrase, clearCompletedButton, widget;
        allTodos = self.props.allTodos;
        nowShowing = this.props.nowShowing;
        total = len(allTodos);
        if (total === 0) {
            return null;
        }
        completed = 0;
        var _$rapyd$_Iter7 = Object.keys(allTodos);
        for (var _$rapyd$_Index7 = 0; _$rapyd$_Index7 < _$rapyd$_Iter7.length; _$rapyd$_Index7++) {
            key = _$rapyd$_Iter7[_$rapyd$_Index7];
            isCompleted = allTodos[key].complete;
            if (isCompleted) {
                completed += 1;
            }
        }
        itemsLeft = total - completed;
        if (itemsLeft === 1) {
            itemsLeftPhrase = " item";
        } else {
            itemsLeftPhrase = " items";
        }
        itemsLeftPhrase += " left";
        clearCompletedButton = DOM.button();
        if (completed) {
            clearCompletedButton = DOM.button({
                id: "clear-completed",
                onClick: self._onClearCompletedClick
            }, "clear completed (" + completed + ")");
        }
        widget = React.DOM.footer({
            id: "footer"
        }, [ React.DOM.span({
            id: "todo-count"
        }, [ React.DOM.strong(null, itemsLeft), itemsLeftPhrase ]), DOM.ul({
            id: "filters"
        }, [ DOM.li(null, DOM.a({
            href: "#",
            className: cx({
                "selected": nowShowing === APP_ALL_TODOS
            })
        }, "All")), DOM.li(null, DOM.a({
            href: "#/active",
            className: cx({
                "selected": nowShowing === APP_ACTIVE_TODOS
            })
        }, "Active")), DOM.li(null, DOM.a({
            href: "#/completed",
            className: cx({
                "selected": nowShowing === APP_COMPLETED_TODOS
            })
        }, "Completed")) ]), clearCompletedButton ]);
        return widget;
    };
    Footer.prototype.__init__ = function __init__(){
        var self = this;
        var args = [].slice.call(arguments, 0);
        self.propTypes = {
            allTodos: ReactPropTypes.object.isRequired
        };
        self._onClearCompletedClick = self._onClearCompletedClick;
        Component.prototype.constructor.call(self, args);
    };

        "\n Copyright (c) 2015, Sinergetica S.R.L.\n All rights reserved.\n\n  This source code is licensed under the BSD-style license found in the\n  LICENSE file in the root directory of this source tree. An additional grant\n  of patent rights can be found in the PATENTS file in the same directory.\n ";
    
    
        "\n Copyright (c) 2015, Sinergetica S.R.L.\n All rights reserved.\n\n  This source code is licensed under the BSD-style license found in the\n  LICENSE file in the root directory of this source tree. An additional grant\n  of patent rights can be found in the PATENTS file in the same directory.\n ";
    
    
    ReactPropTypes = React.PropTypes;
    ENTER_KEY_CODE = 13;
    function TodoTextInput() {
        TodoTextInput.prototype.__init__.apply(this, arguments);
    }
    _$rapyd$_extends(TodoTextInput, Component);
    TodoTextInput.prototype.__init__ = function __init__(){
        var self = this;
        var args = [].slice.call(arguments, 0);
        self._save = self._save;
        self._onChange = self._onChange;
        self._onKeyDown = self._onKeyDown;
        Component.prototype.constructor.call(self, args);
    };
    TodoTextInput.prototype.getInitialState = function getInitialState(){
        var self = this;
        var value;
        value = "";
        if (self.props.value !== null) {
            value = self.props.value;
        }
        return {
            value: value
        };
    };
    TodoTextInput.prototype.render = function render(){
        var self = this;
        var widget;
        widget = React.DOM.input({
            className: self.props.className,
            id: self.props.id,
            placeholder: self.props.placeholder,
            onBlur: self._save,
            onChange: self._onChange,
            onKeyDown: self._onKeyDown,
            value: self.state.value,
            autoFocus: true,
            ref: "text"
        }, null);
        return widget;
    };
    TodoTextInput.prototype._save = function _save(){
        var self = this;
        var text;
        text = self.refs.text.getDOMNode().value.trim();
        if (text) {
            self.props.onSave({
                id: self.props.id,
                text: text
            });
        }
        self.setState({
            value: ""
        });
    };
    TodoTextInput.prototype._onChange = function _onChange(event){
        var self = this;
        self.setState({
            value: event.target.value
        });
    };
    TodoTextInput.prototype._onKeyDown = function _onKeyDown(event){
        var self = this;
        if (event.keyCode === ENTER_KEY_CODE) {
            self._save();
        }
    };

    function Header() {
        Header.prototype.__init__.apply(this, arguments);
    }
    _$rapyd$_extends(Header, Component);
    Header.prototype._onSave = function _onSave(data){
        var self = this;
        var text;
        text = data.text.trim();
        if (text) {
            todoActions.create(text);
        }
    };
    Header.prototype.render = function render(){
        var self = this;
        var todoTextInput, widget;
        todoTextInput = new TodoTextInput({props: {
            id: "new-todo",
            placeholder: "What needs to be done?",
            onSave: self._onSave
        }});
        widget = DOM.header({
            id: "header"
        }, [ DOM.h1(null, "todos"), todoTextInput.c ]);
        return widget;
    };
    Header.prototype.__init__ = function __init__(){
        var self = this;
        var args = [].slice.call(arguments, 0);
        self._onSave = self._onSave;
        Component.prototype.constructor.call(self, args);
    };

        
    
        
    
    
    ReactPropTypes = React.PropTypes;
    function TodoItem() {
        TodoItem.prototype.__init__.apply(this, arguments);
    }
    _$rapyd$_extends(TodoItem, Component);
    TodoItem.prototype.__init__ = function __init__(){
        var self = this;
        var args = [].slice.call(arguments, 0);
        self.propTypes = ReactPropTypes.object.isRequired;
        self._onToggleComplete = self._onToggleComplete;
        self._onDoubleClick = self._onDoubleClick;
        self._onSave = self._onSave;
        self._onDestroyClick = self._onDestroyClick;
        Component.prototype.constructor.call(self, args);
    };
    TodoItem.prototype.getInitialState = function getInitialState(){
        var self = this;
        return {
            isEditing: false
        };
    };
    TodoItem.prototype.render = function render(){
        var self = this;
        var todo, input, widget;
        todo = self.props.todo;
        input = null;
        if (self.state.isEditing) {
            input = new TodoTextInput({props: {
                onSave: self._onSave,
                id: self.props.todo.id,
                className: "edit",
                value: todo.text,
                todo: todo
            }});
        }
        widget = DOM.li({
            className: cx({
                "completed": todo.complete,
                "editing": this.state.isEditing
            }),
            key: todo.id
        }, [ DOM.div({
            className: "view"
        }, [ DOM.input({
            className: "toggle",
            type: "checkbox",
            checked: todo.complete,
            onChange: self._onToggleComplete
        }, null), DOM.label({
            onDoubleClick: self._onDoubleClick
        }, todo.text), DOM.button({
            className: "destroy",
            onClick: self._onDestroyClick
        }, null) ]), input ]);
        return widget;
    };
    TodoItem.prototype._onToggleComplete = function _onToggleComplete(){
        var self = this;
        todoActions.toggleComplete(self.props.todo);
    };
    TodoItem.prototype._onDoubleClick = function _onDoubleClick(){
        var self = this;
        self.setState({
            isEditing: true
        });
    };
    TodoItem.prototype._onSave = function _onSave(data){
        var self = this;
        todoActions.updateText(data);
        self.setState({
            isEditing: false
        });
    };
    TodoItem.prototype._onDestroyClick = function _onDestroyClick(){
        var self = this;
        todoActions.destroy(self.props.todo.id);
    };

    ReactPropTypes = React.PropTypes;
    function MainSection() {
        MainSection.prototype.__init__.apply(this, arguments);
    }
    _$rapyd$_extends(MainSection, Component);
    MainSection.prototype.__init__ = function __init__(){
        var self = this;
        var args = [].slice.call(arguments, 0);
        var propTypes;
        propTypes = {
            allTodos: ReactPropTypes.object.isRequired,
            areAllComplete: ReactPropTypes.bool.isRequired
        };
        self._isChecked = self._isChecked;
        self._onToggleCompleteAll = self._onToggleCompleteAll;
        Component.prototype.constructor.call(self, args);
    };
    MainSection.prototype.render = function render(){
        var self = this;
        var allTodos, todos, keys, todoItem, key;
        if (len(self.props.allTodos) < 1) {
            return null;
        }
        allTodos = self.props.allTodos;
        todos = [];
        keys = Object.keys(allTodos);
        var _$rapyd$_Iter8 = keys;
        for (var _$rapyd$_Index8 = 0; _$rapyd$_Index8 < _$rapyd$_Iter8.length; _$rapyd$_Index8++) {
            key = _$rapyd$_Iter8[_$rapyd$_Index8];
            todoItem = new TodoItem({props: {
                key: key,
                todo: allTodos[key]
            }});
            todos.push(todoItem.c);
        }
        return DOM.section({
            id: "main"
        }, [ DOM.input({
            id: "toggle-all",
            type: "checkbox",
            onChange: self._onToggleCompleteAll,
            checked: self._isChecked
        }), DOM.label({
            htmlFor: "toggle-all"
        }, "Mark all as complete"), DOM.ul({
            id: "todo-list"
        }, todos) ]);
    };
    MainSection.prototype._isChecked = function _isChecked(){
        var self = this;
        if (self.props.areAllComplete) {
            return "checked";
        } else {
            return "";
        }
    };
    MainSection.prototype._onToggleCompleteAll = function _onToggleCompleteAll(){
        var self = this;
        todoActions.toggleCompleteAll();
    };

        
    function TodoStore() {
        TodoStore.prototype.__init__.apply(this, arguments);
    }
    _$rapyd$_extends(TodoStore, DataStore);
    TodoStore.prototype.__init__ = function __init__(dispatcher){
        var self = this;
        self._todos = {};
        self.dispatcher = dispatcher;
        dispatcher.attach("create", self, self.create);
        dispatcher.attach("destroy", self, self.destroy);
        dispatcher.attach("toggleComplete", self, self.toggleComplete);
        dispatcher.attach("toggleCompleteAll", self, self.toggleCompleteAll);
        dispatcher.attach("updateText", self, self.updateText);
        dispatcher.attach("destroyCompleted", self, self.destroyCompleted);
        DataStore.prototype.constructor.call();
    };
    TodoStore.prototype.create = function create(text){
        var self = this;
        var id;
        id = (new Date() + Math.floor(Math.random() * 999999)).toString(36);
        self._todos[id] = {
            id: id,
            complete: false,
            text: text
        };
        self.notify();
    };
    TodoStore.prototype.getAll = function getAll(){
        var self = this;
        return self._todos;
    };
    TodoStore.prototype.areAllComplete = function areAllComplete(){
        var self = this;
        var id;
        var _$rapyd$_Iter9 = self._todos;
        for (var _$rapyd$_Index9 = 0; _$rapyd$_Index9 < _$rapyd$_Iter9.length; _$rapyd$_Index9++) {
            id = _$rapyd$_Iter9[_$rapyd$_Index9];
            if (!self._todos[id].complete) {
                return false;
            }
        }
        return true;
    };
    TodoStore.prototype.destroy = function destroy(id){
        var self = this;
        delete self._todos[id];
        self.notify();
    };
    TodoStore.prototype.toggleComplete = function toggleComplete(todo){
        var self = this;
        if (todo.complete) {
            todo.complete = false;
        } else {
            todo.complete = true;
        }
        self.notify();
    };
    TodoStore.prototype.toggleCompleteAll = function toggleCompleteAll(data){
        var self = this;
        var keys, key;
        keys = Object.keys(self._todos);
        var _$rapyd$_Iter10 = keys;
        for (var _$rapyd$_Index10 = 0; _$rapyd$_Index10 < _$rapyd$_Iter10.length; _$rapyd$_Index10++) {
            key = _$rapyd$_Iter10[_$rapyd$_Index10];
            self._todos[key].complete = true;
        }
        self.notify();
    };
    TodoStore.prototype.updateText = function updateText(data){
        var self = this;
        self._todos[data.id].text = data.text;
        self.notify();
    };
    TodoStore.prototype.destroyCompleted = function destroyCompleted(data){
        var self = this;
        var keys, todo, key;
        keys = Object.keys(self._todos);
        var _$rapyd$_Iter11 = keys;
        for (var _$rapyd$_Index11 = 0; _$rapyd$_Index11 < _$rapyd$_Iter11.length; _$rapyd$_Index11++) {
            key = _$rapyd$_Iter11[_$rapyd$_Index11];
            todo = self._todos[key];
            if (todo.complete) {
                delete self._todos[key];
            }
        }
        self.notify();
    };

    
    dispatcher = new Dispatcher(todoActions);
    todoStore = new TodoStore(dispatcher);
    APP_ALL_TODOS = "all";
    APP_ACTIVE_TODOS = "active";
    APP_COMPLETED_TODOS = "completed";
    function TodoApp() {
        TodoApp.prototype.__init__.apply(this, arguments);
    }
    _$rapyd$_extends(TodoApp, Component);
    TodoApp.prototype.__init__ = function __init__(){
        var self = this;
        var args = [].slice.call(arguments, 0);
        self._onChange = self._onChange;
        self.getTodoState = self.getTodoState;
        Component.prototype.constructor.call(self, args);
    };
    TodoApp.prototype.getTodoState = function getTodoState(){
        var self = this;
        return {
            allTodos: todoStore.getAll(),
            areAllComplete: todoStore.areAllComplete()
        };
    };
    TodoApp.prototype.componentDidMount = function componentDidMount(){
        var self = this;
        var setState, router;
        todoStore.attach(self._onChange);
        setState = self.setState;
        router = Router({
            "/": setState.bind(self, {
                nowShowing: APP_ALL_TODOS
            }),
            "/active": setState.bind(self, {
                nowShowing: APP_ACTIVE_TODOS
            }),
            "/completed": setState.bind(self, {
                nowShowing: APP_COMPLETED_TODOS
            })
        });
        router.init("/");
    };
    TodoApp.prototype.render = function render(){
        var self = this;
        var header, allTodos, keys, nowShowing, shownTodos, todo, key, ms, footer;
        header = new Header();
        allTodos = self.state.allTodos;
        keys = Object.keys(allTodos);
        nowShowing = self.state.nowShowing;
        shownTodos = [];
        var _$rapyd$_Iter12 = keys;
        for (var _$rapyd$_Index12 = 0; _$rapyd$_Index12 < _$rapyd$_Iter12.length; _$rapyd$_Index12++) {
            key = _$rapyd$_Iter12[_$rapyd$_Index12];
            console.log("TODO: ", allTodos[key]);
            todo = allTodos[key];
            if (nowShowing === APP_ACTIVE_TODOS && !todo.complete) {
                shownTodos.push(todo);
            } else if (nowShowing === APP_COMPLETED_TODOS && todo.complete) {
                shownTodos.push(todo);
            } else if (nowShowing === APP_ALL_TODOS) {
                shownTodos.push(todo);
            }
        }
        ms = new MainSection({props: {
            allTodos: shownTodos,
            areAllComplete: this.state.areAllComplete
        }});
        footer = new Footer({props: {
            allTodos: shownTodos,
            nowShowing: self.state.nowShowing
        }});
        return React.DOM.div(null, [ header, ms, footer ]);
    };
    TodoApp.prototype._onChange = function _onChange(){
        var self = this;
        self.setState(self.getTodoState());
    };
    TodoApp.prototype.getInitialState = function getInitialState(){
        var self = this;
        return self.getTodoState();
    };

    todoApp = new TodoApp();
    React.render(todoApp, document.getElementById("todoapp"));
})();