/// <reference path="../jasmine-1.3.1/jasmine.js" />
/// <reference path="../Underscore/underscore.js" />
/// <reference path="ObjectCreation.js" />

// ReSharper disable InconsistentNaming

(function () {

    "use strict";

    describe("Fred", function () {

        it("can construct an instance of Fred", function () {
            var fred = new Fred();
            expect(fred).not.toBeNull();
        });

        it("instance of Fred has the correct constructor property", function () {
            var fred = new Fred();
            expect(fred.constructor).toBe(Fred);
        });

        it("_var1 property is not visible", function () {
            var fred = new Fred();
            var actual = fred._var1;
            expect(actual).toBeUndefined();
        });

        it("instance of Fred has a public var1Accessor method", function () {
            var fred = new Fred();
            var isFunction = _.isFunction(fred.var1Accessor);
            expect(isFunction).toBe(true);
        });

        it("var1Accessor method returns value passed to constructor", function () {
            var fred = new Fred(42);
            var actual = fred.var1Accessor();
            expect(actual).toBe(42);
        });

        it("can set/get the _var1 property via the var1Accessor method", function () {
            var fred = new Fred();
            fred.var1Accessor(1458);
            var actual = fred.var1Accessor();
            expect(actual).toBe(1458);
        });

        it("var1Accessor works correctly for independent instances", function () {
            var fred1 = new Fred();
            var fred2 = new Fred();
            var actual1 = fred1.var1Accessor(3666);
            var actual2 = fred2.var1Accessor(7432);
            expect(actual1).toBe(3666);
            expect(actual2).toBe(7432);
        });

        it("var2 property is public", function () {
            var fred = new Fred();
            var actual = fred.var2;
            expect(actual).toBeDefined();
            expect(actual).toBe(13);
        });

        it("instance of Fred has a public var2Accessor method", function () {
            var fred = new Fred();
            var isFunction = _.isFunction(fred.var2Accessor);
            expect(isFunction).toBe(true);
        });

        it("can set/get the var2 property via the var2Accessor method", function () {
            var fred = new Fred();
            fred.var2Accessor(21);
            var actual = fred.var2Accessor();
            expect(actual).toBe(21);
        });

        it("var2Accessor works correctly for independent instances", function () {
            var fred1 = new Fred();
            var fred2 = new Fred();
            var actual1 = fred1.var2Accessor(104);
            var actual2 = fred2.var2Accessor(2006);
            expect(actual1).toBe(104);
            expect(actual2).toBe(2006);
        });

        it("var2 property can be set directly and then retrieved via the var2Accessor method", function () {
            var fred = new Fred();
            fred.var2 = 312;
            var actual = fred.var2Accessor();
            expect(actual).toBe(312);
        });

        it("var2 property when set/get directly works correctly for independent instances", function () {
            var fred1 = new Fred();
            var fred2 = new Fred();
            fred1.var2 = 704;
            fred2.var2 = 45;
            expect(fred1.var2).toBe(704);
            expect(fred2.var2).toBe(45);
        });

        it("_myPrivateMethod is private", function () {
            var fred = new Fred();
            var actual = fred._myPrivateMethod;
            expect(actual).toBeUndefined();
        });

        it("myPrivilegedMethod is public", function () {
            var fred = new Fred();
            var actual = fred.myPrivilegedMethod;
            expect(actual).toBeDefined();
            expect(_.isFunction(actual)).toBe(true);
        });

        it("myPublicMethod is public", function () {
            var fred = new Fred();
            var actual = fred.myPublicMethod;
            expect(actual).toBeDefined();
            expect(_.isFunction(actual)).toBe(true);
        });

        it("myPublicMethod can access _myPrivateMethod via myPrivilegedMethod", function () {
            var fred = new Fred();
            fred.var1Accessor(4477);
            var actual = fred.myPublicMethod();
            expect(actual).toBe(4477 + 10);
        });

        it("myPublicMethod / myPrivilegedMethod / _myPrivateMethod work correctly for independent instances", function () {
            var fred1 = new Fred();
            var fred2 = new Fred();
            fred1.var1Accessor(4477);
            fred2.var1Accessor(9985);
            var actual1 = fred1.myPublicMethod();
            var actual2 = fred2.myPublicMethod();
            expect(actual1).toBe(4477 + 10);
            expect(actual2).toBe(9985 + 10);
        });

        it("var3Accessor is visible", function () {
            var fred = new Fred();
            var actual = fred.var3Accessor;
            expect(actual).toBeDefined();
        });

        it("can set/get the var3 property via the var3Accessor method", function () {
            var fred = new Fred();
            fred.var3Accessor(333);
            var actual = fred.var3Accessor();
            expect(actual).toBe(333);
        });

        it("var3 behaves like a static variable", function() {
            var fred1 = new Fred();
            var fred2 = new Fred();
            fred1.var3Accessor(104);
            fred2.var3Accessor(2006);
            var actual1 = fred1.var3Accessor();
            var actual2 = fred2.var3Accessor();
            expect(actual1).toBe(2006);
            expect(actual2).toBe(2006);
        });
    });
} ());
