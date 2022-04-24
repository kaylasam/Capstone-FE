import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {
  showPopup: boolean = false;
  topPost: any;
  commentsOnPost: any;
  Comments =["Upvote this post to immediately delete the Walmart Radio		s7s2et	2011	158	https://www.reddit.com/r/walmart/comments/s7s2et/upvote_this_post_to_immediately_delete_the/",
  "We may have a problem		suc7fh	1654	408	https://v.redd.it/k6mqc481qai81",
  "Some moron brought a horse in my store		shttn7	1514	331	https://i.redd.it/o6htl2fht7f81.jpg",
  "Associates are leaving in droves and customers STILL coming in. they said manager won't excuse occurrences tonight but they're also home. I guess 'what's good for me but not for the'		sj5dyj	1251	263	https://i.redd.it/lv5csr5tnif81.jpg",
  "Got reported :,)	I was stocking groceries for the entire day and decided to put in one of my airpods to make the day go by faster. I ended up calling one of my friends while doing my jobs (and essentially showing them what I do for a living) until I got stopped by this old guy. The conversation goes as following: Old Guy: Excuse me, (name), are you on break? Me: Nope. Just stocking. Old Guy: You shouldn’t be talking to anyone while stocking. Me: Alright, sorry about that. I showed him that I hung up and thought that was the end of it, but BOY was I wrong. One of the people working with him pulls me aside and tells me that if old guy catches me on my phone again, he’s gonna report me. Keep in mind: this guy HATES old guy, so we kinda just laugh it off. The minute I go back to stocking, all my coworkers tell me that Old Guy told everyone he reported me. Not only that, but he followed us around non-stop while pretending to zone. I hit my limit and clocked out early. I already talked to a manager, so I’m covered. The whole situation kinda pissed me off though, so I just wanted to vent. And for the record: I am aware I shouldn’t have been on my phone. You don’t need to remind me.	smgub9	347	186	https://www.reddit.com/r/walmart/comments/smgub9/got_reported/",
  "Just wanted to vent real quick and make sure that I’m not missing something	I just got done filling the water aisle. This older lady asked me to help her get down two zephyr hills water gallons, because she couldn’t reach them. I couldn’t either, so I reached underneath them and used my box cutter to pull them closer to me, that round end of it, so I could grab them. She kinda looked at me hesitantly, and said, “there’s no metal in them now, from you using that on them right?” I was at a loss for words and didn’t really know what to say, and pretty much said no. She said, “because they’re for Guinea pigs, so I need to make sure there’s no shards or anything in them.” Still flabbergasted, I kinda stammered, moved the cutter around in like a weird 360° view, and gave a dumb response, (because I was still so confused) and said, “no, it’s a safety cutter.” And walked away. I noticed she didn’t leave the aisle after I left. So I waited a second and then peeked back down the aisle. And lo’ and behold, she was struggling to get down two different ones because she must have believed that I was an evil Guinea pig killer, who magically can put pieces of metal inside a container of water, without making it leak. I wanted so bad to say something to her, but I knew it wasn’t worth it. Not that I wish harm on anyone, but I was kind of hoping that one might fall down and bonk her on the head, for wasting my time.	sl4dvg	349	49	https://www.reddit.com/r/walmart/comments/sl4dvg/just_wanted_to_vent_real_quick_and_make_sure_that/",
  "I’m so tired of this freaking company. Reason #45"];
  data = {"SubReddit": {
            "r/wallmart": {
              "TopPosts": [{
                    "NumberOfComments": "20",
                    "PostText": "This is the text that represents the post", 
                    "TopPostAnalysis": {
                      "good": "30",
                      "bad":"40",
                      "neutral":"30"},
                    "TopComments": [{"comment":"this is cool",
                                      "rating":"1"},
                                      {"comment":"i hate this app",
                                      "rating":"0"},
                                      {"comment":"help me",
                                      "rating":"2"},
                                      {"comment":"walmart is the worst place in the world",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"},
                                      {"comment":"deth",
                                      "rating":"1"}]
        },
        {
          "NumberOfComments": "20",
          "PostText": "post text example", 
          "TopPostAnalysis": {
            "good": "30",
            "bad":"40",
            "neutral":"30"},
          "TopComments": [{"comment":"text2",
                            "good":"30","bad":"40","neutral":"30"}]
        },],
        "SubRedditAnalysis": {
            "Good": "30%",
            "Bad": "40%",
            "Neutral": "30%"
        }
    }
}};
  result = this.data.SubReddit['r/wallmart'].TopPosts;
  constructor() { }

  ngOnInit(): void {
  }
  OpenPopup(post: any): void {
    this.showPopup = !this.showPopup;
    this.topPost = post;
    this.commentsOnPost = post.TopComments;
    console.log(this.commentsOnPost);
  }
  
}
