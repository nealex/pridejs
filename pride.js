/**
 * @description Библиотека с доопределенными методами.
 * @param {*} ___p 
 */
Window.prototype.__pride = function () {
    this.___alert = function (__p) {
        if (__p === undefined && typeof __p !== 'Object') {
            this.___render_DefaultWindowAlert('');
            return false;
        }
        /**
         * @description Метод стандартного уведомления.
         * @param {*} mes 
         */
        this.___render_DefaultWindowAlert = function (mes) {
            window.alert(typeof mes !== 'String' ? mes : '');
            return false;
        };
        this.___render_WindowAlert = function () {

        };
    };
};
// Window.prototype.__alert = function (__p) {

// };