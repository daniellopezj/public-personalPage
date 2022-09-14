import { Company } from '@/types/general.types';
import { Component, Input, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public faAngleRight = faAngleRight
  @Input() public company: Company = {
    logo: '',
    link: '',
    title: '',
    sector: '',
    description: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
