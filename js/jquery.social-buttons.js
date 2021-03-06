(function ($, window, document, undefined) {
    var Socials,
        SocialButtons;

    Socials = {
        fb: {            
            share: "http://www.facebook.com/sharer/sharer.php?u="
        },
        vk: {          
            share: "https://vk.com/share.php?url="
        },
        tw: {            
            share: "https://twitter.com/intent/tweet?url="
        },
        ln: {            
            share: "https://www.linkedin.com/cws/share?url="
        },
        pt: {                        
            share: "https://www.pinterest.com/pin/create/bookmarklet/?description=&url="
        },
        ok:{
            share: "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl="
        },
        gl:{
            share: "https://plusone.google.com/_/+1/confirm?hl=en&url="
        },
        tg:{
            share: "https://telegram.me/share/url?url="
        }
    };

    SocialButtons = {
        init: function (options, el) {
            var self = this,
                $el = $(el),
                network = $el.data("social"),
                oSocial = Socials[network];


            if (oSocial) {
                /**
                * VK.com doesn't support callback parameter for JSONP
                * VK.com wanna call VK.Share.count()
                */
                if (network === "vk") {
                    window.VK = window.VK || {};
                    window.VK.Share = VK.Share || {};
                    window.VK.Share.count = function (index, count) {
                        Socials["vk"].count = count;
                    }
                }

                options = options || {};

                if (options.url) {
                    self.shareUrl = options.url;
                } else {
                    self.shareUrl = window.location.href;
                }

                if (oSocial.url) {
                    $.getScript(
                        oSocial.url + self.shareUrl + "&callback=jQuery.fn.socialButtons." + network + "SetCount",
                        function(data, textStatus, jqxhr) {
                            $el.attr("data-count", oSocial.count);
                        }
                    );
                }

                if (oSocial.share) {
                    $el.on("click.socialButtons", function () {
                        window.open(
                            oSocial.share + self.shareUrl, 
                            '', 
                            'menubar=no,toolbar=no,resizable=yes' + 
                            ',scrollbars=yes' +
                            ',height=300,width=600'
                        );
                    });
                }
            }
        },
        setCount: function (network, count) {
            
        },
        getCount: function () {
            
        }
    };

    $.fn.socialButtons = function(options) {
        return this.each(function () {
            var socialButtons = Object.create(SocialButtons);

            if (SocialButtons[options]) {
                return SocialButtons[options].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof options === 'object' || typeof options === 'undefined') {
                return socialButtons.init(options, this);
            } else {
                $.error('"' + options + '" method does not exist in jQuery.switcher');
            }
        });
    };

    for (var network in Socials) {
        if (Socials.hasOwnProperty(network)) {
            $.fn.socialButtons[network + "SetCount"] = Socials[network].callback.bind(Socials[network]);
        }
    }

}(jQuery, window, document));