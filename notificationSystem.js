var Blog = /** @class */ (function () {
    function Blog() {
        this.subscribers = [];
    }
    Blog.prototype.subscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    Blog.prototype.unsubscriber = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (sub) { return sub !== subscriber; });
    };
    Blog.prototype.publish = function (postTitle) {
        console.log("\n Blog Post published: \"".concat(postTitle, "\""));
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(postTitle);
        }
    };
    return Blog;
}());
var EmailSubscriber = /** @class */ (function () {
    function EmailSubscriber() {
    }
    EmailSubscriber.prototype.update = function (postTitle) {
        console.log("Email: New blog post titled '".concat(postTitle, "'"));
    };
    return EmailSubscriber;
}());
var SMSSubscriber = /** @class */ (function () {
    function SMSSubscriber() {
    }
    SMSSubscriber.prototype.update = function (postTitle) {
        console.log("SMS: New blog post titled '".concat(postTitle, "'"));
    };
    return SMSSubscriber;
}());
var blog = new Blog();
var EmailSub = new EmailSubscriber();
var smsSub = new SMSSubscriber();
blog.subscriber(EmailSub);
blog.subscriber(smsSub);
blog.publish("Design Patterns in JavaScript");
blog.publish("Observer Pattern Simplified");
