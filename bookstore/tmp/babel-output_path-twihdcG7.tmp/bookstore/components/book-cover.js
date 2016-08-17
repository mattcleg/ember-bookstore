define('bookstore/components/book-cover', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        actions: {
            open: function open() {
                var _this = this;

                this.get('book').reload().then(function () {
                    _this.set('isShowingModal', true);
                    _this.get('blurBackground')(true);
                });
            },
            close: function close() {
                this.set('isShowingModal', false);
                this.get('blurBackground')(false);
            }
        }
    });
});