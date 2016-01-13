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
        return marked(Session.get('text')) + '<div id="msg_end"></div>';
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
        //var cul_height = $(e.target).find('#msg_end').context.offsetHeight + 20;
        //console.log($(e.target).find('#msg_end'));
        //console.log($(e.target).find('#msg_end'));
        //t.$('#msg_end').scrollTop($textarea.context.scrollHeight);
        //$(e.target).find('#msg_end').scrollTop();
        //$(e.target).find('#msg_end').scrollIntoView();
        //t.$('.display').scrollTop(cul_height);
    },
});