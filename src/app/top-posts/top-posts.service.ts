import { Injectable } from '@angular/core';
import { ITopPost } from './top-posts';

@Injectable({
  providedIn: 'root'
})
export class TopPostsService {

  getTopPosts(): ITopPost[]{
    return [
      {
        id: 1,
        title: "Upvote this post to immediately delete the Walmart Radio		s7s2et	2011	158	https://www.reddit.com/r/walmart/comments/s7s2et/upvote_this_post_to_immediately_delete_the/"
      },
      {
        id: 2,
        title: "We may have a problem		suc7fh	1654	408	https://v.redd.it/k6mqc481qai81"
      },
      {
        id: 3,
        title: "Some moron brought a horse in my store		shttn7	1514	331	https://i.redd.it/o6htl2fht7f81.jpg"
      },
      {
        id: 4,
        title: "Associates are leaving in droves and customers STILL coming in. they said manager won't excuse occurrences tonight but they're also home. I guess 'what's good for me but not for the'		sj5dyj	1251	263	https://i.redd.it/lv5csr5tnif81.jpg"
      },
      {
        id: 5,
        title: "fuck walmart.		skj2ks	1194	149	https://www.reddit.com/r/walmart/comments/skj2ks/fuck_walmart/"
      },
      {
        id: 6,
        title: "Crossover with r/antiwork		spkmzk	1173	217	https://i.redd.it/8nym7iyrh3h81.jpg"
      },
      {
        id: 7,
        title: "My man brought all the chicken breast in the store, there goes our ftpr :(		scgo04	1072	262	https://i.redd.it/imfven4huud81.jpg"
      },
      {
        id: 8,
        title: "You can't deny this call out 😘😏🤭❄️🧊		sjpl9g	1052	44	https://i.redd.it/p151nbtopnf81.jpg"
      },
      {
        id: 9,
        title: "'Excuse me, do you work here?'		skkw8b	992	226	https://i.redd.it/p6gh5fc23vf81.jpg"
      },
      {
        id: 10,
        title:  "This is how we do it....		stuvcm	946	147	https://www.reddit.com/gallery/stuvcm"
      },
      {
        id: 11,
        title: "I have officially demoted myself to Walmart employee after being a sub lurker for a while!		sd99c3	927	374	https://i.redd.it/7pwtxk6v12e81.jpg"
      },
      {
        id: 12,
        title: "Customers are really this dumb?		sq98q0	894	439	https://i.redd.it/jw8caof5o9h81.jpg"
      },
      {
        id: 13,
        title: "They took away almost all the seating in our break room, there’s literally not anywhere to sit most of the time. I’ve had to start taking my lunches at weird times to catch an empty chair 😭		se4ei1	891	269	https://i.redd.it/91wn37h3s9e81.jpg"
      },
      {
        id: 14,
        title: "Some sick freak was following a woman for 30 minutes jerking off to her until she found AP. She caught these images by putting her phone in her back pocket.		sn7tpu	861	275	https://www.reddit.com/gallery/sn7tpu"
      }
    ]
  }



}
