///import baidu.type;

/**
 * @fileoverview
 * @name baidu.type.isArray
 * @author meizz
 * @create 2012-06-28
 * @modify
 */

/**
 * 判断对象是不是数组
 *
 * @param   {Object}    unknow     被判断的对象
 * @return  {Boolean}
 */
baidu.type.isArray = function(unknow) {
    return baidu.type(unknow) === "array";
};