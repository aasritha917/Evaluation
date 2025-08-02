interface Subscriber{
    update(postTitle: string): void
}
class Blog{
    private subscribers: Subscriber[] = [];

    subscriber(subscriber: Subscriber):void{
        this.subscribers.push(subscriber)
    }
    unsubscriber(subscriber:Subscriber):void{
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber)
    }
    publish(postTitle: string):void{
        console.log(`Blog Post published: "${postTitle}"`)
        for(const subscriber of this.subscribers){
            subscriber.update(postTitle)
        }
    }
}

class EmailSubscriber implements Subscriber{
    update(postTitle: string): void {
        console.log(`Email: New blog post titled '${postTitle}'`)
    }
}
class SMSSubscriber implements Subscriber{
    update(postTitle: string): void {
        console.log(`SMS: New blog post titled '${postTitle}'`)
    }
}

const blog = new Blog()

const EmailSub = new EmailSubscriber();
const smsSub = new SMSSubscriber()

blog.subscriber(EmailSub)
blog.subscriber(smsSub)

blog.publish("Design Patterns in JavaScript")
blog.publish("Observer Pattern Simplified")