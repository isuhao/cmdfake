/**
 * Created by dengjing on 16/1/7.
 */
if (Meteor.isServer) {
    Meteor.publish('articles', function(){
        return Articles.find();
    });
    Meteor.startup(function () {
        //console.log(Articles.findOne());
        if (! Articles.findOne()){
            console.log('success');
            console.log('success');
            var articles = [
                {title: 'Article 1', body: 'This is article 1'},
                {title: 'Article 2', body: 'This is article 2'},
                {title: 'Article 3', body: 'This is article 3'}
            ];
            articles.forEach(function (article) {
                Articles.insert(article);
            });
            console.log(Articles.find().count());
        }
    });
}

