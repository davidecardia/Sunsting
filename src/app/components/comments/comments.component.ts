import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../interfaces/comment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() commentsPost: boolean;
  @Input() idPost: number;


  comments: Comment[] = [

    {
      idPost: 7,
      id: 4,
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tom_Cruise_avp_2014_3.jpg/220px-Tom_Cruise_avp_2014_3.jpg",
      author: "Tom Cruise",
      text: "Hello! I am Tom. How are you? <3"
    },
    {
      idPost: 7,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 6,
      id: 4,
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tom_Cruise_avp_2014_3.jpg/220px-Tom_Cruise_avp_2014_3.jpg",
      author: "Tom Cruise",
      text: "Hello! I am Tom. How are you? <3"
    },
    {
      idPost: 6,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },    {
      idPost: 6,
      id: 4,
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tom_Cruise_avp_2014_3.jpg/220px-Tom_Cruise_avp_2014_3.jpg",
      author: "Tom Cruise",
      text: "Hello! I am Tom. How are you? <3"
    },
    {
      idPost: 5,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 4,
      id: 4,
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tom_Cruise_avp_2014_3.jpg/220px-Tom_Cruise_avp_2014_3.jpg",
      author: "Tom Cruise",
      text: "Hello! I am Tom. How are you? <3"
    },
    {
      idPost: 11,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 11,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 12,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 12,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 12,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 13,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 13,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 15,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 16,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 16,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 16,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 16,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 16,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 17,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    },
    {
      idPost: 18,
      id: 3,
      avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg",
      author: "Michelle Obama",
      text: "... -.-"
    }
  ];
  constructor() { }

  ngOnInit() {}

}
