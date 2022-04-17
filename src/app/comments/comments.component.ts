import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  Comments = ["Imagine they actually gave freight you needed instead of 3 pallets full of reeses that are already full from the pallets last month",
  "I hate department 82 so much",
  "The only acceptable department where plugging should be allowed. As long as correct sku",
  "Some of those ice cubes are oriented the same way in a forward backward pattern, except the 3 and it bugs me a lot.",
  "This gives me fucking serotonin.",
  "I'm totes addicted to the Ice Cube gums and want all of them I see here. Beautiful!!",
  "Can you teach our people to do that??? I've gone through both scos and all registers getting them set according to the tags...two days later things are plugged. And I'm talking 3 pink starburst boxes in three different spots (right in a row) three different prices...not one is correct! That's just one instance...very irritating!!",
  "Must be a store that is not busy ,our store is the total opposite",
  "Make sure them rotated...lol claims had a whole buggy full of EXPIRED candy....guess people must not he impulse buying it anymore.....?",
  "Every time (day) when i stock the juice in fresh i always zone up and rotate but i never plug. This looks very nice and clean and full. I take pride and a sense of accomplishment where i can find it at walmart.",
  "*gentlemanly claps* Yes, excellent!",
  "How long before customers fucked it up completely?",
  "This is hot",
  "And the rest of the aisles look like trash, right?",
  "Very nice very nice.",
  "Our Market Manager is coming so a good chunk of my shift yesterday was zoning and setting the candy/chips/ toys in the right spots while the TLs put price tags on missing items... I hate Dept 82 soo much as well"];

  constructor() { }

  ngOnInit(): void {
  }

}
