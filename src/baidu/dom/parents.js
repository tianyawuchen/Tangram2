///import baidu.dom;
///import baidu.each;
///import baidu.merge;
///import baidu.dom.match;
///import baidu.array.unique;

/**
 * @fileoverview
 * @name baidu.dom.parents
 * @author meizz
 * @create 2012-05-28
 * @modify
 */

/**
 *
 * @param
 * @return
 */
baidu.dom.extend({
    parents : function (filter) {
        var array = [];

        baidu.each(this, function(dom) {
            var a = [];

            while ((dom = dom.parentNode) && dom.nodeType == 1) a.push(dom);

            baidu.merge(array, a);
        });

        array = baidu.array(array).unique();

        return baidu.dom(typeof filter == "string" ? baidu.dom.match(array, filter) : array);
    }
});
