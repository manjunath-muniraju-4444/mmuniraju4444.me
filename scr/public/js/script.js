jQuery(document).ready(function() {
    var footerLink = new Vue({
        el: '#footer-link',
        data :{
            gitURL : "http://github.com/manjunath-muniraju-4444",
            blogURL : "http://mmuniraju4444.website"
        },
        methods: {
            gotoGit: function () {
                window.open(this.gitURL,'_blank');
            },
            gotoBlog: function () {
                window.open(this.blogURL,'_blank');
            }
        }
    });
});
