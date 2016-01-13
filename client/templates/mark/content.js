/**
 * Created by dengjing on 16/1/13.
 */

Template.content.onCreated(
    () => {
        Session.setDefault('text', '');
    }
);

Template.content.helpers({
    content: () => {
        return marked(Session.get('text'));
    }
});

Template.content.events({
    'keyup .textarea': (e, t) => {
        var $textarea = $(e.target).find('[name=textarea]');
        t.$('.display').height($textarea.context.scrollHeight);
        if (e.keyCode == 8) {
            console.log('!!');
        }
        Session.set('text', $textarea.context.innerText);
    },
});