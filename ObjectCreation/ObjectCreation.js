// ReSharper disable InconsistentNaming

// http://javascript.crockford.com/private.html

(function () {

    "use strict";

    window.Fred = function (constructorParam1) {

        // Private instance variable.
        var _var1;
        
        // Public instance variable.
        this.var2 = 13;

        if (arguments.length === 1) {
            _var1 = constructorParam1;
        }

        // Private method.
        function _myPrivateMethod() {
            return _var1 + 10;
        }

        // Privileged method.
        // Can access private variables and private methods.
        this.var1Accessor = function (newValue) {
            if (arguments.length === 1) {
                _var1 = newValue;
            }
            return _var1;
        };

        // Privileged method.
        this.myPrivilegedMethod = function () {
            return _myPrivateMethod();
        };
    };

    // Public method via the constructor prototype.
    // Can access anything that is accessible via 'this' i.e.
    // - public variables
    // - public methods
    // - privileged methods
    window.Fred.prototype.var2Accessor = function (newValue) {
        if (arguments.length === 1) {
            this.var2 = newValue;
        }
        return this.var2;
    };

    // Public method via the constructor prototype.
    window.Fred.prototype.myPublicMethod = function () {
        return this.myPrivilegedMethod();
    };

} ());
