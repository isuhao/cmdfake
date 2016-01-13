/**
 * Created by dengjing on 16/1/5.
 */

/* the old code
Router.configure({
    layoutTemplate: 'layout',  //can be any template name
    waitOn: function() { return Meteor.subscribe('articles'); }
});

Router.map(function () {
    this.route('home', {
        path: '/',
    });
    this.route('about');
    this.route('articles', {
        // articles now under `articleList` instead of `this`
        data: {
            articleList: function () {
                console.log(Articles.find());
                return Articles.find()
            },
            //'haha': console.log(Articles.find()),
            selectedArticle: {}
        },
        template: 'articles'
    });
    this.route('article', {
        path: '/article/:_id',
        // provide data for both `articleList` and `selectedArticle`
        data: function () {
            return {
                articleList: Articles.find(),
                selectedArticle: Articles.findOne({_id: this.params._id})
            }
        },
        template: 'articles'  //change template target
    });
});
*/

Router.route('/', {
    name: 'base.main',
    layoutTemplate: 'mk_layout',
    waitOn: () => {
        return Meteor.subscribe('articles');
    }
});