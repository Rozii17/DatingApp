import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_modules/member';
import { MembersService } from 'src/app/_Services/members.service';
import { PresenceService } from 'src/app/_Services/presence.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor(private memberService: MembersService, private toastr: ToastrService, public presence: PresenceService) { }

  ngOnInit(): void {
  }

  addlike(member: Member) {
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    })
  }

}
