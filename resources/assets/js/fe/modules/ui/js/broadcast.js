
export default {
    created() {
        var self = this;
        //Notifications
        window.Echo.private('Properos.Users.Models.User.' + self.user.id)
            .notification((notification) => {
                /* console.log(notification); */
                $('.badge-up').text(notification.title);
            });
    }
}
